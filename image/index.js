console.log("hi");

let productList = [
  {
    productName: "클래식 핸드타이트",
    date: "(2/28~3/6)",
    productPrice: "63,000",
    productImage:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ContentsTopBanner/3/class_2022_home_web_R0tReO1.jpeg",
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
    date: "(2/21~2/27)",
    productPrice: "79,000",
    productImage:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/106/img_%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4-%EB%A6%AC%EC%8A%A4.jpg",
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
    productName: "플라워 클래스",
    date: "(2/18~2/22)",
    productPrice: "84,000",
    productImage:
      "https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassProductGroup/107/img_%ED%81%B4%EB%9E%98%EC%8B%9D-%ED%95%B8%EB%93%9C%ED%83%80%EC%9D%B4%EB%93%9C.jpg",
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

function changeProduct() {
  document.querySelector(".leftProductImg").src = productList[0].productImage;
  document.querySelector(".rightTopProduct").src = productList[1].productImage;
  document.querySelector(".rightBottomProduct").src =
    productList[2].productImage;

  const title = document.createElement("span");
  const dataText = document.createElement("span");
  const price = document.createElement("p");
  const place = document.createElement("p");
  const tags = document.createElement("ul");
  price.style.marginTop = "10px";
  tags.style.display = "flex";
  tags.style.marginTop = "10px";

  title.innerHTML = productList[1].productName;
  dataText.innerHTML = productList[1].date;
  price.innerHTML = productList[1].productPrice;

  productList[1].productPlace.map((item) => {
    const tag = document.createElement("li");
    tag.innerText = item.place;
    tags.appendChild(tag);
    tag.style.color = item.color;
    tag.style.textAlign = "center";
    tag.style.fontSize = "10px";
    tag.style.lineHeight = "20px";
    tag.style.fontWeight = "300";
    tag.style.border = `1px solid ${item.color}`;
    tag.style.borderRadius = "10px";
    tag.style.padding = "0 8px";
    tag.style.marginRight = "4px";
    tag.style.marginBottom = "2px";
    tag.style.listStyle = "none";
  });

  topDescriptionBox.appendChild(title);
  topDescriptionBox.appendChild(dataText);
  topDescriptionBox.appendChild(price);
  topDescriptionBox.appendChild(place);
  topDescriptionBox.appendChild(tags);

  // 2번째

  const title2 = document.createElement("span");
  const dataText2 = document.createElement("span");
  const price2 = document.createElement("p");
  const place2 = document.createElement("p");
  const tags2 = document.createElement("ul");
  price2.style.marginTop = "10px";
  tags2.style.display = "flex";
  tags2.style.marginTop = "10px";

  title2.innerHTML = productList[2].productName;
  dataText2.innerHTML = productList[2].date;
  price2.innerHTML = productList[2].productPrice;

  productList[2].productPlace.map((item) => {
    const tag2 = document.createElement("li");
    tag2.innerText = item.place;
    tags2.appendChild(tag2);
    tag2.style.color = item.color;
    tag2.style.textAlign = "center";
    tag2.style.fontSize = "10px";
    tag2.style.lineHeight = "20px";
    tag2.style.fontWeight = "300";
    tag2.style.border = `1px solid ${item.color}`;
    tag2.style.borderRadius = "10px";
    tag2.style.padding = "0 8px";
    tag2.style.marginRight = "4px";
    tag2.style.marginBottom = "2px";
    tag2.style.listStyle = "none";
  });

  bottomDescriptionBox.appendChild(title2);
  bottomDescriptionBox.appendChild(dataText2);
  bottomDescriptionBox.appendChild(price2);
  bottomDescriptionBox.appendChild(place2);
  bottomDescriptionBox.appendChild(tags2);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function removeProduct() {
  removeAllChildNodes(topDescriptionBox);
  removeAllChildNodes(bottomDescriptionBox);
  //   bottomDescriptionBox.children.remove();
}

const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");

function leftClick() {
  removeProduct();
  productList.unshift(productList[productList.length - 1]);
  productList.pop();
  console.log(productList);
  changeProduct();
}

function RightClick() {
  removeProduct();
  productList.unshift(productList[productList.length - 1]);
  productList.pop();
  changeProduct();
}

changeProduct();

leftButton.addEventListener("click", leftClick);
rightButton.addEventListener("click", RightClick);
