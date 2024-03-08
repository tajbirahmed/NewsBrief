import { FIREBASE_STORAGE } from "@/auth/FirebaseConfig";
import { User, updateProfile } from "firebase/auth";
import { ref, getDownloadURL } from "firebase/storage";

export const getPhotoUrl = async (user: User, uri : string, userName : string) => { 
  const fileExtenstion = uri.split('.').pop();
  let url: string = "";
  getDownloadURL(ref(FIREBASE_STORAGE, `ProfileImages/${userName}.${fileExtenstion}`))
    .then((URL) => {
      console.log(URL);
      updateProfile(user, {
        photoURL: URL
      })
    })
    .catch((error) => {
      console.log(error);
    });
} 