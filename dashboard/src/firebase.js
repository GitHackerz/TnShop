import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqivYZbHAkDpwdSCXDFYi8qkQdpy-3UiI",
  authDomain: "tnshop-7238c.firebaseapp.com",
  projectId: "tnshop-7238c",
  storageBucket: "tnshop-7238c.appspot.com",
  messagingSenderId: "523338854993",
  appId: "1:523338854993:web:e1bcea3020642d0f167e70",
  measurementId: "G-B6NL4DB929",
};
// console.log(process.env.REACT_APP_FIREBASE_API_KEY)
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();

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
const FacebookProvider = new FacebookAuthProvider();

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
