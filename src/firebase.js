import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAJOIrB04ffYE6bSc9TI2z2HeAK_8ndQeQ",
  authDomain: "office-rpg-11f22.firebaseapp.com",
  databaseURL: "https://office-rpg-11f22.firebaseio.com",
  storageBucket: "office-rpg-11f22.appspot.com",
  messagingSenderId: "988982071504"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
