import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { DB, FIREBASE_AUTH } from "./FirebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { imageUploadFirebase } from "@/utils/imageUploadFirebase";
import { getPhotoUrl } from "@/utils/getPhotoUrl";
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
    profilePhoto: string,
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
        await imageUploadFirebase(profilePhoto, userName);
        const response =
            await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        await sendEmailVerification(response.user, actionCodeSettings);
        const docRef = await setDoc(doc(DB, 'User', email.toLowerCase()), {
            userName: userName, 
            dateJoined: new Date(),
        })
        
        await updateProfile(response.user, {
            displayName: userName, 
            photoURL: profilePhoto
        }).catch((e: any) => console.log(e))
        getPhotoUrl(response.user, profilePhoto, userName)
        if (!response.user.emailVerified) {
            signOut(FIREBASE_AUTH);
        }
        setVerificationLinkStatus(true);
        
        
    } catch (e: any) {
        alert('Internel Error!' + e.message);
    } finally {
        setSignUpLoading(false);
    }
}

