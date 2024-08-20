import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: FIREBASE_APIKEY,
 authDomain: FIREBASE_AUTHDOMAIN,
 projectId: FIREBASE_PROJECTID,
 storageBucket: FIREBASE_STORAGEBUCKET,
 messagingSenderId: FIREBASE_MESSAGINGSENDER,
 appId: FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
