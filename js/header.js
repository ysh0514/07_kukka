const header = document.querySelector(".headerContainer");

function onScroll() {
  if (window.pageYOffset > 200) {
    header.classList.add("hasShadow");
  } else {
    header.classList.remove("hasShadow");
  }
}

window.addEventListener("scroll", onScroll);
