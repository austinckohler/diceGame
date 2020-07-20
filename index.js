let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// document.querySelector("#current-" + activePlayer).textContent = dice;

let score = document.querySelector("#score-0").textContent;

roll = document.querySelector(".btn-roll");
roll.addEventListener("click", function () {
  let dice = Math.floor(Math.random() * 6 + 1);
  let diceImage = document.querySelector(".dice");
  diceImage.style.display = "block";
  diceImage.src = "dice-" + dice + ".png";
  dice;
});

score.textContent = "0";
document.querySelector("#score-1").textContent = "0";
document.append("scoore");
