import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCVuSq2fyWpQP98f7I_SIhbS-sb4KLR22E",
    authDomain: "final-project-92188.firebaseapp.com",
    projectId: "final-project-92188",
    databaseURL: "https://final-project-92188.firebaseio.com",
    storageBucket: "final-project-92188.appspot.com",
    messagingSenderId: "1061767539422",
    appId: "1:1061767539422:web:c39e6af038c93c5f1cf04f",
    measurementId: "G-6NJ6EVP6ZQ",
});

export default app;
