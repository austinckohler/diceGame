let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
let firstPlayerScore = document.querySelector("#score-0");
let firstPlayerCurrentScore = document.querySelector("#current-0");
firstPlayerScore.textContent = "0";
let secondPlayerScore = document.querySelector("#score-1");
let secondPlayerCurrentScore = document.querySelector("#current-1");
secondPlayerScore.textContent = "0";

roll = document.querySelector(".btn-roll");
roll.addEventListener("click", () => {
  //creates a random number 1-6
  let dice = Math.floor(Math.random() * 6 + 1);
  //displays the correct image result
  let diceImage = document.querySelector(".dice");
  diceImage.style.display = "block";
  diceImage.src = "/photos/dice-" + dice + ".png";
  //update round score if dice rolled !== 1
  if (dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

holdDice = document.querySelector(".btn-hold");
holdDice.addEventListener("click", () => {
  //add current score to global score
  scores[activePlayer] += roundScore;
  //show on score
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];
  //check to see if score is 100
  if (scores[activePlayer] >= 10) {
    winner();
  } else {
    nextPlayer();
  }
});

const nextPlayer = () => {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  firstPlayerCurrentScore.textContent = "0";
  secondPlayerCurrentScore.textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
};
const winner = () => {
  const winner = document.querySelector("#name-" + activePlayer);
  const p = document.createElement("p");
  p.innerText = "You won, nice work!";
  winner.append(p);
};
