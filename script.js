let userScore = 0;
let compScore = 0;

function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const compChoice = choices[Math.floor(Math.random() * 3)];

  const resultText = document.getElementById("result");
  const userScoreText = document.getElementById("user-score");
  const compScoreText = document.getElementById("comp-score");

  if (userChoice === compChoice) {
    resultText.textContent = `It's a draw! You both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    userScoreText.textContent = userScore;
    resultText.textContent = `🎉 You win! ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    compScoreText.textContent = compScore;
    resultText.textContent = `😢 You lose! ${compChoice} beats ${userChoice}`;
  }
}
