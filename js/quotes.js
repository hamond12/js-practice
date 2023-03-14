//명언 오브젝트
const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela-",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "-Eleanor Roosevelt-",
  },
];

//element 가져오기
const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

//랜덤한 명언이 들어있는 변수
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

//오브젝트의 요소 명언,작가 변수에 각각 저장
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
