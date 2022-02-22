const productList = [
  {
    productName: "플라워 클래스",
    productDescription: "매주 새로운 커리큘럼으로 배우는",
    date: "(2/28~3/6)",
    productPrice: "63,000",
    productImage:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_web_R0tReO1.jpeg",
    productUrl: "https://kukka.kr/class/contents/381/",
    productPlace: [
      {
        place: "광화문점",
        color: "#9d80d8",
      },
      {
        place: "구로점",
        color: "#68a4fe",
      },
      {
        place: "송파점",
        color: "#ffcd32",
      },
      {
        place: "부산동래점",
        color: "#00afe3",
      },
    ],
  },
  {
    productName: "오아시스 리스",
    productDescription: "다양한 방식으로 공간을 연출하는",
    date: "(2/21~2/27)",
    productPrice: "79,000",
    productImage:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg",
    productUrl: "https://kukka.kr/class/contents/401/",
    productPlace: [
      {
        place: "광화문점",
        color: "#9d80d8",
      },
      {
        place: "잠실점",
        color: "#70cca9",
      },
      {
        place: "월계점",
        color: "#ffa04d",
      },
      {
        place: "구로점",
        color: "#68a4fe",
      },
    ],
  },
  {
    productName: "클래식 핸드타이트",
    productDescription: "화형이 또렷한 꽃으로 연출하는",
    date: "(2/18~2/22)",
    productPrice: "84,000",
    productImage:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg",
    productUrl: "https://kukka.kr/class/contents/408/",
    productPlace: [
      {
        place: "광화문점",
        color: "#9d80d8",
      },
      {
        place: "잠실점",
        color: "#70cca9",
      },
      {
        place: "구로점",
        color: "#68a4fe",
      },
      {
        place: "송파점",
        color: "#ffcd32",
      },
    ],
  },
];

const topDescriptionBox = document.querySelector(".topDescriptionBox");
const bottomDescriptionBox = document.querySelector(".bottomDescriptionBox");
const firstLink = document.querySelector(".firstLink");

function changeProduct() {
  document.querySelector(".leftProductImg").src = productList[0].productImage;
  document.querySelector(".rightTopProduct").src = productList[1].productImage;
  document.querySelector(".rightBottomProduct").src =
    productList[2].productImage;
  firstLink.href = productList[0].productUrl;
  document.querySelector(".secondLink").href = productList[1].productUrl;
  document.querySelector(".thirdLink").href = productList[2].productUrl;

  const leftTopText = document.querySelector(".leftTopText");
  const leftBottomText = document.querySelector(".leftBottomText");
  leftTopText.innerHTML = productList[0].productDescription;
  leftBottomText.innerHTML = productList[0].productName + "자세히 보기 >";

  const firstTitle = document.createElement("a");
  const firstDate = document.createElement("a");
  const firstPrice = document.createElement("p");
  const firstPlace = document.createElement("p");
  const firstTags = document.createElement("ul");

  firstTitle.href = firstDate.style.fontWeight = "600";
  firstTitle.style.fontWeight = "600";
  firstPrice.style.fontWeight = "600";
  firstPrice.style.fontSize = "14px";
  firstPrice.style.marginTop = "10px";
  firstTags.style.display = "flex";
  firstTags.style.marginTop = "10px";

  firstTitle.innerHTML = productList[1].productName;
  firstDate.innerHTML = productList[1].date;
  firstPrice.innerHTML = productList[1].productPrice + "원";

  productList[1].productPlace.map((item) => {
    const firstTag = document.createElement("li");
    firstTag.innerText = item.place;
    firstTags.appendChild(firstTag);
    firstTag.style.color = item.color;
    firstTag.style.textAlign = "center";
    firstTag.style.fontSize = "10px";
    firstTag.style.lineHeight = "20px";
    firstTag.style.fontWeight = "300";
    firstTag.style.border = `1px solid ${item.color}`;
    firstTag.style.borderRadius = "10px";
    firstTag.style.padding = "0 8px";
    firstTag.style.marginRight = "4px";
    firstTag.style.marginBottom = "2px";
    firstTag.style.listStyle = "none";
    firstTag.style.cursor = "pointer";
  });

  firstTitle.href = productList[1].productUrl;
  firstDate.href = productList[1].productUrl;

  topDescriptionBox.appendChild(firstTitle);
  topDescriptionBox.appendChild(firstDate);
  topDescriptionBox.appendChild(firstPrice);
  topDescriptionBox.appendChild(firstPlace);
  topDescriptionBox.appendChild(firstTags);

  const secondTitle = document.createElement("a");
  const secondDate = document.createElement("a");
  const secondePrice = document.createElement("p");
  const secondPlace = document.createElement("p");
  const secondTags = document.createElement("ul");

  secondDate.style.fontWeight = "600";
  secondTitle.style.fontWeight = "600";
  secondePrice.style.fontWeight = "600";
  secondePrice.style.fontSize = "14px";
  secondePrice.style.marginTop = "10px";
  secondTags.style.display = "flex";
  secondTags.style.marginTop = "10px";

  secondTitle.innerHTML = productList[2].productName;
  secondDate.innerHTML = productList[2].date;
  secondePrice.innerHTML = productList[2].productPrice + "원";

  productList[2].productPlace.map((item) => {
    const secondTag = document.createElement("li");
    secondTag.innerText = item.place;
    secondTags.appendChild(secondTag);
    secondTag.style.color = item.color;
    secondTag.style.textAlign = "center";
    secondTag.style.fontSize = "10px";
    secondTag.style.lineHeight = "20px";
    secondTag.style.fontWeight = "300";
    secondTag.style.border = `1px solid ${item.color}`;
    secondTag.style.borderRadius = "10px";
    secondTag.style.padding = "0 8px";
    secondTag.style.marginRight = "4px";
    secondTag.style.marginBottom = "2px";
    secondTag.style.listStyle = "none";
    secondTag.style.cursor = "pointer";
  });

  secondTitle.href = productList[2].productUrl;
  secondDate.href = productList[2].productUrl;

  bottomDescriptionBox.appendChild(secondTitle);
  bottomDescriptionBox.appendChild(secondDate);
  bottomDescriptionBox.appendChild(secondePrice);
  bottomDescriptionBox.appendChild(secondPlace);
  bottomDescriptionBox.appendChild(secondTags);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeProduct() {
  removeAllChildNodes(topDescriptionBox);
  removeAllChildNodes(bottomDescriptionBox);
}
changeProduct();

const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");

function leftClick() {
  removeProduct();
  productList.push(productList[0]);
  productList.shift();
  changeProduct();
}

function RightClick() {
  removeProduct();
  productList.unshift(productList[productList.length - 1]);
  productList.pop();
  changeProduct();
}

leftButton.addEventListener("click", leftClick);
rightButton.addEventListener("click", RightClick);
