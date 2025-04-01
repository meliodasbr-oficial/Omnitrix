const characters = [
    { name: "Chama", health: 25, attacks: [
        { name: "Bola de Fogo", cost: 5, dice: "1D12" },
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Voo", cost: 5 },
        { name: "Explosão", cost: 12, dice: "1D12 - 1D6" }
    ]},
    { name: "Diamante", health: 30, attacks: [
        { name: "Bala de Selício", cost: 5, dice: "1D12" },
        { name: "Escudo", cost: 5, dice: "1D4" },
        { name: "Criação", cost: 5, dice: "1D12 - 1D4" },
        { name: "Espinhos", cost: 10, dice: "1D12" }
    ]},
    { name: "4Bracos", health: 30, attacks: [
        { name: "Soco", cost: 3, dice: "1D12" },
        { name: "Arremesso", cost: 5, dice: "1D12" },
        { name: "Palma Sônica", cost: 5, dice: "1D12" },
        { name: "Esmagamento", cost: 5, dice: "1D12" },
        { name: "Body Slam", cost: 5, dice: "1D12" }
    ]},
    { name: "XLR8", health: 20, attacks: [
        { name: "Soco Veloz", cost: 4, dice: "1D12" },
        { name: "Rasteira", cost: 5, dice: "1D12" },
        { name: "Tornado", cost: 7, dice: "1D8 + AT" },
        { name: "Aceleração", cost: 12, dice: "2T" }
    ]},
    { name: "UltraT", health: 25, attacks: [
        { name: "Soco", cost: 3, dice: "1D10" },
        { name: "Fundir", cost: 4 },
        { name: "Transformar", cost: 7 },
        { name: "Raio", cost: 5, dice: "1D12" }
    ]},
    { name: "Fantasmatico", health: 20, attacks: [
        { name: "Possessão", cost: 8 },
        { name: "Intangível", cost: 5, dice: "1T + 3ES" },
        { name: "Soco", cost: 3, dice: "1D8" }
    ]},
    { name: "Besta", health: 25, attacks: [
        { name: "Arranhão", cost: 3, dice: "1D8" },
        { name: "Percepção", cost: 7, dice: "+2A" },
        { name: "Mordida", cost: 5, dice: "1D12" },
        { name: "Rugido", cost: 15, dice: "AT" }
    ]},
    { name: "Insectoide", health: 20, attacks: [
        { name: "Garrada", cost: 3, dice: "1D8" },
        { name: "Gosma", cost: 5, dice: "A" },
        { name: "Ferroada", cost: 5, dice: "1D12" },
        { name: "Voo", cost: 3 }
    ]},
    { name: "Gigante", health: 40, attacks: [
        { name: "Pisada", cost: 3, dice: "1D10" },
        { name: "Raio", cost: 7, dice: "1D12 + D6" },
        { name: "Aceleração", cost: 12, dice: "2T" },
        { name: "Socão", cost: 5, dice: "1D12" }
    ]},
    { name: "Enormossauro", health: 30, attacks: [
        { name: "Soco", cost: 3, dice: "1D10" },
        { name: "Palma Sônica", cost: 5, dice: "1D12" },
        { name: "Baly Slam", cost: 5, dice: "1D12" },
        { name: "Arremesso", cost: 5, dice: "1D12" },
        { name: "Esmagamento", cost: 8, dice: "1D12" }
    ]},
    { name: "Friagem", health: 22, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Intangibilidade", cost: 5, dice: "+3 ES" },
        { name: "Congelamento", cost: 5, dice: "1D12" },
        { name: "Voo", cost: 5 }
    ]},
    { name: "EcoEco", health: 18, attacks: [
        { name: "Grita", cost: 5, dice: "1D8 AT" },
        { name: "Clone", cost: 10, dice: "+1 Dano" }
    ]},
    { name: "FogoFatuo", health: 25, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Chicote", cost: 5, dice: "1D12" },
        { name: "Bola de Fogo", cost: 5, dice: "1D12" },
        { name: "Regeneração", cost: 10, dice: "1D8" }
    ]},
    { name: "Cromatico", health: 25, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Feixe", cost: 5, dice: "1D12" },
        { name: "Tiro de Cristal", cost: 5, dice: "1D12" }
    ]},
    { name: "EstrelaPolar", health: 25, attacks: [
        { name: "Soco", cost: 3 },
        { name: "Magnetismo", cost: 3 }
    ]},
    { name: "Feedback", health: 25, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Chicote", cost: 5, dice: "1D12" },
        { name: "Choque", cost: 5, dice: "1D8 + AT" },
        { name: "Sobrecarga", cost: 15, dice: "1D12 + 1D6" }
    ]},
    { name: "Shocksquatch", health: 30, attacks: [
        { name: "Soco", cost: 3, dice: "1D10" },
        { name: "Choque", cost: 5, dice: "1D8 + AT" },
        { name: "Esmagamento", cost: 5, dice: "1D12" },
        { name: "Arremesso", cost: 5, dice: "1D12" }
    ]},
    { name: "MacacoAranha", health: 22, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Teia", cost: 5, dice: "2E" },
        { name: "Arremesso", cost: 5, dice: "1D12" }
    ]},
    { name: "Vilgax", health: 35, attacks: [
        { name: "Soco", cost: 3, dice: "1D12" },
        { name: "Espada", cost: 5, dice: "1D12 + 1D4" },
        { name: "Body Slam", cost: 5, dice: "1D12" }
    ]},
    { name: "Rook", health: 25, attacks: [
        { name: "Tiros", cost: 5, dice: "1D12" },
        { name: "Gancho", cost: 3, dice: "1D6" },
        { name: "Rede", cost: 5, dice: "2E" },
        { name: "Espada", cost: 5, dice: "1D12" }
    ]},
    { name: "Kevin", health: 20, attacks: [
        { name: "Absorção", cost: 3, dice: "+3V" },
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Forma", cost: 5, dice: "1D12" }
    ]},
    { name: "Gwen", health: 20, attacks: [
        { name: "Tiro", cost: 5, dice: "1D12" },
        { name: "Escudo", cost: 6, dice: "2" },
        { name: "Manipulação", cost: 5 }
    ]},
    { name: "Rex", health: 22, attacks: [
        { name: "Manipulação", cost: 5 },
        { name: "Elementos", cost: 4 },
        { name: "Voo", cost: 5 }
    ]},
    { name: "Rath", health: 28, attacks: [
        { name: "Garra", cost: 3, dice: "1D10" },
        { name: "Super Pulo", cost: 5 },
        { name: "Rugido", cost: 10, dice: "AT" }
    ]},
    { name: "RNG", health: 30, attacks: [
        { name: "Soco", cost: 3, dice: "1D10" },
        { name: "Tiro de plasma", cost: 5, dice: "1D12" },
        { name: "Calor", cost: 7, dice: "1D12" }
    ]},
    { name: "Gravattack", health: 30, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Voo", cost: 5 },
        { name: "Pressão", cost: 5, dice: "2M" },
        { name: "Arremesso", cost: 5, dice: "1D12" }
    ]},
    { name: "Blitzwolfer", health: 28, attacks: [
        { name: "Arranhão", cost: 3, dice: "1D8" },
        { name: "Mordida", cost: 5, dice: "1D12" },
        { name: "Rugido", cost: 5, dice: "1D8 + AT" }
    ]},
    { name: "Atomico", health: 30, attacks: [
        { name: "Rajada", cost: 5, dice: "1D12" },
        { name: "Escudo", cost: 5 },
        { name: "Sol", cost: 10, dice: "2 D12" }
    ]},
    { name: "CipoSelvagem", health: 25, attacks: [
        { name: "Chicote", cost: 5, dice: "1D12" },
        { name: "Bomba de Sono", cost: 7, dice: "1D6 + AT" },
        { name: "Regeneração", cost: 10, dice: "1D8" }
    ]},
    { name: "BaladeCanhao", health: 30, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Rolada", cost: 5, dice: "1D12" },
        { name: "Defesa", cost: 3, dice: "+2 Resistência" }
    ]},
    { name: "MegaOlhos", health: 25, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Raio", cost: 5, dice: "1D12" },
        { name: "Raio de Fogo", cost: 5, dice: "1D8 + Queima" },
        { name: "Explosão", cost: 17 }
    ]},
    { name: "Glutao", health: 25, attacks: [
        { name: "P", cost: 3, dice: "1D8" },
        { name: "M", cost: 5, dice: "1D12" },
        { name: "G", cost: 12, dice: "1D12 + 1D6" }
    ]},
    { name: "Idem", health: 20, attacks: [
        { name: "Arranhão", cost: 3, dice: "1D8" },
        { name: "Clone", cost: 10, dice: "+1D Dano" },
        { name: "Mente", cost: 10, dice: "1D12 + 1D4" }
    ]},
    { name: "ArraiaaJato", health: 20, attacks: [
        { name: "Soco", cost: 3, dice: "1D8" },
        { name: "Raio", cost: 5, dice: "1D12" }
    ]},
    { name: "Diabrete", health: 18, attacks: [
        { name: "P", cost: 3, dice: "1D8" },
        { name: "M", cost: 5, dice: "1D12" },
        { name: "G", cost: 12, dice: "1D12 + 1D6" }
    ]},
    { name: "Iguana", health: 25, attacks: [
        { name: "Congelamento", cost: 8, dice: "1D10" },
        { name: "Escudo", cost: 6, dice: "2" },
        { name: "Mordida", cost: 5, dice: "1D12" }
    ]},
    { name: "AmeacaAquatica", health: 28, attacks: [
        { name: "Soco", cost: 8, dice: "1D8" },
        { name: "Jato", cost: 5, dice: "1D12" },
        { name: "Tiro", cost: 5, dice: "1D8 x 2" },
        { name: "Jato Quente", cost: 7, dice: "1D10 + Queimadura" }
    ]},
    { name: "Armato", health: 25, attacks: [
        { name: "Arranhão", cost: 20, dice: "???" },
        { name: "Terremoto", cost: 4, dice: "???" },
        { name: "Agarrão", cost: 3, dice: "???" },
        { name: "Escavação", cost: 5, dice: "???" }
    ]},
    { name: "AlienX", health: 80, attacks: [
        { name: "Sim", cost: 20, dice: "???" },
        { name: "Controle Total", cost: "???", dice: "???" }
        }
];

