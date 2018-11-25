const formToDo = document.querySelector(".js-formToDo");
const inputToDo = formToDo.querySelector("input");
const listToDo = document.querySelector(".js-listToDo");

//LS: Local Storage
//CL: Class List
const TODOLIST_LS = "todoList";
let arrToDo = [];

function showToDoList(userList) {
  //console.log(textList);
  const liList = document.createElement("li");
  const btnDel = document.createElement("button");
  const spanEachList = document.createElement("span");
  const newId = arrToDo.length + 1;

  const objToDo = {
    text: userList,
    id: newId
  };

  btnDel.addEventListener("click", delToDoList);

  btnDel.innerText = "x";
  spanEachList.innerText = userList;

  liList.appendChild(spanEachList);
  liList.appendChild(btnDel);
  listToDo.appendChild(liList);

  arrToDo.push(objToDo);
  liList.id = newId;

}

function delToDoList(event) {
  const target = event.target;
  const delList = target.parentNode;
  listToDo.removeChild(delList);
  const cleanArrToDo = arrToDo.filter(function(toDo) {
    console.log(toDo.id, parseInt(delList.id));
    return toDo.id !== parseInt(delList.id);
  });
  arrToDo = cleanArrToDo;
  saveToDoList();
}

function saveToDoList() {
  localStorage.setItem(TODOLIST_LS, JSON.stringify(arrToDo));
}

function loadToDoList() {
  const currentList = localStorage.getItem(TODOLIST_LS);
  if (currentList !== null) {
    const parsedList = JSON.parse(currentList);
    parsedList.forEach(function(toDo){
      //console.log(toDo.text);
      showToDoList(toDo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputToDo.value;
  showToDoList(currentValue);
  inputToDo.value = "";
  saveToDoList();
}

function init() {
  loadToDoList();
  formToDo.addEventListener("submit", handleSubmit);
}

init();
