import { FIREBASE_STORAGE } from "@/auth/FirebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

export const imageUploadFirebase = async (uri : string, userName: string) => { 
  const blob = await new Promise<Blob>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const fileExtenstion = uri.split('.').pop();
  const photoRef = ref(FIREBASE_STORAGE, `ProfileImages/${userName}.${fileExtenstion}`);
  uploadBytes(photoRef, blob)
    .then((snapshot) => {
      //
    }).catch((e) => console.log(e)
    )

}