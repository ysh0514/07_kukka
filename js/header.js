var header = document.querySelector(".headerContainer");
var headerContainer = document.querySelector(".headerWidthContainer");
var headerList = document.querySelector(".headerList");
var headerVideo = document.querySelector(".headerVideo");
var headerFlowerClass = document.querySelector(".headerFlowerClass");
var body = document.querySelector("body");

function onScroll() {
  if (window.pageYOffset > 200) {
    headerContainer.classList.add("hasShadow");
    headerList.classList.add("headerScrollList");
  } else {
    headerContainer.classList.remove("hasShadow");
    headerList.classList.remove("headerScrollList");
  }
}

var count = 0;

function onVideoScroll() {
  if (count > 600) return;
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 30);
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 60);
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 90);
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 120);
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 150);
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 180);
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 210);
  setTimeout(() => {
    window.scrollBy(0, 50);
  }, 240);
  count = 0;
}

function onFlowerClassScroll() {
  window.scrollTo(0, 800);
}

window.addEventListener("scroll", onScroll);
headerVideo.addEventListener("click", onVideoScroll);
headerFlowerClass.addEventListener("click", onFlowerClassScroll);
