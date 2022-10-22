console.log("index.js laddat");

let playerCount = document.getElementsByClassName("player-input").length;
var playerCountString = "input-" + playerCount;
console.log(playerCountString);

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
  scrollBottom(playerContainer);

  scrollCheck()
});

let playerContainer = document.getElementById("player-box");
playerContainer.style.justifyContent = 'space-around';
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

  scrollCheck()
});

scrollBottom(playerContainer);

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

//Sätter justify-content: space-around på playerContainer,
//bara sålänge den inte overflowar
function scrollCheck() {
  if (playerContainer.scrollHeight > playerContainer.clientHeight) {
    playerContainer.style.justifyContent = '';
    console.log("scroll")
  } else {
    playerContainer.style.justifyContent = 'space-around';
    console.log("space")
  }
}