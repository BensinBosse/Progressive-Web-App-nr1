knut();
let playerArr = players.split(",");
playerAmount = playerArr.length;
let i2 = 0;

while (i2 < playerAmount) {
  i2++;
  console.log("hej");
  var playerContainer = document.getElementById("container");
  var playerCard = document.createElement("div");

  playerCard.setAttribute("class", "item");
  playerCard.setAttribute("id", "player" + i2);
  playerCard.insertAdjacentText("beforeend", playerArr[i2 - 1]);

  playerContainer.appendChild(playerCard);
}

// import Timer from "easytimer.js";

// const timer = new Timer();
// /*
// const maps = ["School", "Office", "McDonalds", "Grums", "din mor"];
// let lastmap = null
// let randomMap = parseInt(Math.random() *maps.length);
// let map = maps[randomMap];
// */
// let timerEl = document.getElementById("timer")
// timerEl.addEventListener("click", function timerClick(){
//     console.log("Timer klickad")
//     //Här ska alltså timern startas
// })

// //Timer logic
// Timer.start({countdown: true, startValues: {seconds: 3}});

// $('#timer').html(Timer.getTimeValues().toString());

// Timer.addEventListener('secondsUpdated', function (e) {
//     $('#timer').html(Timer.getTimeValues().toString());
// });

// Timer.addEventListener('targetAchieved', function (e) {
//     $('#timer').html('KABOOM!!');
//     console.log("KLAR")
// });
