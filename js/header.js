var header = document.querySelector(".headerContainer");
var headerContainer = document.querySelector(".headerWidthContainer");
var headerList = document.querySelector(".headerList");
var headerVideo = document.querySelector(".headerVideo");
var headerFlowerClass = document.querySelector(".headerFlowerClass");
var body = document.querySelector("body");

function onScroll() {
  if (window.pageYOffset > 200) {
    headerContainer.classList.add("hasShadow");
    headerList.className = "headerList headerScrollList";
  } else {
    headerContainer.classList.remove("hasShadow");
    headerList.className = "headerList";
  }
}
function onScrollMove() {
  window.scrollBy(0, 50);
}
function onVideoScroll() {
  setTimeout(onScrollMove, 30);
  setTimeout(onScrollMove, 60);
  setTimeout(onScrollMove, 90);
  setTimeout(onScrollMove, 120);
  setTimeout(onScrollMove, 150);
  setTimeout(onScrollMove, 180);
  setTimeout(onScrollMove, 210);
  setTimeout(onScrollMove, 240);
  setTimeout(onScrollMove, 270);
  setTimeout(onScrollMove, 300);
}

function onFlowerClassScroll() {
  window.scrollTo(0, 800);
}

window.addEventListener("scroll", onScroll);
headerVideo.addEventListener("click", onVideoScroll);
headerFlowerClass.addEventListener("click", onFlowerClassScroll);
