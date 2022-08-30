## Javascript Clean Code!!

Javascript
몽키 패치(Monkey Patch) - 런타임 중인 프로그램의 내용이 변경되는 행동을 의미

열흘만에 만든 언어
문법 -> 자바
문자열, 배열, 정규식 -> 펄
이벤트 -> 하이퍼 토크
함수 -> 오크
클로저, 스코프 환경 -> 스키마
프로토 타입 -> 셀프

Node.js는 Chrome V8 JS 엔진으로 빌드된 JS 런타임

### 사례를 통해 파악하자!

사람의 관점에 따라 혹은 상황에 따라 코드의 질을 다르게 볼 수 있다.
그렇기에 상황에 따라 더 좋은 코드를 작성할 수 있는 능력을 기르고자 한다.

### 의식적인 수련을 통해 단련하자!

언제나 코드를 작성할 때 의식을 가지고 작성하는 버릇을 들이자.

### var를 지양해야 하는 이유.

let & const는 ES2015버전부터 생김.
ES2015버전 이전에는 모두 var를 사용했고 let과 const는 업그레이드 문법임.
그래서 var로 작성된 코드들이 있을 수 있어 var를 삭제하지 않은 것이고, 그대로 사용하는 코드도 있을 수 있음.

- var는 함수 스코프를 가짐.
- let, const는 블록 스코프를 가짐. + TDZ

즉, var보다 let과 const가 안전한 코드를 작성할 수 있게 도와줌.

```javascript
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
```

### function scope & block scope

```javascript
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
```

### let보다 cont를 사용하면 좋은 이유

변수안에 많은 것을 담을 수 있다보니 재할당의 개념으로 접근하면 좋다.

```javascript
// 선언과 동시에 할당
const person = {
  name: "jung",
  age: "25",
};

// const는 재할당이 금지됨
person = {
  name: "jung",
  age: "25",
};

// 값을 바꾸기 위해서 .으로 접근함.

person.name = "lee";
person.age = "20";

console.log(person);

// 배열은 아래와 같음
const person = [
  {
    name: "jung",
    age: "25",
  },
];

person.push({
  name: "jung",
  age: "25",
});

console.log(person);
```

### 전역 공간 최소화

전역 공간을 사용하지 말라 추천하는 경로

- 경험
- 누군가 혹은 js 생태계에서 지양
- 강의 혹은 책
- 회사 혹은 멘토
- Lint

전역 공간이 무엇일까? (전역 -> 최상위)

Global이라고도 하고 Window라고도 한다.

- window : 브라우저 환경에서 돌아감.
- global : Node 환경에서 돌아감.

```javascript
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
```

결론!

- 전역 공간을 더럽히지 않기
- 어디서나 접근이 가능하고 스코프 분리의 위험이 있음

해결

- 전역 변수 X(var)
- 지역 변수 O(let, const)
- window, global을 조작하지 않는다.
- IIFE, Module, clsure, scope를 나누는 방법 등

### 임시 변수 제거하기

특정 공간 스코프에서 전역변수처럼 활용되는 변수를 임시 변수라 칭함.

```javascript
function getElements() {
    // const로 선언했지만 함수가 커진다면, 함수 내부에서 봤을 때 전역 변수로 사용되고 있음.
    const result = {}; // 임시 객체

    title = document.querySelector('.title')
    text = document.querySelector('.text')
    value = document.querySelector('.value')

    /* 명확하게 변경 */
    const result = {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value')
    }; // 임시 객체

    /* 더 명확하게 변경 */
    return {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value')
    };
}

/*
두번째 사례 - date time을 다루는 유틸 함수
추가적인 스펙이 생긴다면 문제가 발생할 수 있음.
날짜에 대한 요구사항이 생겼을 때
- 함수 추가
- 함수 유지보수 수정

함수를 유지보수한다면 문제가 생길 수 있음.
-> 수십, 수백가지 사용 경로가 있을 수 있기 때문
*/
function getDateTime(targetDate) {
    /* 기존 코드
    let month = targetDate.getMonth();
    let day = targetDate.getDate();
    let hour = targetDate.Hours();

    month = month > 10 ? month : '0' + month;
    day = day > 10 ? day : '0' + day;
    hour = hour > 10 ? hour : '0' + hour;

    return {
        month, day, hour
    };
    */

    // 첫번째 수정
    const month = targetDate.getMonth();
    const day = targetDate.getDate();
    const hour = targetDate.Hours();

    return {
        month:month > 10 ? month : '0' + month,
        day:day > 10 ? day : '0' + day,
        hour: hour > 10 ? hour : '0' + hour
    };
}

// 함수 추가, 지속적인 추상화 가능함.
function getDateTime() {
    const currentDateTime = getDateTime(new Date())
    computedKrDate();

    return {
        month: computedKrDate(currentDateTime.month) + '분 전',
        day: currentDateTime.day + '',
        hour: currentDateTime.hour + ''
    }
}

// 또 다른 사례
function genRandomNumber(min, max) {
    // 함수는 단 하나의 역할만 하도록 짜야함.
    const randomNumber = Math.floor(Math.random() * (max + 1) + min);

    return randomNumber;
}

// 또 다른 사례 - 명령형에 가까운 함수
function getSomeValue(params) {
    let tempVal = '';

    for (let index = 0; index < array.length; index++) {
        temp = array[index];
        temp += array[index];
        temp -= array[index];
        temp *= array[index];
    }

    if(temp??) {
        tempVal = ??
    } else if (temp ??) {
        temp += ??
    }

    return temp;
}
```

임시 변수를 제거하자!

- 명령형으로 가득한 코드가 나옴.
- 어디서 어떻게 잘못되었는지 디버깅이 어려움.
- 추가적인 코드를 작성하고 싶은 유혹에 빠지기 쉬움.(ex: let temp...)

해결책!

- 함수를 나누기.
- 바로 반환하기.
- 고차함수(map, filter, reduce 등)
- 선언형 프로그래밍으로 바꿔보자!

### 호이스팅 주의!

```javascript
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
```

정리!

런타임시 선언이 최상단으로 끌어올려지는 것이 호이스팅.

문제 - 코드를 작성할 때 예측하지 못한 에러가 발생

해결책!

- var X -> let, const 지향
- 함수 조심 -> 함수 표현식을 사용 권장
