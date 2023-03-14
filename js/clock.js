const clock = document.querySelector("#clock"); //h2

function getClock() {
  const date = new Date(); //현재시간을 변수에 저장

  // "1".padStart(2, "0"); "1"이 2글자 미만이라면 앞에 "0"을 붙인다.
  // "1".padEnd(2, "0"); "1"이 2글자 미만이라면 뒤에 "0"을 붙인다.

  //시,분,초가 한자리 수일 떄 앞에 0을 붙여주는 작업
  //String(date.getHours()) -> "19"
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  //clock의 내용을 현재시간으로 설정
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //이거 없으면 1초동안 00:00 보여준 뒤 시간이 갱신됨
setInterval(getClock, 1000); // 함수를 5초마다 반복
