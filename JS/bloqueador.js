// Proteção do console com senha
(function protegerConsole() {
    if (typeof console !== "undefined") {
      console.clear();
      console.log("%cEste console é apenas para desenvolvedores. Se você não sabe o que está fazendo, feche-o.", "color: red; font-size: 16px;");
    }
  
    const senhaDev = "Rokemberg16*";
  
    const bloquear = (e) => {
      const tecla = e.key;
  
      if (
        tecla === "F12" ||
        (e.ctrlKey && e.shiftKey && (tecla === "I" || tecla === "J" || tecla === "C")) ||
        (e.ctrlKey && tecla === "U")
      ) {
        e.preventDefault();
  
        const senha = prompt("🔐 Área restrita! Insira a senha de desenvolvedor:");
  
        if (senha !== senhaDev) {
          alert("❌ Acesso negado!");
        } else {
          alert("✅ Acesso autorizado!");
          // Libera o DevTools: remove o bloqueio
          document.removeEventListener("keydown", bloquear);
        }
      }
    };
  
    document.addEventListener("keydown", bloquear);
  })();

  
  
/* Proteção do console
(function protegerConsole() {
    if (typeof console !== "undefined") {
      console.clear();
      console.log("%cEste console é apenas para desenvolvedores. Se você não sabe o que está fazendo, feche-o.", "color: red; font-size: 16px;");
    }
  
    const bloquear = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
  
    document.addEventListener("keydown", bloquear);
  })();
  */