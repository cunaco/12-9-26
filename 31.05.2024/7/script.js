const randomNumber = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    const result = document.getElementById("result");

    if (userGuess === randomNumber) {
        result.textContent = "Поздравляем! Вы угадали число.";
    } else {
        result.textContent = "Попробуйте снова. Загаданное число " + (userGuess < randomNumber ? "больше." : "меньше.");
    }
}
