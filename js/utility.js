// Hide Element function
function hideEliment(element) {
  const hideEliment = document.getElementById(element);
  hideEliment.classList.add("hidden");
}

// Remove Element function
function addEliment(element) {
  const addEliment = document.getElementById(element);
  addEliment.classList.remove("hidden");
}

// Set Back Ground Color on Key Board
function SetBackgroundColorById(evenId) {
  const event = document.getElementById(evenId);
  event.classList.add("bg-[#ff0202cb]");
}

// Remove Back Ground Color on current alphabed
function removeBackgroundColorById(evenId) {
  const event = document.getElementById(evenId);
  event.classList.remove("bg-[#ff0202cb]");
}

//Score Update
function scoreUpdate() {
  const getCurrentPointElement = document.getElementById("current-score");
  const getCurrentPointvalue = getCurrentPointElement.innerText;
  const getCurrentPoint = parseInt(getCurrentPointvalue);
  const updateScore = getCurrentPoint + 1;
  getCurrentPointElement.innerText = updateScore;
}

// life Update
function lifeUpdate() {
  const lifeUpdateElement = document.getElementById("current-life");
  const lifeUpdatevalue = lifeUpdateElement.innerText;
  const lifeUpdate = parseInt(lifeUpdatevalue);
  const life = lifeUpdate - 1;
  lifeUpdateElement.innerText = life;
  return life;
}

//get a Random Alphabed
function getRandomAlphabed() {
  const Allalphabed = "abcdefghijklmnopqrstuvwxyz";
  const singleAlphabed = Allalphabed.split("");
  const randomNumber = Math.random() * 25;
  const indexNumber = Math.round(randomNumber);
  const alphabed = singleAlphabed[indexNumber];
  return alphabed;
}

// last Update Score
function lastUpdateScore() {
  const scoreElement = document.getElementById("current-score");
  const score = scoreElement.innerText;

  const lastscoreElement = document.getElementById("last_score");
  lastscoreElement.innerText = score;
}

//reset
function reset() {
  const resetKeyBoardColorElement = document.getElementById("displayAlphabed");
  const resetKeyBoardColor = resetKeyBoardColorElement.innerText;
  removeBackgroundColorById(resetKeyBoardColor);
  const resetScore = document.getElementById("current-score");
  resetScore.innerText = 0;
  const resetlife = document.getElementById("current-life");
  resetlife.innerText = 5;
}
