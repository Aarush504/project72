import firebase from 'firebase';
require("@firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyDTKpBDu9m_vOsbXdC7zecpjGUKuj6IzkM",
    authDomain: "story-app-aeb78.firebaseapp.com",
    projectId: "story-app-aeb78",
    storageBucket: "story-app-aeb78.appspot.com",
    messagingSenderId: "20452927644",
    appId: "1:20452927644:web:6eabb88e011e4a52dba559"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();