import { DB } from "@/auth/FirebaseConfig";
import { Result } from "@/types/NewsApiTypes";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";



export const saveArticle = async (article: Result) => {
    const docref = doc(DB, "Article", article.title.toLowerCase());
    const docSnap = await getDoc(docref); 
    if (!docSnap.exists()) {
        try {
            const res = await setDoc(docref, article);   
        } catch (error) {
            console.log(error);
        }
    } else { 

    }
}