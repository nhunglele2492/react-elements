import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "unreadablestuff",
  authDomain: "bl-react-elements.firebaseapp.com",
  databaseURL: "https://bl-react-elements.firebaseio.com",
  storageBucket: "bl-react-elements.appspot.com",
  messagingSenderId: "123123123123"
};
var fire = firebase.initializeApp(config);
export default fire;
