// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: 'AIzaSyBJQLaYvnRBF9vkW3zFK8HG4J78o2-oJr8',
//   authDomain: 'boaz-a78f0.firebaseapp.com',
//   projectId: 'boaz-a78f0',
//   storageBucket: 'boaz-a78f0.appspot.com',
//   messagingSenderId: '380982255884',
//   appId: '1:380982255884:web:ca9ebf5b754bf4e52ee929',
// }

const firebaseConfig = {
  apiKey: 'AIzaSyB5OiHBlFntdhna_yZ_nlgcBJjLr8whjqI',
  authDomain: 'school-app-bc55b.firebaseapp.com',
  projectId: 'school-app-bc55b',
  storageBucket: 'school-app-bc55b.appspot.com',
  messagingSenderId: '313326473997',
  appId: '1:313326473997:web:f2d0f3785c5daddafe5644',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
