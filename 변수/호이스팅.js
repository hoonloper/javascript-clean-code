/*
호이스팅은 선언과 할당이 분리됨.
런타임 시기 즉, 동작할 때를 의미.

코드를 작성할 때는 스코프를 예상하는데 런타임에서는 예상대로 되지 않는 경우가 있음.
 */

var global = 0;

function outer() {
  // 선언과 할당이 분리된 상황
  console.log(global);
  var global = 5;

  function inner() {
    var global = 10;

    console.log(global);
  }

  inner();

  global = 1;

  console.log(global);
}

outer();

// 또 다른 사례
function duplicatedVar() {
  var a;

  console.log(a);

  var a = 100;

  console.log(a);
}

duplicatedVar();

// 또 다른 사례 - 함수
var sum;

// 변수에 할당할 경우 동작
sum = function () {
  return 1 + 2;
};

console.log(sum());

// 함수도 호이스팅이 됨.
function sum() {
  return 1 + 2;
}

console.log(sum());

/*
var 변수 선언 -> 호이스팅됨
function으로 var 변수명과 동일하게 선언 -> 기존 호이스팅된 var 변수에 덮어씌움 

var 변수에 값까지 할당하게 된다면 정상적으로 분리가 됨

즉, 함수 선언시 const를 활용해 선언하는 방법을 추천
 */

// '함수 표현식'
const sum = function () {
  return 1 + 2;
};

console.log(sum());
