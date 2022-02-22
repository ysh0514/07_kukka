var count = document.querySelector(".count");
var onlyPc = document.querySelector(".onlyPc");

function countCheck() {
  if (count.textContent === "0") {
    count.style.display = "none";
  }
}

countCheck();
