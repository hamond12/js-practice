const images = ["1.jpg", "2.jpg", "3.jpg"];

const background = images[Math.floor(Math.random() * images.length)];

//엘레멘트 생성후 html에 추가하는 방식
const bgImage = document.createElement("img");

//경로 설정
bgImage.src = `img/${background}`;

//body에서 제일 밑에 요소를 추가시킴
document.body.appendChild(bgImage);
