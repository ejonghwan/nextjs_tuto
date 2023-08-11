import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FB_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_SENDERID,
  appId: process.env.NEXT_PUBLIC_FB_APPID
};

firebase.initializeApp(firebaseConfig);

export default firebase;