let currentIndex = 0;
const bgMusic = document.getElementById("bg-music");
const selectSound = document.getElementById("select-sound");
const transformSound = document.getElementById("transform-sound");

function loadAudio() {
    const audioUrl = "background.mp3";

    bgMusic.src = audioUrl;
    bgMusic.volume = 0.5;

    bgMusic.play().catch(error => {
        console.error("Erro ao tentar reproduzir o áudio:", error);
    });
}

document.getElementById("mute-toggle").addEventListener("click", () => {
    loadAudio();
});

document.getElementById("mute-toggle").addEventListener("click", () => {
    const muted = !bgMusic.muted;
    bgMusic.muted = muted;
    selectSound.muted = muted;
    transformSound.muted = muted;
    document.getElementById("mute-toggle").textContent = muted ? "🔇" : "🔊";
});

document.getElementById("volume-slider").addEventListener("input", (event) => {
    const volume = event.target.value;
    bgMusic.volume = volume;
    selectSound.volume = volume;
    transformSound.volume = volume;
});

function updateCharacters() {
    const prevIndex = (currentIndex - 1 + characters.length) % characters.length;
    const nextIndex = (currentIndex + 1) % characters.length;
    
    document.getElementById("prev-character").innerHTML = `<img src="images/${characters[prevIndex].name.toLowerCase()}.png" alt="${characters[prevIndex].name}">`;
    document.getElementById("current-character").innerHTML = `<img src="images/${characters[currentIndex].name.toLowerCase()}.png" alt="${characters[currentIndex].name}">`;
    document.getElementById("next-character").innerHTML = `<img src="images/${characters[nextIndex].name.toLowerCase()}.png" alt="${characters[nextIndex].name}">`;
}

function selectCharacter() {
    transformSound.play();
    const char = characters[currentIndex];
    document.getElementById("char-name").innerText = char.name;
    document.getElementById("char-health").innerText = `Vida: ${char.health}`;
    
    const attackList = document.getElementById("char-attacks");
    attackList.innerHTML = "";
    char.attacks.forEach(attack => {
        const li = document.createElement("li");
        li.innerText = `${attack.name} - Custo: ${attack.cost}${attack.dice ? ` - Dano: ${attack.dice}` : ""}`;
        attackList.appendChild(li);
    });
    
    document.getElementById("dialog").style.display = "flex";
}

function closeDialog() {
    document.getElementById("dialog").style.display = "none";
}

updateCharacters();

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    selectSound.play();
    updateCharacters();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % characters.length;
    selectSound.play();
    updateCharacters();
});
