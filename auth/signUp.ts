import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { DB, FIREBASE_AUTH } from "./FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const actionCodeSettings = {
    url: 'https://newsbiref.firebaseapp.com',
    handleCodeInApp: true,
    dynamicLinkDomain: 'newsbrief.page.link'
};

interface SignUpPops { 
    signUpLoading: boolean 
    setSignUpLoading: (signUpLoading: boolean) => void, 
    verificationLinkStatus: boolean, 
    setVerificationLinkStatus: (verificationLinkStatus: boolean) => void
    email: string, 
    password: string, 
    userName: string,
    profilePhoto?: string,
}

export const signUp = async ({ 
    signUpLoading, 
    setSignUpLoading, 
    verificationLinkStatus, 
    setVerificationLinkStatus,
    email, 
    password, 
    userName, 
    profilePhoto, 
} : SignUpPops) => {
    setSignUpLoading(true);
    try {
        const response =
            await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        await sendEmailVerification(response.user, actionCodeSettings);
        const docRef = await addDoc(collection(DB, 'users'), {
            user_name: userName,
        })
        console.log(profilePhoto);
        
        await updateProfile(response.user, {
            displayName: userName, 
            photoURL: profilePhoto,
        }).catch((e: any) => console.log(e))
        if (!response.user.emailVerified) {
            signOut(FIREBASE_AUTH);
        }
        setVerificationLinkStatus(true);
        console.log(response.user.displayName);
        
    } catch (e: any) {
        alert('Internel Error!' + e.message);
    } finally {
        setSignUpLoading(false);
    }
}