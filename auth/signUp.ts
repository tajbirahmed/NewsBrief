import { createUserWithEmailAndPassword, sendEmailVerification, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

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
}

export const signUp = async ({ 
    signUpLoading, 
    setSignUpLoading, 
    verificationLinkStatus, 
    setVerificationLinkStatus,
    email, 
    password, 
} : SignUpPops) => {
    setSignUpLoading(true);
    try {
        const response =
            await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        await sendEmailVerification(response.user, actionCodeSettings);
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