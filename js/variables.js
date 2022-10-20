var players = [];
let i = 0;

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
