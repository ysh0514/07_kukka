const header = document.querySelector(".headerContainer");
const headerContainer = document.querySelector(".headerWidthContainer");
const headerList = document.querySelector(".headerList");
const headerVideo = document.querySelector(".headerVideo");
const headerFlowerClass = document.querySelector(".headerFlowerClass");

function onScroll() {
  if (window.pageYOffset > 200) {
    headerContainer.classList.add("hasShadow");
    headerList.classList.add("headerScrollList");
  } else {
    headerContainer.classList.remove("hasShadow");
    headerList.classList.remove("headerScrollList");
  }
}

function onVideoScroll() {
  window.scrollTo(0, 600);
}

function onFlowerClassScroll() {
  window.scrollTo(0, 800);
}

window.addEventListener("scroll", onScroll);
headerVideo.addEventListener("click", onVideoScroll);
headerFlowerClass.addEventListener("click", onFlowerClassScroll);
