import { DB, FIREBASE_AUTH } from "@/auth/FirebaseConfig"
import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore"

export const addRating = async (
	rating: number,
	setRating: (rating: number) => void,
	first: boolean,
	setFirst: (first: boolean) => void) => {
	const appCollectionRef = collection(DB, "App"); 
	const q = query(appCollectionRef,
		where("userName", "==", FIREBASE_AUTH.currentUser?.displayName)); 
	const querySnapShot = await getDocs(q); 
	if (querySnapShot.empty) {
		const docRef = await addDoc(appCollectionRef, {
			userName: FIREBASE_AUTH.currentUser?.displayName, 
			rating: rating
		})
	} else { 
		setFirst(false); 
		querySnapShot.forEach((doc) => { 
			updateDoc(doc.ref, {
				rating: rating,
			})
		})
	}
}