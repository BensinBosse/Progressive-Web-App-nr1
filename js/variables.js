var players = [];

function bengt(){
    while (i < playerCount) {
        playerCountString = document.getElementById("input-" + (i + 1)).value;
        console.log(playerCountString);
        players[i] = playerCountString;
        i++;
      }
    localStorage.setItem("savedPlayers", players)
};

function knut(){
    players = localStorage.getItem("savedPlayers")
}

