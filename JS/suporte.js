document.getElementById('form-suporte').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;
  
    console.log('Suporte enviado:', { nome, email, assunto, mensagem });
  
    window.location.href = "obrigado.html";
  });
  