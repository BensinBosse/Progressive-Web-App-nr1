const increaseBtn = document.getElementById("increase-btn")
const decreaseBtn = document.getElementById("decrease-btn")
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
let timerMinutes = document.getElementById("timer-minutes")
let timerValue = 10
timerMinutes.innerHTML = timerValue


decreaseBtn.addEventListener("click", function decreaseTime(){
    if (timerValue > 1){
    timerValue -= 1
    timerMinutes.innerHTML = timerValue
    }
})

increaseBtn.addEventListener("click", function increaseTime(){
    if (timerValue < 20){
    timerValue += 1
    timerMinutes.innerHTML = timerValue
    }
})


//För GitHub:
prevBtn.addEventListener("click", function(){
    saveTime()
    window.location.href = "/progressive-web-app-nr1/Index.html"
})

nextBtn.addEventListener("click", function(){
    saveTime()    
    window.location.href = "/progressive-web-app-nr1/ingame.html"
})

//För dev-server:
// prevBtn.addEventListener("click", function(){
//     saveTime()
//     window.location.href = "/timer.html"
// })

// nextBtn.addEventListener("click", function(){
//     saveTime()
//   window.location.href = "/end.html"
// })
