import {initializeApp} from "firebase/app";

import {getAuth} from "firebase/auth"

const firebaseConfig = {

    apiKey: "AIzaSyClB1QSLwhUh0tslvMNQR5LXWceVbVaXMY",
  
    authDomain: "puppy-37820.firebaseapp.com",
  
    projectId: "puppy-37820",
  
    storageBucket: "puppy-37820.appspot.com",
  
    messagingSenderId: "170482437615",
  
    appId: "1:170482437615:web:af782864cbe3bcb9563a1a",
  
    measurementId: "G-PKGLXQTY7F"
  
  };

const fire = initializeApp(firebaseConfig);

const auth = getAuth(fire);

export  default auth;