const maps = ["School", "Office", "McDonalds", "Grums", "din mor"];
let lastmap = null
let randomMap = parseInt(Math.random() *5);
let map = maps[randomMap];
console.log(map);

let i = 0

while (i<10, i++)
{


if (map == lastmap){
    randomMap = parseInt(Math.random() *5);
    map = maps[randomMap]
    console.log("last map was the same")


}
else{
    lastmap = map 
    console.log("lastmap is",lastmap);
}
console.log(lastmap,"lastmap")
console.log(map,"map")
}