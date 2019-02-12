import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDdAtkbDpD86S1prIah85K-5CCd6NvA470',
  authDomain: 'jsparring-970ea.firebaseapp.com',
  databaseURL: 'https://jsparring-970ea.firebaseio.com',
  projectId: 'jsparring-970ea',
  storageBucket: 'jsparring-970ea.appspot.com',
  messagingSenderId: '502279751746'
};

firebase.initializeApp(config);
export const gitProvider = new firebase.auth.GithubAuthProvider();

export default firebase;
