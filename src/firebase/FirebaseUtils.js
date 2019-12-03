import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAlU5NG1zPPB8KkedeAh_9r8e3A8sH05WU",
  authDomain: "crwn-db-38a78.firebaseapp.com",
  databaseURL: "https://crwn-db-38a78.firebaseio.com",
  projectId: "crwn-db-38a78",
  storageBucket: "crwn-db-38a78.appspot.com",
  messagingSenderId: "890565389111",
  appId: "1:890565389111:web:ef3ced0c8abc8e645a88b2",
  measurementId: "G-SQCDL2GH99"
};

export const createUserProfileDocument = async (userAuth, additionalData) => { 
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
       ...additionalData
      })
    } catch (err) {
      console.log(`error creating user `, err.message);
    }
  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

