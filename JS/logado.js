import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyB83tpmV8hqI6TuryzG0-ov8PwMrkZJE1s",
  authDomain: "rpg-bentrix.firebaseapp.com",
  projectId: "rpg-bentrix",
  storageBucket: "rpg-bentrix.firebasestorage.app",
  messagingSenderId: "916304527215",
  appId: "1:916304527215:web:a32bbfad7e7d53ebd1329a",
  measurementId: "G-Y0QC37JQVP"
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "entrar&cadastrar.html";
    return;
  }

  const userId = user.uid;
  const docRef = doc(db, "usuarios", userId);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const dados = docSnap.data();
      const tayden = dados.taydens ?? 0;
      document.getElementById("tayden-quantidade").textContent = tayden;
    } else {
      console.error("Documento do usuário não encontrado.");
    }
  } catch (erro) {
    console.error("Erro ao buscar Taydens:", erro);
  }
});
