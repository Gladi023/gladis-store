import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDvUwQLNHmK7KaYPepPieqPX6R3TNIVPzY",
  authDomain: "gladys-store-cf543.firebaseapp.com",
  projectId: "gladys-store-cf543",
  storageBucket: "gladys-store-cf543.appspot.com",
  messagingSenderId: "14405862917",
  appId: "1:14405862917:web:ed96c73e992d29df953e6c"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);