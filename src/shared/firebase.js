import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2fKMGe4q3twWxtXudKZbu77_PFmGKuDQ",
    authDomain: "cs394scheduler.firebaseapp.com",
    databaseURL: "https://cs394scheduler.firebaseio.com",
    projectId: "cs394scheduler",
    storageBucket: "cs394scheduler.appspot.com",
    messagingSenderId: "922136497221",
    appId: "1:922136497221:web:2c7a5fe19eb2e52662672c",
    measurementId: "G-QGJBR2KN0G"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;