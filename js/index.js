console.log("index.js laddat")

let players=[];
let playerCount = document.getElementsByClassName("player-input").length;
let playerCountString = "input-"+ playerCount;
let playerInput = document.getElementById(playerCountString);
console.log(playerCountString);
console.log(playerInput);
let i=0;

while (i < playerCount)
{
    playerCountString = "input-"+(i + 1);
    players[i] = playerCountString;
    i++
}
console.log(players)

function addPlayer(){

    playerCount = document.getElementsByClassName("player-input").length;
    console.log("clicked");
    var playerBox = document.getElementById("player-box")
    var input = document.createElement("input");
    input.type = "text";

    input.setAttribute("type", "text")
    input.setAttribute("class", "player-input")
    input.setAttribute("id","input-" + (playerCount + 1))
    
    input.setAttribute("placeholder", "Player " + (playerCount + 1) + " name")

    
    console.log(playerCount);
    playerBox.appendChild(input);
}