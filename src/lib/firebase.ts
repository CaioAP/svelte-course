import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCZAVaZ4OPasc7-wPthlnTFGNCcXviUwYs",
  authDomain: "svelte-course-df151.firebaseapp.com",
  projectId: "svelte-course-df151",
  storageBucket: "svelte-course-df151.appspot.com",
  messagingSenderId: "894956301970",
  appId: "1:894956301970:web:0e89ade951915f26a7404b",
  measurementId: "G-XNWVRWRY44"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();