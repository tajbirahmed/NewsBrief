import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

interface SignInProps {
    loading: boolean,
    setLoading: (loading: boolean) => void,
    showAuthScreen: boolean,
    setShowAuthScreen: (showAuthScreen: boolean) => void,
    email: string,
    password: string,
}

export const signIn = async ({
    loading,
    setLoading,
    showAuthScreen,
    setShowAuthScreen,
    email,
    password
}: SignInProps) => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        if (!response.user.emailVerified) {
            alert('Verify Email!'); 
            signOut(FIREBASE_AUTH);
        } else
            setShowAuthScreen(false);
    } catch (error: any) {
        console.log(error);
        alert('Check your emails');
    } finally {
        setLoading(false);
    }
}