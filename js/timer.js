const increaseBtn = document.getElementById("increase-btn")
const decreaseBtn = document.getElementById("decrease-btn")
const nextBtn = document.getElementById("next-btn")
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