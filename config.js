import firebase from 'firebase'
require("@firebase/firestore")

  const firebaseConfig = {
    apiKey: "AIzaSyDBGQrAkXKBn-IwQAjmfa8mTnU5CTJjlJM",
    authDomain: "project-69710.firebaseapp.com",
    projectId: "project-69710",
    storageBucket: "project-69710.appspot.com",
    messagingSenderId: "563642621028",
    appId: "1:563642621028:web:cea266b8316157603cd371"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

