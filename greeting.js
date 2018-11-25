const form = document.querySelector(".js-formUser");
const nameBox = form.querySelector("input");
const greetingMsg = document.querySelector(".js-textGreeting");

//LS: Local Storage
//CL: Class List
const USER_LS = "currentUser",
      SHOWING_CL = "showing";
      GREETING_MSG = "WELCOME BACK!";

function showGreetingMsg(userName) {
  form.classList.remove(SHOWING_CL);
  greetingMsg.classList.add(SHOWING_CL);
  greetingMsg.innerText = `${GREETING_MSG} ${userName}!`;
}

function askWhoRU() {
  form.classList.add(SHOWING_CL);
  form.addEventListener("submit", handleSubmit);
}

function saveName(userName) {
  localStorage.setItem(USER_LS, userName);
}

function loadUserName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askWhoRU();
  } else {
    showGreetingMsg(currentUser);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = nameBox.value;
  showGreetingMsg(currentValue);
  saveName(currentValue);
}

function init() {
  loadUserName();
}

init();
