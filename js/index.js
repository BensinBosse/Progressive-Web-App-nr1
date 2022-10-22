console.log("index.js laddat");

let playerCount = document.getElementsByClassName("player-input").length;
var playerCountString = "input-" + playerCount;
console.log(playerCountString);

//navigation
let nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", function nextPage() {
  bengt();
  console.log(players);

  // För GitHub:
  // window.location.href = "/progressive-web-app-nr1/timer.html";

  // För dev-server:
  window.location.href = "/timer.html";
});

let addBtn = document.getElementById("more-btn");
let removeBtn = document.getElementById("fewer-btn");

removeBtn.addEventListener("click", function removePlayer() {
  playerCount = document.getElementsByClassName("player-input").length;
  var playerBox = document.getElementById("player-box");
  console.log("RM WORKED");
  console.log(playerCount);

  if (playerCount <= 3) {
    return;
  }
  playerCount = playerCount - 1;

  playerBox.removeChild(playerBox.lastElementChild);
});

let playerContainer = document.getElementById("player-box");
function scrollBottom(element) {
  element.scroll({ top: element.scrollHeight, behavior: "smooth" });
}

addBtn.addEventListener("click", function addPlayer() {
  var playerBox = document.getElementById("player-box");
  var input = document.createElement("input");
  input.type = "text";

  input.setAttribute("type", "text");
  input.setAttribute("class", "player-input");
  input.setAttribute("id", "input-" + (playerCount + 1));
  input.setAttribute("placeholder", "Player " + (playerCount + 1) + " name");
  input.setAttribute("Maxlength", "6");

  playerBox.appendChild(input);

  playerCount = document.getElementsByClassName("player-input").length;
  console.log(playerCount);
  scrollBottom(playerContainer);
});

scrollBottom(playerContainer);
