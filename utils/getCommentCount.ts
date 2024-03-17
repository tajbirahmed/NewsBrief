import { DB, FIREBASE_AUTH } from "@/auth/FirebaseConfig";
import { Timestamp, collection, getDocs, query, where } from "firebase/firestore";

export async function getCommentCount() {
  const userName = FIREBASE_AUTH.currentUser?.displayName
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);
  const endDate = new Date();
  const collectionRef = collection(DB, "Comment");
  const q = query(collectionRef,
    where("userName", "==", userName),
  );

  const snapshot = await getDocs(q);

  const viewData: number[] = Array(7).fill(0);

  snapshot.forEach((doc) => {
    const data = doc.data();
    const dateViewed = data.dateCreated.toDate();
    if (dateViewed >= startDate && dateViewed <= endDate) {
      const dayOfWeek = dateViewed.getDay();
      viewData[dayOfWeek] += 1;
    }
  });

  return viewData;
}