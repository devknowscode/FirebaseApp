// Import the functions you need from the SDKs you need
import firebase from "@react-native-firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7PedR65Ml1HzKx4tLsAiNjiIUevOXR2E",
  authDomain: "fir-app-aa184.firebaseapp.com",
  projectId: "fir-app-aa184",
  storageBucket: "fir-app-aa184.appspot.com",
  messagingSenderId: "862959133490",
  appId: "1:862959133490:web:398dc8e45aa3a363606d2b"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }