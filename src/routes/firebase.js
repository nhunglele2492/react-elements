// src/firebase.js
import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyB9iBMAuMlPfYSIA4q16PfFuBVAUN6pjxM",
    authDomain: "bl-react-elements.firebaseapp.com",
    databaseURL: "https://bl-react-elements.firebaseio.com",
    projectId: "bl-react-elements",
    storageBucket: "bl-react-elements.appspot.com",
    messagingSenderId: "871291585480"
};
firebase.initializeApp(config);

export default firebase;
