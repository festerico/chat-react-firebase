import React from "react";
import { render} from "react-dom";
import { initializeApp } from 'firebase/app';
import App from "./App";

// Signs-in Friendly Chat.
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}


render (
      <App/>,
    document.getElementById("root")
    );

  
    const firebaseAppConfig = getFirebaseConfig();
    initializeApp(firebaseAppConfig);