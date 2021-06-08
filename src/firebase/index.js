import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  // apiKey: 'AIzaSyByVlvhI20Zi3wZxxWXz9aMCXxYgTiaz98',
  // authDomain: 'leaply-9ad78.firebaseapp.com',
  // projectId: 'leaply-9ad78',
  // storageBucket: 'leaply-9ad78.appspot.com',
  // messagingSenderId: '509362918199',
  // appId: '1:509362918199:web:3e79b0cbf56d89956000b2',
  apiKey: 'AIzaSyC7eHvHD9OXVIEUU1K_KyavzPfhdkhZYaM',
  authDomain: 'leaply-nest.firebaseapp.com',
  projectId: 'leaply-nest',
  storageBucket: 'leaply-nest.appspot.com',
  messagingSenderId: '294575023785',
  appId: '1:294575023785:web:a8cda7dfa764fa86a9abb8',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
