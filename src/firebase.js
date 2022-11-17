import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNgKkzchjYkajYOSBxrMJSgsj2kmzW538",
  authDomain: "react-video-app-e8c1c.firebaseapp.com",
  projectId: "react-video-app-e8c1c",
  storageBucket: "react-video-app-e8c1c.appspot.com",
  messagingSenderId: "812990239322",
  appId: "1:812990239322:web:d7ba202850f3534dcd7e63",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
