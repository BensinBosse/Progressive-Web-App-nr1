var players = [];
let i = 0;
let newTimerValue = 0;

function saveTime() {
  localStorage.setItem("savedTime", timerValue);
}

function getSavedTime() {
  newTimerValue = localStorage.getItem("savedTime");
}

function bengt() {
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
