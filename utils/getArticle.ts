import { DB } from "@/auth/FirebaseConfig"
import { Result } from "@/types/NewsApiTypes";
import { doc, getDoc, getDocFromCache } from "firebase/firestore"

export const getArticle = async (title : string) : Promise<Result | undefined> => { 
  try {
    const docRef = doc(DB, "Article", title);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as Result;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
}