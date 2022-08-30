var global = "전역";

// var는 함수단위 스코프이다보니 if문에 해당되지 않음.
if (global === "전역") {
  var global = "지역 변수";

  console.log(global);
}

// 전역 변수까지 영향을 주게 됨
console.log(global);

let global = "전역";

// let은 블록 스코프이기 때문에 if문에서 스코프 적용.
if (global === "전역") {
  let global = "지역 변수";

  console.log(global);
}

// 지역과 전역의 차이 확인 가능.
console.log(global);

const global = "전역";

// const 또한 동일하다.
if (global === "전역") {
  const global = "지역 변수";

  console.log(global);
}

// 지역과 전역의 차이 확인 가능.
console.log(global);
