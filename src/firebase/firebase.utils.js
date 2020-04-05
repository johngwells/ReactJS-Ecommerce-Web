import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDIoKIYIu5nh4HlY-kKwad0FQ8BTfo6vqU',
  authDomain: 'ecom-db-d24ed.firebaseapp.com',
  databaseURL: 'https://ecom-db-d24ed.firebaseio.com',
  projectId: 'ecom-db-d24ed',
  storageBucket: 'ecom-db-d24ed.appspot.com',
  messagingSenderId: '123725190904',
  appId: '1:123725190904:web:ffffe86b2db45aa6d70d0d',
  measurementId: 'G-0ZQ5CFF8M4'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
