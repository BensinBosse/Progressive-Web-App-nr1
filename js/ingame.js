const maps = ["School", "Office", "McDonalds", "Grums", "din mor"];
let lastmap = null
let randomMap = parseInt(Math.random() *maps.length);
let map = maps[randomMap];

knut();
console.log(players);
console.error(typeof(players))

let playerArr = players.split(",");
console.log(playerArr)




// for (let i=0; i<10; ++i)
// {    
//     randomMap = parseInt(Math.random() * maps.length)
//     map = maps[randomMap]
//     console.log("map",map)
//     console.log("lastmap",lastmap)
//     console.log("count",i)

//     if (map != lastmap){
//         document.getElementById("mapText").innerHTML = map;
//         lastmap = map
//         console.log("hoppas att ja inte ser detta")
        
//     }
//     else{
//         console.log("else")
//     }

// }


let grid = document.getElementById("grid-container");
let morePeople = 0

if (morePeople === 1){
console.log("Ja")
    grid.style.gridTemplateColumns = "repeat(4, minmax(0, 1fr))";
}