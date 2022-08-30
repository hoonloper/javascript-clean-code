// global.js 1
var globalVar = "global";

// 전역 초기화
var setTimeout = "setTimeout";

// global.js 2
console.log(globalVar);

// 1초후에 콘솔 함수
window.setTimeout(() => {
  console.log("1초");
}, 1000);

/*
전역 공간을 활용하면 전역 공간을 사용하는 코드끼리 겹칠 우려가 있음.
전역 공간에서 만들어진 함수 이름을 전역으로 설정하면 해당 메서드에 대입이 되어 정상 동작을 못하는 상황을 만든다.
*/

// 전역 공간을 더럽히는 사례
const array = [10, 20, 30];

// index는 전역 공간에 저장됨
for (var index = 0; index < array.length; index++) {
  const element = array[index];
}
