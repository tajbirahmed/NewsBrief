import { DB } from "@/auth/FirebaseConfig";
import { User } from "firebase/auth";
import { collection, query, where, getDocs, onSnapshot, doc, setDoc, updateDoc, addDoc, increment } from "firebase/firestore";


export const saveArticleInfo = async (user : User, title: string) => {
  const q = query(collection(DB, "UserArticle"),
    where("title", "==", title),
    where("userName", "==", user.displayName));
    const docs = await getDocs(q); 
    const ref = collection(DB, "UserArticle");
    if (docs.empty) { 
      addDoc(ref, {
        userName: user.displayName,
        dateViewed: new Date(),
        isDisliked: false,
        isFavorite: false,
        isLiked: false,
        isShared: false,
        title: title,
        viewCount: 1,
      })
    } else {
      docs.forEach((doc) => { 
        updateDoc(doc.ref, {
          dateViewed: new Date(),
          viewCount: increment(1),
        })
      })
    }
}