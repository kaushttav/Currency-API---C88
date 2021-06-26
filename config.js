import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyCCocfChNuBLx5AZwO-xbFNUzyeaEvx4Sw",
    authDomain: "barter-system-app-540f3.firebaseapp.com",
    projectId: "barter-system-app-540f3",
    storageBucket: "barter-system-app-540f3.appspot.com",
    messagingSenderId: "351270965426",
    appId: "1:351270965426:web:6f24bc963c6cf44d49b9ab"
};

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();