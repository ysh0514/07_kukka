var header = document.querySelector(".headerContainer");
var headerContainer = document.querySelector(".headerWidthContainer");
var headerList = document.querySelector(".headerList");
var headerVideo = document.querySelector(".headerVideo");
var headerFlowerClass = document.querySelector(".headerFlowerClass");
var headerWidthContainer = document.querySelector(".headerWidthContainer");
var headerLogoWrapper = document.querySelector(".headerLogoWrapper");
var header;
var body = document.querySelector("body");

function onScroll() {
  if (window.pageYOffset > 200) {
    headerContainer.classList.add("hasShadow");
    headerWidthContainer.classList.add("headerHeight");
    headerList.classList.add("headerScrollList");
  } else {
    headerContainer.classList.remove("hasShadow");
    headerWidthContainer.classList.remove("headerHeight");
    headerList.classList.remove("headerScrollList");
  }
}
function onScrollMove() {
  window.scrollBy(0, 50);
}

function onScrollUpMove() {
  window.scrollBy(0, -50);
}

function onVideoMove() {
  window.scrollTo(0, 100);
}

function onFlowerMove() {
  window.scrollTo(0, 700);
}

function onVideoScroll() {
  if (window.pageYOffset < 100) {
    setTimeout(onScrollMove, 50);
    setTimeout(onScrollMove, 100);
  } else if (window.pageYOffset > 100) {
    setTimeout(onScrollUpMove, 20);
    setTimeout(onScrollUpMove, 40);
    setTimeout(onScrollUpMove, 60);
    setTimeout(onScrollUpMove, 80);
  }
  setTimeout(onVideoMove, 100);
}

function onFlowerClassScroll() {
  if (window.pageYOffset < 700) {
    setTimeout(onScrollMove, 20);
    setTimeout(onScrollMove, 40);
    setTimeout(onScrollMove, 60);
    setTimeout(onScrollMove, 80);
    setTimeout(onScrollMove, 100);
    setTimeout(onScrollMove, 120);
    setTimeout(onScrollMove, 140);
    setTimeout(onScrollMove, 160);
    setTimeout(onScrollMove, 180);
    setTimeout(onScrollMove, 200);
    setTimeout(onScrollMove, 220);
    setTimeout(onScrollMove, 240);
    setTimeout(onScrollMove, 260);
    setTimeout(onScrollMove, 280);
    setTimeout(onScrollMove, 300);
  } else if (window.pageYOffset > 700) {
    setTimeout(onScrollUpMove, 20);
    setTimeout(onScrollUpMove, 40);
    setTimeout(onScrollUpMove, 60);
    setTimeout(onScrollUpMove, 80);
    setTimeout(onScrollUpMove, 100);
    setTimeout(onScrollUpMove, 120);
    setTimeout(onScrollUpMove, 140);
    setTimeout(onScrollUpMove, 160);
    setTimeout(onScrollUpMove, 180);
    setTimeout(onScrollUpMove, 200);
    setTimeout(onScrollUpMove, 220);
    setTimeout(onScrollUpMove, 240);
    setTimeout(onScrollUpMove, 260);
    setTimeout(onScrollUpMove, 280);
    setTimeout(onScrollUpMove, 300);
  }
  setTimeout(onFlowerMove, 300);
}

window.addEventListener("scroll", onScroll);
headerVideo.addEventListener("click", onVideoScroll);
headerFlowerClass.addEventListener("click", onFlowerClassScroll);
