import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCfCb865RtDJjjQct2mB8WmFUMfZgXf92Q",
  authDomain: "fireblogs-d5b62.firebaseapp.com",
  projectId: "fireblogs-d5b62",
  storageBucket: "fireblogs-d5b62.appspot.com",
  messagingSenderId: "198909423048",
  appId: "1:198909423048:web:8db0d1c3e46461ec1de4fd",
  measurementId: "G-EJLP0C6MWH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
