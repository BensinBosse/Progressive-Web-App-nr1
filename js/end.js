const bigBtn = document.getElementById("big-btn")
const result = document.getElementById("result")
const againBtn = document.getElementById("next-btn")
getSavedSpy()

bigBtn.addEventListener("click", function(){
    bigBtn.style.visibility = "hidden"
    result.textContent = finalSpyValue + "!"
    againBtn.style.visibility = "visible"
})

//För GitHub:
againBtn.addEventListener("click", function(){
  window.location.href = "/progressive-web-app-nr1/Index.html"
})

//För dev-server:
// againBtn.addEventListener("click", function(){
//     window.location.href = "/Index.html"
// })