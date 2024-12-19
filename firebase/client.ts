// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiRODT9fa0pfiRdQL8baE56uX55yJPWa4",
  authDomain: "tech-tribe-5de7a.firebaseapp.com",
  projectId: "tech-tribe-5de7a",
  storageBucket: "tech-tribe-5de7a.firebasestorage.app",
  messagingSenderId: "85257253267",
  appId: "1:85257253267:web:f34441840b84ab18b83866"
};

// Initialize Firebase
const currentApps = getApps();
let auth:Auth; 
let storage:FirebaseStorage;

if (currentApps.length === 0) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
    auth = getAuth(currentApps[0]);
    storage = getStorage(currentApps[0]);
    }

export { auth, storage };