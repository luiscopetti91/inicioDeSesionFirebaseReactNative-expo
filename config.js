//firebase config

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//config

const firebaseConfig = {
    apiKey: "AIzaSyDvrp9nvj8-T15vBDI67nKXdZPlYU80b7Q",

    authDomain: "app2-bfb0e.firebaseapp.com",
  
    projectId: "app2-bfb0e",
  
    storageBucket: "app2-bfb0e.appspot.com",
  
    messagingSenderId: "725935868623",
  
    appId: "1:725935868623:web:6137cea8f133e5a0de45ba",
  
    measurementId: "G-7GXB0B02Y0"
  
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export { firebase };
