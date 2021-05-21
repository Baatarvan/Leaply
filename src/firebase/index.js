import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyByVlvhI20Zi3wZxxWXz9aMCXxYgTiaz98',
  authDomain: 'leaply-9ad78.firebaseapp.com',
  projectId: 'leaply-9ad78',
  storageBucket: 'leaply-9ad78.appspot.com',
  messagingSenderId: '509362918199',
  appId: '1:509362918199:web:3e79b0cbf56d89956000b2',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
