import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { type User, getAuth, onAuthStateChanged } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';

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

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return { subscribe };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    })

    return () => unsubscribe();
  })

  return { subscribe };
}

export const user = userStore();