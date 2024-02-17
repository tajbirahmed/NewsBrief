import { signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";

interface SignOutProps {
    signOutLoading: boolean,
    setSignOutLoading: (signOutLoading: boolean) => void, 
}
export const signout = async ({ 
    signOutLoading, 
    setSignOutLoading
}:SignOutProps) => {
    setSignOutLoading(true);
    try {
        const response = await signOut(FIREBASE_AUTH);

    } catch (e: any) {
        alert('Error Occured Logging out');
    } finally {
        setSignOutLoading(false);
    }
}