const iframeWrapper = document.querySelector(".iframeWrapper");
const mainBanner = document.querySelector(".mainBanner");
const prevBanner = document.querySelector(".prevBanner");
const nextBanner = document.querySelector(".nextBanner");
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
const index = document.querySelector(".indexBanner");

let currentSlide = 0;
const bannerObj = [
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/298/PC_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_VahRP60.jpg",
  },
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/276/PC_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_2.jpg",
  },
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/277/PC_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_ktKSvk1.jpg",
  },
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/2021/08/17/PC_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88.png",
  },
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/266/PC_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_KF4ywo3.jpg",
  },
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/2021/12/16/PC_%EB%A9%94%EC%9D%B8%EB%B0%B0%EB%84%88_2.jpg",
  },
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/257/PC_%E1%84%86%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%87%E1%85%A2%E1%84%82%E1%85%A5.png",
  },
  {
    src: "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsMainItem/281/210107_main_ktvvip_w.png",
  },
];

function onPrevClick() {
  iframeWrapper.style.transition = "all 1s";
  iframeWrapper.style.transform = "translateX(1920px)";
  setTimeout(() => {
    iframeWrapper.style.transition = "all 0s";
    iframeWrapper.style.transform = "translateX(0px)";
    if (currentSlide === 0) {
      currentSlide = 7;
    } else {
      currentSlide--;
    }
    if (currentSlide === 0) {
      prevBanner.style.backgroundImage = `url(${bannerObj[7].src})`;
    } else {
      prevBanner.style.backgroundImage = `url(${
        bannerObj[currentSlide - 1].src
      })`;
    }
    if (currentSlide === 7) {
      nextBanner.style.backgroundImage = `url(${bannerObj[0].src})`;
    } else {
      nextBanner.style.backgroundImage = `url(${
        bannerObj[currentSlide + 1].src
      })`;
    }
    mainBanner.style.backgroundImage = `url(${bannerObj[currentSlide].src})`;
    index.innerText = `${currentSlide + 1}/8`;
  }, 1000);
}

function onNextClick() {
  iframeWrapper.style.transition = "all 1s";
  iframeWrapper.style.transform = "translateX(0px)";
  setTimeout(() => {
    iframeWrapper.style.transition = "all 0s";
    iframeWrapper.style.transform = "translateX(0px)";
    if (currentSlide === 7) {
      currentSlide = 0;
      nextBanner.style.backgroundImage = `url(${bannerObj[0].src})`;
    } else {
      currentSlide++;
      nextBanner.style.backgroundImage = `url(${bannerObj[1].src})`;
    }
    if (currentSlide === 0) {
      prevBanner.style.backgroundImage = `url(${bannerObj[7].src})`;
    } else {
      prevBanner.style.backgroundImage = `url(${
        bannerObj[currentSlide - 1].src
      })`;
    }
  }, 1000);
  console.log(currentSlide);
  mainBanner.style.backgroundImage = `url(${bannerObj[currentSlide].src})`;
  index.innerText = `${currentSlide + 1}/8`;
}
prevBanner.style.backgroundImage = `url(${bannerObj[7].src})`;
mainBanner.style.backgroundImage = `url(${bannerObj[currentSlide].src})`;
nextBanner.style.backgroundImage = `url(${bannerObj[1].src})`;
index.innerText = `${currentSlide + 1}/8`;

prevButton.addEventListener("click", onPrevClick);
nextButton.addEventListener("click", onNextClick);
