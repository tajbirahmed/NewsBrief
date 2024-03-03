import { FIREBASE_STORAGE } from "@/auth/FirebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

export const getPhotoUrl = (uri : string, userName : string) : string => { 
  const fileExtenstion = uri.split('.').pop();
  let url: string = "";
  getDownloadURL(ref(FIREBASE_STORAGE, `ProfileImages/${userName}.${fileExtenstion}`))
    .then((URL) => {
      url = URL
    })
    .catch((error) => {
      console.log(error);
      
    });
    return url;
} 