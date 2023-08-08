import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyBa2VLZPPitO1y3UlBzYCZDUMbwqKX3cIw",
    authDomain: "movie-app-last.firebaseapp.com",
    projectId: "movie-app-last",
    storageBucket: "movie-app-last.appspot.com",
    messagingSenderId: "349540155905",
    appId: "1:349540155905:web:82a071e96eca14e8a8b600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);