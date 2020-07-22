let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
let firstPlayerScore = document.querySelector("#score-0");
let firstPlayerCurrentScore = document.querySelector("#current-0");
let secondPlayerScore = document.querySelector("#score-1");
let secondPlayerCurrentScore = document.querySelector("#current-1");

roll = document.querySelector(".btn-roll");
roll.addEventListener("click", () => {
  //creates a random number 1-6
  let dice = Math.floor(Math.random() * 6 + 1);
  //displays the correct image result
  let diceImage = document.querySelector(".dice");
  diceImage.style.display = "block";
  diceImage.src = "/photos/dice-" + dice + ".png";
  //update round score if dice rolled !== 1
  dice;
});

firstPlayerScore.textContent = "0";
firstPlayerCurrentScore.textContent = "0";
secondPlayerScore.textContent = "0";
secondPlayerCurrentScore.textContent = "0";
