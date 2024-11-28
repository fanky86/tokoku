import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBAA0WdhfX3yqXhVXsBoT6FP386YX_b5xo",
  authDomain: "web-profile-1a15b.firebaseapp.com",
  projectId: "web-profile-1a15b",
  storageBucket: "web-profile-1a15b.firebasestorage.app",
  messagingSenderId: "878572807565",
  appId: "1:878572807565:web:1ff77da9b899f4c55949c4",
};

initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
