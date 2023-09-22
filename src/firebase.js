import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBsnIpaFu2YZewiXePW-TbkWJFsbmHa6Us",
  authDomain: "netfree-9d685.firebaseapp.com",
  projectId: "netfree-9d685",
  storageBucket: "netfree-9d685.appspot.com",
  messagingSenderId: "44227704179",
  appId: "1:44227704179:web:f38bc821010ad3a39a0106"
};

const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
export const auth = getAuth(app);
export default db;