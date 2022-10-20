const btn = document.getElementById("btn")
const p = document.getElementById("p")
const againBtn = document.getElementById("next-btn")

btn.addEventListener("click", function(){
    btn.style.visibility = "hidden"
    console.log("gömd")
    p.textContent = "spyPlayer" + "!" //Denna ska såklart vara en variabel
    againBtn.style.visibility = "visible"
})