//handleKeyBoardButtonPress
function handleKeyBoardButtonPress(event) {
  const playerPress = event.key;
  const converUpper = playerPress.toUpperCase();

  const Alphabed = document.getElementById("displayAlphabed");
  const currentAlphabed = Alphabed.innerText;

  if (converUpper === currentAlphabed) {
    hideEliment("wrong");
    const removeColorAlphabed = converUpper.toLowerCase();
    scoreUpdate();
    removeBackgroundColorById(removeColorAlphabed);
    ContinueGame();
  } else {
    addEliment("wrong");
    const life = lifeUpdate();
    if (life === 0) {
      endOfGame();
    }
  }
}

// Capture Key Board Key
document.addEventListener("keyup", handleKeyBoardButtonPress);

// Continue Function
function ContinueGame() {
  const alphabed = getRandomAlphabed();

  const showInDisplay = document.getElementById("displayAlphabed");
  showInDisplay.innerText = alphabed;

  SetBackgroundColorById(alphabed);
}

// main Function
function play() {
  hideEliment("home_section");
  addEliment("play_ground");
  ContinueGame();
}

//End Of Game
function endOfGame() {
  hideEliment("play_ground");
  addEliment("Score_section");
  lastUpdateScore();
}

// Play Again
function playBack() {
  reset();
  hideEliment("Score_section");
  addEliment("play_ground");
  ContinueGame();
}
