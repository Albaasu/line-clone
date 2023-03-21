import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDd22hOhGTzJGAgzw00ViOdpwBdkCOik38',
  authDomain: 'line-clone-701b7.firebaseapp.com',
  projectId: 'line-clone-701b7',
  storageBucket: 'line-clone-701b7.appspot.com',
  messagingSenderId: '277211728139',
  appId: '1:277211728139:web:adaf5d46d074aafe1e3a0e',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
