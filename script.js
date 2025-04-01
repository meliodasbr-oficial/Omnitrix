const characters = [
    "chama", "diamante", "4bracos", "xlr8", "ultrat", "fantasmatico", "besta", "insectoide", "gigante",
    "enormossauro", "friagem", "ecoeco", "fogofatuo", "cromatico", "estrelapolar", "feedback", "shocksquatch",
    "macacoaranha", "vilgax", "rook", "kevin", "gwen", "rex", "rath", "rng", "gravattack", "blitzwolfer", "atomico",
    "ciposelvagem", "baladecanhao", "megaolhos", "glutao", "idem", "arraiaajato", "diabrete", "iguana",
    "ameacaaquatica", "alienx"
];

let currentIndex = 0;
const selectSound = new Audio("selectchar.mp3");

function updateCharacters() {
    const prevIndex = (currentIndex - 1 + characters.length) % characters.length;
    const nextIndex = (currentIndex + 1) % characters.length;
    
    document.getElementById("prev-character").innerHTML = `<img src="images/${characters[prevIndex]}.png" alt="${characters[prevIndex]}">`;
    document.getElementById("current-character").innerHTML = `<img src="images/${characters[currentIndex]}.png" alt="${characters[currentIndex]}">`;
    document.getElementById("next-character").innerHTML = `<img src="images/${characters[nextIndex]}.png" alt="${characters[nextIndex]}">`;
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

updateCharacters();
