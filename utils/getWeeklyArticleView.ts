import { DB, FIREBASE_APP, FIREBASE_AUTH } from "@/auth/FirebaseConfig";
import { collection, query, where, getDocs, Timestamp, Firestore } from "firebase/firestore";



export async function getWeeklyArticleView() {
  const userName = FIREBASE_AUTH.currentUser?.displayName
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7); 

  const endDate = new Date();

  const collectionRef = collection(DB, "UserArticle");
  const q = query(collectionRef, where("userName", "==", userName));

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