// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvOMQoeTuJ3XT_v2hnMaJhL9fprr4IovQ',
  authDomain: 'retrac-38.firebaseapp.com',
  projectId: 'retrac-38',
  storageBucket: 'retrac-38.appspot.com',
  messagingSenderId: '14585490630',
  appId: '1:14585490630:web:3be4f554c5703e780d7bc7',
  measurementId: 'G-W2GKW2242T',
};

// Initialize Firebase
// export const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
