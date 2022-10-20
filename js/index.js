console.log("index.js laddat");

let playerCount = document.getElementsByClassName("player-input").length;
var playerCountString = "input-" + playerCount;
console.log(playerCountString);

function nextPage() {
  bengt();
  window.location.href = "/timer.html";
  console.log(players);
}

function addPlayer() {
  var playerBox = document.getElementById("player-box");
  var input = document.createElement("input");
  input.type = "text";

  input.setAttribute("type", "text");
  input.setAttribute("class", "player-input");
  input.setAttribute("id", "input-" + (playerCount + 1));

  input.setAttribute("placeholder", "Player " + (playerCount + 1) + " name");

  playerBox.appendChild(input);

  playerCount = document.getElementsByClassName("player-input").length;
  console.log(playerCount);
}

function removePlayer() {
  playerCount = document.getElementsByClassName("player-input").length;
  var playerBox = document.getElementById("player-box");
  console.log("RM WORKED");

  if (playerCount <= 3) {
    return;
  }

  playerBox.removeChild(playerBox.lastElementChild);
}
