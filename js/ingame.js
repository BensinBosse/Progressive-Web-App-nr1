knut();

let playerArr = players.split(",");
playerAmount = playerArr.length;
let i = 0;

while (i < playerAmount) {
  i++;
  var playerContainer = document.getElementById("container");
  var playerCard = document.createElement("div");

  playerCard.setAttribute("class", "item");
  playerCard.setAttribute("id", "player" + i);
  playerCard.insertAdjacentText("beforeend", playerArr[i - 1]);
  playerContainer.appendChild(playerCard);
}

function giveRoles() {
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //VIKTIGT! DU FÅR INTE ÄNDRA HÄR FÖR JAG EXPERIMENTERAR MED NYA LÖSNINGAR FÖR ATT GÖRA DET LÄTTARE FÖR BÅDE DIG OCH MIG:

  i = 1;
  let randomNumber = Math.random() * locations.length;
  let intNumber = parseInt(randomNumber);
  const currentMap = locations[intNumber];
  const rolesSave = [...currentMap.roles];

  for (let playerInfo in playerArr) {
    randomNumber = Math.random() * currentMap.roles.length;
    intNumber = parseInt(randomNumber);
    playerInfo = currentMap.roles[intNumber];

    let player = document.getElementById("player" + i);
    var playerOccupation = document.createElement("div");
    playerOccupation.textContent = currentMap.name + " : " + playerInfo;
    playerOccupation.setAttribute("class", "playerInfo");
    playerOccupation.style.display = "none";
    player.appendChild(playerOccupation);

    if (currentMap.roles.length > 1) {
      currentMap.roles.splice(intNumber, 1);
    } else {
      currentMap.roles = [...rolesSave];
    }
    i++;
  }

  randomNumber = parseInt(Math.random() * (i - 1) + 1);
  playerSpy = document.getElementById("player" + randomNumber);
  playerSpy.removeChild(playerSpy.firstElementChild);

  //Förlåt va tvungen att testa lite, och det funka... XD
  spyPlayer = playerSpy.textContent;
  spyPlayerSave();

  SpyName = "hej";
  playerSpy.innerHTML +=
    '<div class="playerInfo" style="display: none;">Du är KENNETH, Låt ingen veta!</div>';

  console.log(currentMap.name);

  //DET GÄLLER TILL HIT
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
}
giveRoles();

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
let prevBtn = document.getElementById("prev-btn");

//För dev-server eller git. ändra i variables.js:
if (dev == true) {
  prevBtn.addEventListener("click", function () {
    window.location.href = "/timer.html";
  });

  nextBtn.addEventListener("click", function () {
    window.location.href = "/end.html";
  });
} else {
  prevBtn.addEventListener("click", function () {
    window.location.href = "/progressive-web-app-nr1/timer.html";
  });

  nextBtn.addEventListener("click", function () {
    spyPlayerSave();
    window.location.href = "/progressive-web-app-nr1/end.html";
  });
}
