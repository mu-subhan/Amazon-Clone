import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyA54C8fP3M6OR4_T7KG_4ObI-qA5-k4s40",
    authDomain: "clone-a006d.firebaseapp.com",
    projectId: "clone-a006d",
    storageBucket: "clone-a006d.appspot.com",
    messagingSenderId: "253945865803",
    appId: "1:253945865803:web:58af17fcb2c2a57bdb0fce"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};