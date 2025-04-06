const jogadores = Array.from({ length: 100 }, (_, i) => ({
    nome: `Jogador ${i + 1}`,
    pontos: Math.floor(Math.random() * 50000),
  }));
  
  // Ordena por pontos
  jogadores.sort((a, b) => b.pontos - a.pontos);
  
  // Define o jogador atual
  const jogadorAtual = "Jogador 7";
  
  // Função para calcular a patente com base nos pontos
  function calcularPatente(pontos) {
    if (pontos < 5000) return "Humano I";
    if (pontos < 10000) return "Humano II";
    if (pontos < 15000) return "Humano III";
    if (pontos < 20000) return "Alien I";
    if (pontos < 25000) return "Alien II";
    if (pontos < 30000) return "Alien III";
    if (pontos < 35000) return "Massa Cinzenta I";
    if (pontos < 40000) return "Massa Cinzenta II";
    if (pontos < 45000) return "Massa Cinzenta III";
    if (pontos < 47500) return "Alien X I";
    if (pontos < 49000) return "Alien X II";
    return "Alien X III";
  }
  
  // Preenche a tabela
  const rankingBody = document.getElementById("ranking-body");
  let posicaoAtual = null;
  
  jogadores.forEach((jogador, index) => {
    jogador.patente = calcularPatente(jogador.pontos);
  
    const tr = document.createElement("tr");
    const isAtual = jogador.nome === jogadorAtual;
  
    if (isAtual) posicaoAtual = index + 1;
  
    tr.className = isAtual ? "jogador-atual" : "";
    tr.innerHTML = `
      <td class="ranking-position">${index + 1}</td>
      <td>${jogador.nome}</td>
      <td>${jogador.patente}</td>
      <td>${jogador.pontos}</td>
    `;
    rankingBody.appendChild(tr);
  });
  
  // Mostra a seção "Sua Posição"
  const jogadorInfo = jogadores.find(j => j.nome === jogadorAtual);
  const suaPosicaoDiv = document.getElementById("sua-posicao");
  
  if (jogadorInfo) {
    suaPosicaoDiv.innerHTML = `
      <h2>Sua Posição</h2>
      <p><strong>Posição:</strong> ${posicaoAtual}º</p>
      <p><strong>Nome:</strong> ${jogadorInfo.nome}</p>
      <p><strong>Patente:</strong> ${jogadorInfo.patente}</p>
      <p><strong>Pontos:</strong> ${jogadorInfo.pontos}</p>
    `;
  }
  
  const pillFlutuante = document.getElementById("pill-flutuante");

if (jogadorInfo) {
  pillFlutuante.innerHTML = `
    <i class="fa-solid fa-trophy"></i>
    ${posicaoAtual}º • ${jogadorInfo.nome} • ${jogadorInfo.patente} • ${jogadorInfo.pontos}
  `;
}
