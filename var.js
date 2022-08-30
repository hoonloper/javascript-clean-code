// var는 재할당뿐만 아니라 재선언도 가능하다.
var name = "이름";
var name = "이름2";
var name = "이름3";
var name = "이름3";

console.log(name);

// let은 이미 선언을 했기 때문에 재선언이 불가능하지만 재할당이 가능하다.
let name = "이름";

// const는 재선언과 재할당 모두 불가능하다. 즉 상수이다.
const name = "이름";
