const words = ["javascript", "hangman", "programming", "web", "development"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = Array(selectedWord.length).fill("_");
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

const wordElement = document.getElementById("word");
const messageElement = document.getElementById("message");
const drawingElement = document.getElementById("hangman-drawing");

// Create keyboard buttons dynamically
const keyboardElement = document.querySelector(".keyboard");
for (let letter of "abcdefghijklmnopqrstuvwxyz") {
    const button = document.createElement("button");
    button.textContent = letter;
    button.addEventListener("click", () => guessLetter(letter));
    keyboardElement.appendChild(button);
}

function updateWordDisplay() {
    wordElement.textContent = guessedWord.join(" ");
}

function guessLetter(letter) {
    if (selectedWord.includes(letter)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] === letter) {
                guessedWord[i] = letter;
            }
        }
        updateWordDisplay();
    } else {
        incorrectGuesses++;
        drawHangman();
    }

    if (guessedWord.join("") === selectedWord) {
        messageElement.textContent = "You win!";
    } else if (incorrectGuesses >= maxIncorrectGuesses) {
        messageElement.textContent = "You lose! The word was: " + selectedWord;
    }
}

function drawHangman() {
    // Implement drawing logic here (e.g., using lines, circles, or SVG)
    // You can customize this based on your preferences
}

// Initial setup
updateWordDisplay();
