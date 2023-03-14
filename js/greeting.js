//element 찾기
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//중복사용되는 클래스명 변수로 저장 (오타방지)
const class_Hidden = "hidden"; //요소를 숨기는 css
const userNameKey = "username";

function onSubmit(e) {
  e.preventDefault(); // 새로고침 막음
  loginForm.classList.add(class_Hidden); //함수실행 후 로그인 폼은 사라지게
  const username = loginInput.value;
  localStorage.setItem(userNameKey, username); //로컬저장소에서 "username"키에 입력값저장
  printGreeting();
}

//중복되는 코드는 함수로
function printGreeting() {
  const username = localStorage.getItem(userNameKey);
  greeting.classList.remove(class_Hidden); //환영인사보이기
  greeting.innerText = `Hello ${username}!`; //이름을 인자로 받음
}

//로컬저장소에 있는 "username"키에 해당하는 값 변수할당
savedName = localStorage.getItem(userNameKey);

// 저장된 이름이 없다면
if (savedName === null) {
  loginForm.classList.remove(class_Hidden); //입력폼 보이게 하고
  loginForm.addEventListener("submit", onSubmit); //엔터 및 버튼 누르면 함수실행
} else {
  printGreeting();
}
