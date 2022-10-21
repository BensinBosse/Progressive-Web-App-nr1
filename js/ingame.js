knut();
let playerArr = players.split(",");
playerAmount = playerArr.length;
let i2 = 0;

let skola = [
  "Skola",
  "spion",
  "Lärare",
  "Elev",
  "Städare",
  "Mattant",
  "Rektor",
  "jfieofjoeijfosidjfoijo",
];
let kontor = [
  "kontor",
  "spion",
  "Arbetare",
  "kenneths mamma",
  "något mer",
  "en till sak",
  "dig sjelv",
];
console.log(skola);

let maps = [skola, kontor];

while (i2 < playerAmount) {
  i2++;
  var playerContainer = document.getElementById("container");
  var playerCard = document.createElement("div");

  playerCard.setAttribute("class", "item");
  playerCard.setAttribute("id", "player" + i2);
  playerCard.insertAdjacentText("beforeend", playerArr[i2 - 1]);

  playerContainer.appendChild(playerCard);
}

let spyPlayer = "Random_Text";
function giveRandomOccupation() {
  i2 = 0;

  let spyOccupied = false;

  //Denna är den sista som går igenom:
  spyPlayer = "Random_Text2";
  let randomOccupationNum = 0;
  let randomOccupation;

  let plats = maps[parseInt(Math.random() * 2)];
  let lastPlayer = document.getElementsByClassName("item");
  let player = document.getElementById("player1");
  while (i2 < lastPlayer.length) {
    player = document.getElementById("player" + (i2 + 1));
    var playerInfo = document.createElement("div");

    if (i2 + 1 == lastPlayer.length && spyOccupied == false) {
      randomOccupationNum = 1;
      randomOccupation = plats[randomOccupationNum];
      playerInfo.textContent = randomOccupation;
    } 
    
    else if (spyOccupied == false) {
      randomOccupationNum = Math.random() * (plats.length - 1) + 1;
      randomOccupation = plats[parseInt(randomOccupationNum)];

      if (parseInt(randomOccupationNum) == 1) {
        spyOccupied = true;

        //Dessa händer inte:
        spyPlayer = "Random_Text4";
        console.log("spionen är" + spyPlayer)
        spyPlayer = players[i2]

        //Inte dessa heller:
        console.log("spionens siffra är" + i2)
        console.log("spionen är" + spyPlayer)
        
        playerInfo.textContent = randomOccupation;

      } else {
        playerInfo.textContent = randomOccupation + " : " + plats[0];
      }
      console.log("spionen är" + spyPlayer)

    } else if (spyOccupied == true) {
      randomOccupationNum = Math.random() * (plats.length - 2) + 2;
      randomOccupation = plats[parseInt(randomOccupationNum)];
      playerInfo.textContent = randomOccupation + " : " + plats[0];
    }

    playerInfo.setAttribute("class", "playerInfo");

    playerInfo.style.display = "none";
    player.appendChild(playerInfo);

    playerCard = Math.random() * plats.length;
    i2++;
  }
}
giveRandomOccupation();

console.log("spionen är slutligen " + spyPlayer)
//styling for the player cards if less than 5
if (playerAmount < 5) {
  playerContainer.style.width = "max-content";
}

//timer variables declared
const wholeTimer = document.getElementById("timer");
const timerSeconds = document.getElementById("timer-seconds");
const timerMinutes = document.getElementById("timer-minutes");
const colon = document.getElementById("colon");
let onVar = false;
let finishedVar = false;
let seconds = 0;
let countdown;
timerSeconds.textContent = seconds;
colon.textContent = ":0";

//function for timer
getSavedTime();
let minutes = newTimerValue;
timerMinutes.textContent = minutes;
const nextBtn = document.getElementById("next-btn");

function startTimer() {
  countdown = setInterval(function () {
    if (onVar === false) {
      return;
    } else {
      seconds--;
      timerSeconds.textContent = seconds;

      if (seconds < 10 && seconds > 1) {
        colon.textContent = ":0";
      } else if (seconds == 0 && minutes == 0) {
        clearInterval(countdown);
        colon.innerHTML = "0:00";
        nextBtn.style.visibility = "visible";
        timerSeconds.textContent = "";
        timerMinutes.textContent = "";
        finishedVar = true;
        colon.setAttribute("#hide");
      } else if (seconds == -1) {
        minutes--;
        timerMinutes.textContent = minutes;
        seconds = 59;
        timerSeconds.textContent = seconds;
        colon.textContent = ":";
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
}

//function for timer on-click
wholeTimer.addEventListener("click", function () {
  if (onVar === false && finishedVar === false) {
    startTimer();
    onVar = true;
  } else if (onVar === true && finishedVar === false) {
    stopTimer();
    onVar = false;
  }
});

//function for putting clicked player card in focus
let inFocus = false;
let focusCard = "";
playerContainer.onclick = function (event) {
  let target = event.target;

  if (inFocus === false && focusCard === "" && target !== playerContainer) {
    target.classList.add("focus-class");
    inFocus = true;
    focusCard = target;
    target.firstElementChild.style.display = "block";

    //styling
    document.querySelector("body").style.backgroundColor = "rgb(30, 30, 30)";
    playerContainer.style.backgroundColor = "rgb(30, 30, 30)";
    playerContainer.style.overflow = "hidden";
    playerContainer.classList.remove("scroll-shadows");
  } else if (inFocus === true && focusCard === target) {
    target.classList.remove("focus-class");
    inFocus = false;
    target.firstElementChild.style.display = "none";
    focusCard = "";

    //styling
    document.querySelector("body").style.backgroundColor = "#333333";
    playerContainer.style.backgroundColor = "#333333";
    playerContainer.style.overflow = "scroll";
    playerContainer.classList.add("scroll-shadows");
  } else if (inFocus === true && target === focusCard.firstElementChild) {
    focusCard.classList.remove("focus-class");
    inFocus = false;
    focusCard.firstElementChild.style.display = "none";
    focusCard = "";

    //styling
    document.querySelector("body").style.backgroundColor = "#333333";
    playerContainer.style.backgroundColor = "#333333";
    playerContainer.style.overflow = "scroll";
    playerContainer.classList.add("scroll-shadows");
  }
};

//Navigation:
let prevBtn = document.getElementById("prev-btn")

//För GitHub:
prevBtn.addEventListener("click", function(){
    window.location.href = "/progressive-web-app-nr1/timer.html"
})

nextBtn.addEventListener("click", function(){
  spyPlayerSave()
  window.location.href = "/progressive-web-app-nr1/end.html"
})

//För dev-server:
// prevBtn.addEventListener("click", function(){
//     window.location.href = "/timer.html"
// })

// nextBtn.addEventListener("click", function(){
//   window.location.href = "/end.html"
// })