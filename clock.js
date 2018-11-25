const clock = document.querySelector(".js-clock");
const showClock = clock.querySelector("h1");
//console.dir(showClock);

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  showClock.innerText = `${hours < 10 ? `0${hours}` : hours}:${
                           minutes < 10 ? `0${minutes}` : minutes}:${
                           seconds < 10 ? `0${seconds}` : seconds}`;

}

function init() {
  getTime();
  setInterval(getTime, 1000);//update every 1000ms
}

init();
