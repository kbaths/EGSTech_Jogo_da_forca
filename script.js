const technologies = [
    "java", "react", "node", "python", "php"
];

const secretWord = technologies[Math.floor(Math.random() * technologies.length)];
const wrongLyrics = [];
const correctLetters = [];

// realiza a validação das teclas
document.addEventListener("keydown", (event) => {
    const code = event.keyCode; // 65 - 90 (intervalo entre A e Z)
    // letra faz parte ou não da palavra
    if (isLyrics(code)) {
        const lyrics = event.key;
        if (wrongLyrics.includes(lyrics)) {
            warningRepeatedLetter();
        } else {
            if (secretWord.includes(lyrics)) {
                correctLetters.push(lyrics);
            } else {
                wrongLyrics.push(lyrics);
            }
        }
        updateGame();
    }
});

function updateGame() {
    showWrongLetters();
    showCorrectLetters();
    drawGallows();
    checkGame();
};

// mostrar letras erradas na tela
function showWrongLetters() {
    const div = document.querySelector(".container-wrong-letters");
    div.innerHTML = "<h3>Letras erradas</h3>";
    wrongLyrics.forEach(lyrics => {
        div.innerHTML += `<span>${lyrics}</span>`;
    })
}

// mostrar letras corretas na tela
function showCorrectLetters() {
    const container = document.querySelector(".container-secret-word");
    container.innerHTML = "";
    secretWord.split("").forEach(lyrics => {
        if (correctLetters.includes(lyrics)) {
            container.innerHTML += `<span>${lyrics}</span>`;
        } else {
            container.innerHTML += `<span>_</span>`;
        }
    })
}

// Checar se o jogador ganhou o jogo
function checkGame() {
    const container = document.querySelector(".container-secret-word");
    const bodyPart = document.querySelectorAll(".gallows-part");
    let message = "";

    if (wrongLyrics.length === bodyPart.length) {
        message = "Fim de jogo! Você perdeu!"
    };

    if (secretWord === container.innerText) {
        message = "Parabéns! Você ganhou 😍"
    }

    if (message) {
        document.querySelector("#message").innerHTML = message;
        document.querySelector(".popup-container").style.display = "flex";
    }
}

// Desenhando o boneco da forca
function drawGallows() {
    const bodyPart = document.querySelectorAll(".gallows-part");
    for (let i = 0; i < wrongLyrics.length; i++) {
        bodyPart[i].style.display = "block";
    }
}


// mostrar aviso de letra repetida
function warningRepeatedLetter() {
    const warning = document.querySelector(".repeated-word-warning");
    warning.classList.add("show");
    setTimeout(() => {
        warning.classList.remove("show");
    }, 2000);
}

function isLyrics(code) {
    return code >= 65 && code <= 90;
}