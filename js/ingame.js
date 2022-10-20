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

if (playerAmount < 5) {
    playerContainer.style.width = "max-content"
}

//timer settings
let wholeTimer = document.getElementById("timer")
let timerSeconds = document.getElementById("timer-seconds")
let timerMinutes = document.getElementById("timer-minutes")
let colon = document.getElementById("colon")
let onVar = false;
finishedVar = false;
var seconds = timerSeconds.textContent;
var countdown;

function startTimer() {
    countdown = setInterval(function(){
        if(onVar === false){
            return
        }
        else {
            seconds--;
            timerSeconds.textContent = seconds;
            if (seconds <10 && seconds > 0) {
                colon.textContent = ":0"
            }
            else if (seconds > 9){
                colon.textContent = ":"
            }
            else if(seconds == 0 && timerMinutes.textContent == "0") {
                clearInterval(countdown);
                colon.textContent = "MORSAN"
                timerSeconds.textContent = ""
                timerMinutes.textContent = ""
                finishedVar = true
            }
            
        }  
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
}

//function
wholeTimer.addEventListener("click", function(){
    console.log("Timer klickad")
    if (onVar === false && finishedVar === false) {
        startTimer()
        onVar = true
    }
    else if (onVar === true && finishedVar === false) {
        stopTimer()
        onVar = false
    }
})