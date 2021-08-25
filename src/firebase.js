import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8ieRWJbotRAIKJvqn-DjltXmclDj1w38",
    authDomain: "shopping-site-1c346.firebaseapp.com",
    projectId: "shopping-site-1c346",
    storageBucket: "shopping-site-1c346.appspot.com",
    messagingSenderId: "301839349555",
    appId: "1:301839349555:web:514b85a01006cb6cf5b046",
    measurementId: "G-51W6GMK5XM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
