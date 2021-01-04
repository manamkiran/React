import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAdJ9OdQ1QpSMSR7gQ7sQ8_pPrlo13D0Mk",
  authDomain: "react-dac72.firebaseapp.com",
  projectId: "react-dac72",
  storageBucket: "react-dac72.appspot.com",
  messagingSenderId: "241091719472",
  appId: "1:241091719472:web:c45789458ed990248158f5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
