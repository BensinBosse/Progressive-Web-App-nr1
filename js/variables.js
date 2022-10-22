var players = [];
let newTimerValue = 0;
let finalSpyValue = "";

function saveTime() {
  localStorage.setItem("savedTime", timerValue);
}

function getSavedTime() {
  newTimerValue = localStorage.getItem("savedTime");
}

function bengt() {
  let i = 0;
  while (i < playerCount) {
    playerCountString = document.getElementById("input-" + (i + 1)).value;
    players[i] = playerCountString;
    i++;
  }
  localStorage.setItem("savedPlayers", players);
}

function knut() {
  players = localStorage.getItem("savedPlayers");
}

//sparar spyPlayer till local storage
function spyPlayerSave() {
  localStorage.setItem("spyPlayerSaved", spyPlayer);
}

//hämtar spyPlayerSaved
function getSavedSpy() {
  finalSpyValue = localStorage.getItem("spyPlayerSaved");
}