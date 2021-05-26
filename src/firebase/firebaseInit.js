import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyB87zGzp68HDfk-iEQRHbu2rO04vJRjxq4',
  authDomain: 'fireblogs-c44b5.firebaseapp.com',
  projectId: 'fireblogs-c44b5',
  storageBucket: 'fireblogs-c44b5.appspot.com',
  messagingSenderId: '1092882589',
  appId: '1:1092882589:web:c3d1c4f2ef16e00bb38474',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
