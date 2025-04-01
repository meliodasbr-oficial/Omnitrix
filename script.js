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
    { name: "4 Braços", health: 30, attacks: [
        { name: "Soco", cost: 3, dice: "1D12" },
        { name: "Arremesso", cost: 5, dice: "1D12" },
        { name: "Palma Sônica", cost: 5, dice: "1D12" },
        { name: "Esmagamento", cost: 5, dice: "1D12" },
        { name: "Body Slam", cost: 5, dice: "1D12" }
    ]}
];

let currentIndex = 0;
const bgMusic = document.getElementById("bg-music");
const selectSound = document.getElementById("select-sound");
const transformSound = document.getElementById("transform-sound");

bgMusic.volume = 0.1;
bgMusic.play();

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