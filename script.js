const technologies = [
    "java", "react", "node", "python", "php"
];

const secretWord = technologies[Math.floor(Math.random() * technologies.length)];

// realiza a validação das teclas
document.addEventListener("keydown", (event) => {
    const code = event.keyCode; // 65 - 90 (intervalo entre A e Z) 
    if (isLyrics(code)) {

    }
})