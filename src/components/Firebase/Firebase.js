import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMmraqLsTkE91zL_tSsV_vA_eDyISb1Y0",
  authDomain: "al-lobby.firebaseapp.com",
  projectId: "al-lobby",
  storageBucket: "al-lobby.appspot.com",
  messagingSenderId: "1074454564817",
  appId: "1:1074454564817:web:90a93cfac886719798daf0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
