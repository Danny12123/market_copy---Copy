// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJQLaYvnRBF9vkW3zFK8HG4J78o2-oJr8',
  authDomain: 'boaz-a78f0.firebaseapp.com',
  projectId: 'boaz-a78f0',
  storageBucket: 'boaz-a78f0.appspot.com',
  messagingSenderId: '380982255884',
  appId: '1:380982255884:web:ca9ebf5b754bf4e52ee929',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
