

const COORDS_LS = "locationCoords";
const API_KEY = "2ba17169a2c91b2b737cf4d4ef5bbbb1";


function saveName(userName) {
  localStorage.setItem(USER_LS, userName);
}

function handleLocationSuccess(location) {
  console.log(location);
}

function handleLocationFailed() {
  console.log("I don't know where you are!");
}

function askWhereRU() {
  navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationFailed);
  //const currentLocation =
}

function loadCoords() {
  const lastCoords = localStorage.getItem(COORDS_LS);
  if (lastCoords === null) {
    askWhereRU();
  } else {
    showGreetingMsg(currentUser);
  }
}

function init() {

}

init();
