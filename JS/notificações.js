document.querySelectorAll('.notif-card').forEach(card => {
    card.addEventListener('click', () => {
      const titulo = card.querySelector('h3').innerText;
      const mensagem = card.dataset.mensagem;
      const tipo = card.dataset.tipo;
  
      document.getElementById('titulo-dialogo').innerText = titulo;
      document.getElementById('mensagem-dialogo').innerText = mensagem;
  
      const btnResgatar = document.getElementById('resgatar-dialogo');
      if (tipo === 'recompensa') {
        btnResgatar.style.display = 'inline-block';
  
        btnResgatar.dataset.cardId = [...document.querySelectorAll('.notif-card')].indexOf(card);
      } else {
        btnResgatar.style.display = 'none';
      }
  
      const statusTag = card.querySelector('strong.status-notificacao');
      if (statusTag && statusTag.innerText.includes('[NOVO]')) {
        statusTag.innerText = '[LIDO]';
        statusTag.style.color = '#9ca3af';
      }
  
      document.getElementById('dialogo').showModal();
    });
  });
  
  document.getElementById('fechar-dialogo').addEventListener('click', () => {
    document.getElementById('dialogo').close();
  });
  
  document.getElementById('resgatar-dialogo').addEventListener('click', () => {
    document.getElementById('dialogo').close();
    showToast("🎉 Recompensa resgatada com sucesso!");
  });
  
  function showToast(mensagem) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = mensagem;
  
    toastContainer.appendChild(toast);
  
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
  