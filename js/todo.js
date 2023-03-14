const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"; //중복되는 문자열 변수로

//변수내용 변환이 가능하도록 let으로 선언해준다.
let toDos = []; //입력한 값들 담을 배열

//로컬저장소에 입력값 저장하기
function saveToDos() {
  //JSON.stringify() -> 로컬저장소에 배열값을 String으로 저장할 수 있다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //
}

//버튼 누르면 리스트 지우기
function deleteToDo(e) {
  const delLi = e.target.parentElement; //지워질 값

  delLi.remove(); //추가된 입력값 삭제

  //로컬저장소에 저장된 값에서 지워질 값을 제외한 모든 것을 남긴다
  toDos = toDos.filter((toDO) => toDO.id !== parseInt(delLi.id)); //문자열 숫자로 바꿔 조건식 성립하게 만들기
  saveToDos(); //로컬저장소에 지워진 값 반영
}

// 입력받은 오브젝트 값 리스트에 넣어  화면에 띄우기
function printToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id; //리스트 태그에 id부여
  const span = document.createElement("span");
  span.innerText = newToDoObj.text; //인자를 오브젝트를 받음으로써 그에 대한 반영
  const button = document.createElement("button");

  button.innerText = "❌"; //이모지(win + . 혹은 검색)
  button.addEventListener("click", deleteToDo);

  li.appendChild(span); //li에 span태그 만들기
  li.appendChild(button); //span옆에 버튼 위치시키기

  toDoList.appendChild(li); //ul에 태그 추가
}

//submit할 때 일어날 일 함수
function toDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = ""; //submit후 입력창 비우기

  //값 하나하나를 다루기 위해 오브젝트 입력값 생성
  const newToDoObj = {
    text: newToDo,
    id: Date.now(), //랜덤 id 부여
  };

  toDos.push(newToDoObj); //toDos배열에 입력값 하나씩 넣기
  printToDo(newToDoObj);
  saveToDos(); //입력값 로컬저장소에 저장
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //로컬저장소에 저장된 할일목록들

//로컬저장소의 "todos"키값이 null이 아니라면
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // JSON.parse() -> 문자열 가공
  toDos = parsedToDos; //새로고침에도 후 리스트들이 초기화 되지 않게 해줌.
  parsedToDos.forEach(printToDo); //만들어둔 함수로 저장된 값 띄우기
}
