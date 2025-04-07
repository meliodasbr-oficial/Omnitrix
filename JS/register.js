import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  browserLocalPersistence,
  setPersistence
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const palavrasProibidas = [
  "bosta", "merda", "desgraça", "puto", "caralho", "viado", "fdp",
  "porra", "lixo", "filho da puta", "puta", "satanás"
];

function gerarIDAleatorio(tamanhoMin = 6, tamanhoMax = 12) {
  const tamanho = Math.floor(Math.random() * (tamanhoMax - tamanhoMin + 1)) + tamanhoMin;
  let id = "";
  for (let i = 0; i < tamanho; i++) {
    id += Math.floor(Math.random() * 10); // Apenas números
  }
  return id;
}

function mostrarToast(mensagem, sucesso = true) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.textContent = mensagem;
  toast.className = sucesso ? "toast sucesso" : "toast erro";
  toastContainer.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
}

function contemPalavraOfensiva(texto) {
  const textoMin = texto.toLowerCase();
  return palavrasProibidas.some(palavra => textoMin.includes(palavra));
}

document.addEventListener("DOMContentLoaded", async () => {
  await setPersistence(auth, browserLocalPersistence);

  auth.onAuthStateChanged(user => {
    if (user && user.emailVerified) {
      window.location.href = "index.html";
    }
  });

  const cadastrarBtn = document.querySelector('#register .input-submit');
  const loginBtn = document.querySelector('#login .input-submit');

  // REGISTRO
  if (cadastrarBtn) {
    cadastrarBtn.addEventListener("click", async () => {
      const username = document.getElementById("regUsername")?.value.trim();
      const email = document.getElementById("regEmail")?.value.trim();
      const password = document.getElementById("regPassword")?.value;
      const confirmPassword = document.getElementById("regConfirmPassword")?.value;

      if (!username || !email || !password || !confirmPassword) {
        mostrarToast("Preencha todos os campos!", false);
        return;
      }

      if (contemPalavraOfensiva(username)) {
        mostrarToast("Nome de usuário contém palavras ofensivas!", false);
        return;
      }

      if (password !== confirmPassword) {
        mostrarToast("As senhas não coincidem!", false);
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await sendEmailVerification(user);

        const userId = gerarIDAleatorio();

        const dadosIniciais = {
          nome: username,
          email: email,
          id: userId,
          pontuacao: 0,
          patente: "Humano I",
          vitorias: 0,
          derrotas: 0,
          personagemFavorito: "Nenhum",
          foto: "images/Omnitrix1.png",
          taydens: 1000,
        };

        await setDoc(doc(db, "usuarios", user.uid), dadosIniciais);

        mostrarToast("Conta criada! Verifique seu e-mail antes de logar.");
      } catch (erro) {
        if (erro.code === "auth/email-already-in-use") {
          mostrarToast("Este email já está em uso!", false);
        } else if (erro.code === "auth/invalid-email") {
          mostrarToast("Email inválido!", false);
        } else if (erro.code === "auth/weak-password") {
          mostrarToast("Senha fraca! Use pelo menos 6 caracteres.", false);
        } else {
          mostrarToast("Erro inesperado. Tente novamente mais tarde.", false);
          console.error("Erro no cadastro:", erro);
        }
      }
    });
  }

  // LOGIN
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      const email = document.getElementById("logEmail")?.value.trim();
      const password = document.getElementById("logPassword")?.value;

      if (!email || !password) {
        mostrarToast("Preencha todos os campos!", false);
        return;
      }

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        if (!user.emailVerified) {
          mostrarToast("Verifique seu e-mail antes de entrar!", false);
          return;
        }

        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          mostrarToast("Login realizado com sucesso!");
          showDialogRegras(docSnap.data());
        } else {
          mostrarToast("Usuário não encontrado na base!", false);
        }
      } catch (erro) {
        if (erro.code === "auth/invalid-credential") {
          mostrarToast("Usuário ou senha incorretos!", false);
        } else if (erro.code === "auth/too-many-requests") {
          mostrarToast("Muitas tentativas. Tente novamente mais tarde.", false);
        } else {
          mostrarToast("Erro no login. Tente novamente.", false);
          console.error("Erro no login:", erro);
        }
      }
    });
  }
});

// ✅ Diálogo com as regras
function showDialogRegras(dadosUsuario) {
  const dialog = document.createElement("div");
  dialog.className = "dialog-regras";
  dialog.innerHTML = `
    <div class="dialog-conteudo">
      <h2>📜 Regras do BENTRIX</h2>
      <ul>
        <li>1. Não use nomes ofensivos.</li>
        <li>2. Não utilize trapaças ou exploits.</li>
        <li>3. Respeite outros jogadores.</li>
        <li>4. O não cumprimento pode levar a banimento.</li>
        <li>5. Divirta-se e seja um herói!</li>
      </ul>
      <button id="aceitar-regras">✅ Aceito as Regras - Entrar para o RPG</button>
    </div>
  `;
  document.body.appendChild(dialog);

  document.getElementById("aceitar-regras").addEventListener("click", () => {
    dialog.remove();
    entrarNoRPG(dadosUsuario);
  });
}

// ✅ Entrar após aceitar regras
function entrarNoRPG(dadosUsuario) {
  mostrarToast(`Bem-vindo, ${dadosUsuario.nome}!`);
  window.location.href = "index.html";
}