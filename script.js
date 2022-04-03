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
        // atualizarJogo();
    }
});

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