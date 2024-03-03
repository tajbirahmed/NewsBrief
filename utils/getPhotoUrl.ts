import { FIREBASE_STORAGE } from "@/auth/FirebaseConfig";
import { ref, getDownloadURL } from "firebase/storage";

export const getPhotoUrl = (uri : string, userName : string) : string | undefined => { 
  const fileExtenstion = uri.split('.').pop();
  getDownloadURL(ref(FIREBASE_STORAGE, `ProfileImages/${userName}.${fileExtenstion}`))
    .then((url) => {
      console.log(url);
      return url;
    })
    .catch((error) => {
      // Handle any errors
    });
    return undefined;
} 