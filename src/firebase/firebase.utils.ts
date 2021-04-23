import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBeInhK25iFZNFXweWJ8BePCJ5eHnS7pK8",
  authDomain: "e-commerce-db-8fb57.firebaseapp.com",
  databaseURL: "https://e-commerce-db-8fb57.firebaseio.com",
  projectId: "e-commerce-db-8fb57",
  storageBucket: "e-commerce-db-8fb57.appspot.com",
  messagingSenderId: "462295283678",
  appId: "1:462295283678:web:314d568b66f64ab0e90f4f"
}

export const createUserProfileDocument = async (userAuth: any, additionalData?: any) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;