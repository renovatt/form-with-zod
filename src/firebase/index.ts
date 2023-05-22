import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// const firebaseConfig = {
//     apiKey: "AIzaSyDGmvN4bBVGpzUCJwG0DzSUv-RbdA00e5g",
//     authDomain: "galery-vite-ts.firebaseapp.com",
//     projectId: "galery-vite-ts",
//     storageBucket: "galery-vite-ts.appspot.com",
//     messagingSenderId: "155323004978",
//     appId: "1:155323004978:web:2ae0fbc4e6a419c946242b"
// };

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)