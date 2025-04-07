import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";

export const firebaseConfig = {
  apiKey: "AIzaSyB83tpmV8hqI6TuryzG0-ov8PwMrkZJE1s",
  authDomain: "rpg-bentrix.firebaseapp.com",
  projectId: "rpg-bentrix",
  storageBucket: "rpg-bentrix.firebasestorage.app",
  messagingSenderId: "916304527215",
  appId: "1:916304527215:web:a32bbfad7e7d53ebd1329a",
  measurementId: "G-Y0QC37JQVP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };