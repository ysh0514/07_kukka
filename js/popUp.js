console.log("연결");
var popUpContainer = document.querySelector(".popUpContainer");

var first = document.querySelector(".popUpFirst");
var second = document.querySelector(".popUpSecond");
var third = document.querySelector(".popUpThird");

var firstButton = document.querySelector(".popUpFirstButton");
var secondButton = document.querySelector(".popUpSecondButton");
var thirdButton = document.querySelector(".popUpThirdButton");

var closeToday = document.querySelector(".closeToday");
var closePopUp = document.querySelector(".popUpClose");

function onFirstButtonClick() {
  first.classList.add("popUpShown");
  second.classList.add("popUpUnShown");
  third.classList.add("popUpUnShown");
  second.classList.remove("popUpShown");
  third.classList.remove("popUpShown");
  firstButton.classList.add("popUpSelected");
  secondButton.classList.remove("popUpSelected");
  thirdButton.classList.remove("popUpSelected");
}
function onSecondButtonClick() {
  second.classList.add("popUpShown");
  first.classList.add("popUpUnShown");
  third.classList.add("popUpUnShown");
  first.classList.remove("popUpShown");
  third.classList.remove("popUpShown");
  secondButton.classList.add("popUpSelected");
  firstButton.classList.remove("popUpSelected");
  thirdButton.classList.remove("popUpSelected");
}
function onThirdButtonClick() {
  third.classList.add("popUpShown");
  first.classList.add("popUpUnShown");
  second.classList.add("popUpUnShown");
  first.classList.remove("popUpShown");
  second.classList.remove("popUpShown");
  thirdButton.classList.add("popUpSelected");
  firstButton.classList.remove("popUpSelected");
  secondButton.classList.remove("popUpSelected");
}

function onCloseClick() {
  popUpContainer.classList.add("popUpUnShown");
  popUpContainer.classList.remove("popUpContainer");
}

firstButton.addEventListener("click", onFirstButtonClick);
secondButton.addEventListener("click", onSecondButtonClick);
thirdButton.addEventListener("click", onThirdButtonClick);

closeToday.addEventListener("click", onCloseClick);
closePopUp.addEventListener("click", onCloseClick);
