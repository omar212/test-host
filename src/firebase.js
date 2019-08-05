import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var config = {
    apiKey: "AIzaSyAnMQJJiUtWgjpuHkQCt9_dz2kr1TvrZkc",
    authDomain: "sef-green.firebaseapp.com",
    databaseURL: "https://sef-green.firebaseio.com",
    projectId: "sef-green",
    storageBucket: "sef-green.appspot.com",
    messagingSenderId: "638926791799",
    appId: "1:638926791799:web:f402502492c68c8f"
  };
  
  firebase.initializeApp(config);

export default firebase;