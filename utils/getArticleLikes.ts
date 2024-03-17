import { DB, FIREBASE_AUTH } from "@/auth/FirebaseConfig";
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore";

export async function getArticleLikes() {
    const userName = FIREBASE_AUTH.currentUser?.displayName
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7); 
    const endDate = new Date();
    const collectionRef = collection(DB, "UserArticle");
    const q = query(collectionRef,
        where("userName", "==", userName),
        where("isLiked", "==", true)
    );

    const snapshot = await getDocs(q);

    const viewData: number[] = Array(7).fill(0);

    snapshot.forEach((doc) => {
        const data = doc.data();
        const dateViewed = data.dateViewed.toDate();
        if (dateViewed >= startDate && dateViewed <= endDate) {
            const dayOfWeek = dateViewed.getDay();
            viewData[dayOfWeek] += 1;
        }
    });

    return viewData;
}