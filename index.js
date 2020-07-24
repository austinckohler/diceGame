let scores, roundScore, activePlayer, activeGame;

let gamePlayToScore = 0;
newGame();
let lastDice;
let winningScore;

const roll = document.querySelector(".btn-roll");
roll.addEventListener("click", () => {
  if (activeGame) {
    //creates a random number 1-6
    let dice = Math.floor(Math.random() * 6 + 1);
    //displays the correct image result
    let diceImage = document.querySelector(".dice");
    diceImage.style.display = "block";
    diceImage.src = "/photos/dice-" + dice + ".png";
    //update round score if dice rolled !== 1
    if (dice === 2 && lastDice === 2) {
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = "0";
      nextPlayer();
    } else if (dice !== 1) {
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      nextPlayer();
    }
    lastDice = dice;
  }
});

const holdDice = document.querySelector(".btn-hold");
holdDice.addEventListener("click", () => {
  if (activeGame) {
    //add current score to global score
    scores[activePlayer] += roundScore;
    //show on score
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    let inputValue = document.querySelector("input").value;
    inputValue ? (winningScore = inputValue) : (winningScore = 100);
    //check to see if score is 100
    if (scores[activePlayer] >= winningScore) {
      winner();
      document.querySelector("input").textContent = "";
    } else {
      nextPlayer();
    }
  }
});

const nextPlayer = () => {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.querySelector("#current-0").textContent = "0";
  document.querySelector("#current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
};

const winner = () => {
  document.querySelector("#name-" + activePlayer).innerText = "WINNER!";
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.add("winner");
  document
    .querySelector(".player-" + activePlayer + "-panel")
    .classList.remove("active");
  activeGame = false;
};

document.querySelector(".btn-new").addEventListener("click", newGame);

function newGame() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  activeGame = true;

  document.querySelector(".dice").style.display = "none";

  document.querySelector("#score-0").textContent = "0";
  document.querySelector("#score-1").textContent = "0";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

// next step, player loses entire score when 2's are rolled back to back.

//try adding a field where player can change the amount played too

//add a second dice to the game
