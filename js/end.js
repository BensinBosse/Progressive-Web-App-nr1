const bigBtn = document.getElementById("big-btn");
const result = document.getElementById("result");
const againBtn = document.getElementById("next-btn");
getSavedSpy();

bigBtn.addEventListener("click", function () {
  bigBtn.style.visibility = "hidden";
  result.textContent = finalSpyValue + "!";
  againBtn.style.visibility = "visible";
});

// För dev-server eller git. ändra i variables.js:
if (dev == true) {
  againBtn.addEventListener("click", function () {
    window.location.href = "/Index.html";
  });
} else {
  againBtn.addEventListener("click", function () {
    window.location.href = "/progressive-web-app-nr1/Index.html";
  });
}
