import { DB, FIREBASE_AUTH } from "@/auth/FirebaseConfig"
import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore"

export const getRating = async (
	rating: number,
	setPreRating: (rating: number) => void,
	first: boolean,
	setFirst: (first: boolean) => void) => {
	const appCollectionRef = collection(DB, "App"); 
	const q = query(appCollectionRef,
		where("userName", "==", FIREBASE_AUTH.currentUser?.displayName)); 
	const querySnapShot = await getDocs(q); 
	
   
	if (!querySnapShot.empty) {
		setFirst(false);
		querySnapShot.forEach((doc) => {
			setPreRating(doc.data().rating)
		})
	}
}