// 🔥 IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// 🔥 PASTE YOUR FIREBASE CONFIG HERE
const firebaseConfig = {
    apiKey: "AIzaSyDQI55vZrdshJ1BzgSmHsZ3Uj5MtiGpLaU",
    authDomain: "xiea-3c95a.firebaseapp.com",
    projectId: "xiea-3c95a",
    storageBucket: "xiea-3c95a.firebasestorage.app",
    messagingSenderId: "874048177257",
    appId: "1:874048177257:web:f84e5d87a8c61ec4708ef8",
    measurementId: "G-X0TZTF1PF8"
  };

// 🔥 INIT
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 🔥 SIGN UP
window.signup = function () {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      document.getElementById("message").innerText = "Signup successful!";
    })
    .catch(err => {
      document.getElementById("message").innerText = err.message;
    });
};

// 🔥 LOGIN
window.login = function () {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => {
      document.getElementById("message").innerText = err.message;
    });
};

// 🔥 LOGOUT (for dashboard later)
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};