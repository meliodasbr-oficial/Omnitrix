// Abrir o diálogo ao clicar na foto
document.getElementById('abrir-dialogo-foto').addEventListener('click', () => {
  const dialogo = document.getElementById('dialogo-fotos');
  if (typeof dialogo.showModal === "function") {
    dialogo.showModal();
  } else {
    alert("O navegador não suporta <dialog>.");
  }
});

// Fechar o diálogo com o botão ✕
document.getElementById('fechar-dialogo').addEventListener('click', () => {
  document.getElementById('dialogo-fotos').close();
});

// Selecionar uma nova foto de perfil
document.querySelectorAll('.foto-opcao').forEach(img => {
  img.addEventListener('click', () => {
    const novaSrc = img.getAttribute('src');
    document.querySelector('.perfil-foto').setAttribute('src', novaSrc);

    // Salvar no localStorage (opcional)
    localStorage.setItem('fotoPerfil', novaSrc);

    // Fechar o diálogo
    document.getElementById('dialogo-fotos').close();
  });
});

// Recuperar a imagem salva ao carregar a página (opcional)
window.addEventListener('DOMContentLoaded', () => {
  const fotoSalva = localStorage.getItem('fotoPerfil');
  if (fotoSalva) {
    document.querySelector('.perfil-foto').setAttribute('src', fotoSalva);
  }
});
