import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqivYZbHAkDpwdSCXDFYi8qkQdpy-3UiI",
  authDomain: "tnshop-7238c.firebaseapp.com",
  projectId: "tnshop-7238c",
  storageBucket: "tnshop-7238c.appspot.com",
  messagingSenderId: "523338854993",
  appId: "1:523338854993:web:e1bcea3020642d0f167e70",
  measurementId: "G-B6NL4DB929",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Storage = getStorage();

export const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, GoogleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const name = user.displayName;
      const email = user.email;
      const photoUrl = user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("photoUrl", photoUrl);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const signInWithFacebook = async () => {
  signInWithPopup(auth, FacebookProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      const name = user.displayName;
      const email = user.email;
      const photoUrl = user.photoURL;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const accessToken = credential.accessToken;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("photoUrl", photoUrl);

      // ...
    })
    .catch((error) => {
      console.log(error);
    });
};

export default app;
