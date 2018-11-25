const body = document.querySelector("body");

const IMG_NUM = 5;

function paintBgImage(imageNumber) {
  const image = new Image();
  image.src = `images/${imageNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);

}

function getRandomNumber() {
  const number = Math.ceil(Math.random() * IMG_NUM);
  return number;
}



function init() {
  const randomNumber = getRandomNumber();
  paintBgImage(randomNumber);
}

init();
