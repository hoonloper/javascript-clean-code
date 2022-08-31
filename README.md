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

### 타입 검사

```javascript
// typeof는 피연산자의 타입을 검사해 '문자열'로 반환해줌 - 함수형으로도 사용 가능
typeof "문자열";
typeof true;
typeof undefined;
typeof 123;
typeof Symbol();

/*
하나의 단점이 있음.
PRIMITIVE(원시값) vs REFERENCE(자료형) 
*/

// PRIMITIVE
typeof "문자열";
typeof true;
typeof undefined;
typeof 123;
typeof Symbol();

// REFERENCE
typeof function () {};
typeof class {};

typeof [];
typeof Date();
typeof {};

// REFERENCE 형식으로 만들면 typeof가 감지하지 못함.
const str = new String("문자열");
typeof str;

// null === object -> 자바스크립트에서 인정한 오류
typeof null;

// JS는 동적으로 변하는 언어이기에 타입도 동적으로 변함.

// instanceof 연산자는 객체의 프로토타입 체인을 검사
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: "poco",
  age: 99,
};

const poco = new Person("poco", 99);

poco instanceof Person; // true
p instanceof Person; // false

const arr = [];
const func = function () {};
const date = new Date();

// 결국 최상위에 Object 타입이 있어 검사하기 어렵다.
arr instanceof Array; // true
func instanceof Function; // true
date instanceof Date; // true

arr instanceof Object; // true
func instanceof Object; // true
date instanceof Object; // true

// 그래서 타입검사 방법이 또 있음.
Object.prototype.toString.call("");
Object.prototype.toString.call(new String());
Object.prototype.toString.call(arr);
Object.prototype.toString.call(date);
```

정리

- JS는 동적인 타입 -> 타입 검사 어려움 -> 상황에 맞는 타입 검사 방법과 주의를 찾아야함 -> 외우기는 힘듦
- Primitive vs reference -> typeof, instanceof가 있음 + Object.prototype.~~~

### undefined & null

```javascript
!null;
!!null;
null === false; // false
!null === true; // true
// 수학적으로 null -> 0으로 취급
null + 123;

// 선언했지만 값은 정의되지 않고 할당 X
let varb;
typeof varb; // undefined
undefined + 10; // NaN
!undefined; // true
undefined == null; // true
undefined === null; // false
!undefined === !null; // true
```

undefined, null -> 값이 없거나 정의되지 않은 즉, 명시적인 표현

undefined -> NaN
null -> 0

undefined -> type undefined
null -> object

### eqeq 줄이기

Equality -> == (느슨)

Strict equality -> === (엄격)

==을 이용해 비교하면 type casting이 발생해서 '1'과 1이 같다고 나온다.

```javascript
"1" == 1; // true
1 == true; // true
```

### 형변환 주의하기

```javascript
"1" == 1; // 느슨한 검사 -> 형 변환
1 == true;
0 == false;

// 암묵적 형변환
11 + "문자"; // '11 문자와 결합'
!!"문자열"; // true
!!""; // false

// 명시적으로 수정하자.
String(11 + "문자"); // '11 문자와 결합'
Boolean("문자열"); // true
Boolean(""); // false

parseInt("9.9999", 10); // 9
```

정리

- 사용자 -> 명시적인 변환(타입)
- JS -> 암묵적인 변환(타입)

즉, 명시적인 변환으로 예측하기 쉬운 코드로 작성하자.

### isNaN

IEEE 754 (부동소수점 방식) 채택

```javascript
// JS 최대 정수
Number.MAX_SAFE_INTEGER;

// JS 정수 검사
Number.isInteger;

// isNaN -> is Not a Number -> 숫자가 아니다.
typeof 123 === "number"; // true
typeof 123 !== "number"; // false
isNaN(123); // false -> 숫자가 숫자가 아니다.

// ES2015+
isNan(123 + "test"); // true
Number.isNaN(123 + "test"); // false

isNaN; // 느슨한 검사
Number.isNaN; // 엄격한 검사
```

### Min - Max

```javascript
/*
min - max

1. 최소값와 최대값을 다룬다.
2. 최소값와 최대값 포함 여부를 결정해야 함. (이상 - 초과 / 이하 - 미만) 
3. 혹은 네이밍에 최소값과 최대값 포함 여부를 포함한다.
*/

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MAX_AGE = 20;

function isAdult(age) {
  // 최소값, 최대값 (포함되는지 vs 안되는지)
  // 이상, 초과, vs 이하, 미만
  if (age >= 20) {
  }
}

// 최대, 최소 상수를 설정한다.
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);
```

### Begin - End

```javascript
function reservationDate(beginDate, endDate) {
  // ...some code
}

reservationDate("YYYY-MM-DD", "YYYY-MM-DD");
```

시작은 동일하나 끝은 다를 경우이다. (Ex : 숙소 예약 등)

### First - Last

```javascript
/*
first - last

포함된 양 끝을 의미한다.
부터 ~~~ 까지
*/

const students = ["에이", "비", "씨"];

function getStudents(firstStudent, lastStudent) {
  // ...some code
}

getStudents("에이", "씨");
```

### Prefix - Suffix

- Prefix - 접두사
- Suffix - 접미사

Prefix

- use~~~
- @~~~
- \_~~~
- $~~~

Suffix

- .entity
- .dto
- .controller
- .service
- s(복수), (단수)

Prefix와 Suffix는 일관성을 가질 수 있는 아주 좋은 예시이다.

### 매개변수의 순서가 경계!

```javascript
/*
1. 매개변수를 2개가 넘지 않도록 만든다.
2. arguments, rest parameter
3. 매개변수를 객체에 담아서 넘긴다.
4. 랩핑하는 함수
 */

// 객체로 받거나 전개 연산자 혹은 arg로 받는다.
function someFunc({ someArg1, someArg2 }) {}
function someFunc(...someArg) {}
function someFunc(someArg, someArg) {}

// 매개변수로 어느정도 유추 가능
genRandomNumber(1, 50);
getDates("2022-01-01", "2022-02-01");
genShuffleArray(1, 5);
```

### 값식문

문법 : 말의 구성 및 운용상의 규칙. 또는 그것을 연구하는 학문.

중요한 이유 - 개발자는 프로그래밍 언어를 사용하기 때문.

컴퓨터를 이해시키지 못하면 문법 에러를 일으킨다.

문법 에러 -> 장애 -> 서비스 마비까지...

```javascript
// This JSX:
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// Is transformed to this JS:
ReactDOM.render(
  React.createElement("div", { id: "msg" }, "Hello World!"),
  mountNode
);
```

```javascript
// 문을 잘못 입력한 경우
// This JSX:
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");

// 삼함연산자는 사용 가능
ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode);
```

```javascript
// 논리연산자 사용 가능
// 즉시 실행 함수 사용 가능
function ReactComponent() {
  return (
    <section>
      <h1>Color</h1>
      <h3>Name</h3>
      <p>{this.state.color || "white"}</p>
      <h3>Hex</h3>
      <p>
        {(() => {
          switch (this.state.color) {
            case "red":
              return "#FF0000";
            case "green":
              return "#00FF00";
            case "blue":
              return "#0000FF";
            default:
              return "#FFFFFF";
          }
        })()}
      </p>
    </section>
  );
}
```

```javascript
// 즉시 실행 함수로 감싸 포문으로 임시 변수에 값을 누적시켜 반환하는 안좋은 예
function ReactComponent() {
  return (
    <tbody>
      {
        // 수정전 코드
        (() => {
          const rows = [];

          for (let i = 0; i < objectRows.length; i++) {
            rows.push(<ObjectRow key={i} data={objectRows[i]} />);
          }
          return rows;
        })()
      }
      {
        // 수정후 코드, 값과 식만 들어간다.
        objectRows.map((obj, i) => (
          <ObjectRow key={i} data={objectRows[i]} />
        ))
      }
    </tbody>
  );
}
```

```javascript
function ReactComponent() {
  return (
    <div>
      {
        // 수정전 코드
        (() => {
          if (conditionOne) return <span>One</span>;
          if (conditionTwo) return <span>Two</span>;
          else conditionOne;
          return <span>Three</span>;
        })()
      }
      {
        // 수정후 코드
        conditionOne && <span>One</span>
      }
      {conditionTwo && <span>Two</span>}
      {conditionTwo && <span>Three</span>}
    </div>
  );
}
```

React에서 고차 함수를 활용해야 한다.

### 삼항연산자 다루기

삼항연산자 사용에 있어 일관성이 필요.

삼항연산자는 3개의 '피'연산자가 필요하며, 조건 ? 참(식) : 거짓(식)

```javascript
function example() {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

function example() {
  // 조건을 정의해본 후 케이스가 많다면 switch문을 고려한다.
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }

  const temp = condition1;
  condition2;
  condition3;

  switch (key) {
    case value:
      break;
    default:
      value4;
  }
}
```

```javascript
// 한번 감싸주며 가독성을 높여준다.
const example = condition1 ? (a === 0 ? "zero" : "positive") : "negative";
```

```javascript
// 삼항 연산자의 좋은 예시
const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : "이름없음";

  return `안녕하세요 ${name}`;
};
```

```javascript
// 좋지 않은 예
// 삼항연사자는 값 혹은 식을 작성해 주는 게 좋음
// 두 alert의 반환은 undefined이기 때문에 삼항연산자보다 if문을 작성해 주는 게 좋다고 봄
// 숏코딩 or if문 개인 취향
function alertMessage(isAdult) {
  isAdult ? alert("입장이 가능합니다.") : alert("입장이 불가능합니다.");

  if (isAdult) {
  } else {
  }
}

// 이런 예시도 있다.
function alertMessage(isAdult) {
  return isAdult ? "입장 가능" : "입장 불가능";
}
```

```javascript
const isAdult = age > 19 ? "yes" : "no";
```

### Truthy & Falsy

```javascript
if ("string".length > 0) {
}

if (!isNaN(10)) {
}

if (boolean === true) {
}

// 참이기 때문에 Truthy가 없어도 동작함
if ("string".length) {
}

if (10) {
}

if (boolean) {
}
```

##### 참 같은 값

```javascript
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
```

##### 거짓 같은 값

```javascript
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
```

```javascript
function printName(name) {
  if (name === undefined || name === null) {
    return "사람이 없네요";
  }

  // 수정한 코드
  if (!name) {
    return "사람이 없네요";
  }

  return "안녕하세요 " + name + "님";
}
```

```javascript
/**
 * Truthy (참 같은 값)
 */
function SomeComponent({ isShowHeader }) {
  return (
    <div>
      {isShowHeader ? <Header /> : null}
      <Body />
    </div>
  );
}

function SomeComponent({ content }) {
  return (
    <div>
      {content.length > 0 ? <MessageList messages={props.messages} /> : null}
    </div>
  );
}
```

### 단축 평가

```javascript
// AND
true && true && "도달 O";
true && false && "도달 X";

// OR
false || false || "도달 O";
true || true || "도달 X";
```

```javascript
function fetchData(state) {
  if (state.data) {
    return state.data;
  } else {
    return "Fetching...";
  }

  // 이렇게 사용 가능, OR 단축 평가
  return state.data || "Fetching...";
}
```

```javascript
function favoriteDog(someDog) {
  let favoriteDog;
  if (someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = "냐옹";
  }

  return favoriteDog + " 입니다.";

  // 이렇게 사용 가능
  return (someDog || "냐옹") + "입니다.";
}
```

```javascript
const getActiveUserName = (user, isLogin) => {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return "이름없음";
      }
    }
  }

  if (isLogin && user) {
    if (user.name) {
      return user.name || "이름없음";
    }
  }
};
```

### else if & else 피하기

else if를 이어서 사용하기보다 else와 if를 분리해주고 조건식이 많아지면 switch 문을 활용하자.

```javascript
const x = 1;

if (x >= 0) {
  ("x는 0과 같거나 크다");
} else if (x > 0) {
  ("x는 0보다 크다");
} else {
  ("Else");
}

if (x >= 0) {
  ("x는 0과 같거나 크다");
} else {
  if (x > 0) {
    ("x는 0보다 크다");
  }
}
```

### else 피하기

```javascript
function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return "이름없음";
  }

  // 이렇게 사용 가능
  if (user.name) {
    return user.name;
  }

  return "이름없음";
}
```

```javascript
// age가 20 미만시 특수 함수 실행
function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  } else {
    return "안녕하세요.";
  }

  // 인사는 어떠한 경우에도 출력해야 하기에 else 지우기
  if (user.age < 20) {
    report(user);
  }

  return "안녕하세요.";
}
```

### Early Return

```javascript
function loginService(isLogin, user) {
  if (!isLogin) {
    if (checkToken()) {
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();

        return "로그인 성공";
      }
    } else {
      throw new Error("No Token");
    }
  }
}

// 수정한 코드
function loginService(isLogin, user) {
  // Early Return, 함수 미리 종료
  if (isLogin) {
    return;
  }

  if (checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  // 실행 부분이 명확해짐
  login();
}

function login() {
  refreshToken();

  return "로그인 성공";
}
```

```javascript
function 오늘하루(condition, weather, isJob) {
  if (condition === "GOOD") {
    공부();
    게임();
    유튜브보기();

    if (weather === "GOOD") {
      운동();
      빨래();
    }

    if (isJob === "GOOD") {
      야간업무();
      조기취침();
    }
  }
}

// 수정후 코드
function 오늘하루(condition, weather, isJob) {
  // 의존성에 따라 분기를 바로 뺄지 아니면 하나의 분기에서 모든 로직을 처리할지 판단해야 한다.
  // 수많은 Early return을 만드는 것은 좋지 않으나 하나의 조건에만 의존성이 걸려있을 때 사용하면 명시적으로 변할 수 있다
  if (condition !== "GOOD") {
    return;
  }

  공부();
  게임();
  유튜브보기();

  if (weather === "GOOD") {
    return;
  }

  운동();
  빨래();

  if (isJob === "GOOD") {
    return;
  }

  야간업무();
  조기취침();
}
```

### 부정조건문 지양하기

- 생각을 여러번 해야 할 수 있다.
- 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킨다.

부정조건문 사용하는 경우

- Early Return
- Form Validation
- 보안 혹은 검사하는 로직

```javascript
if (!isNaN(3)) {
  console.log("숫자입니다");
}

function isNumber(num) {
  return !Number.isNaN(num) && typeof num === "number";
}

if (isNumber(3)) {
  console.log("숫자입니다");
}
```

```javascript
// 추천하지 않는 방법
const isCondition = true;
const isNotCondition = false;

if (!isCondition) {
  console.log("거짓인 경우에만 실행");
}

if (!isNotCondition) {
  console.log("거짓인 경우에만 실행");
}
```

### Default case 고려하기

기본값을 정해놓는 경우를 생각해야 함.

```javascript
function sum(x, y) {
  return x + y;
}

// 디폴트값 추가
function sum(x, y) {
  x = x || 1;
  y = y || 1;

  return x + y;
}

// 매개변수에 추가
function sum(x = 1, y = 1) {
  return x + y;
}

sum(100, 200);
```

```javascript
function createElement(type, height, width) {
  const element = document.createElement(type);

  element.style.height = height;
  element.style.width = width;

  return element;
}

// div를 기본으로 사용하고 싶을 때
function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = height || 100;
  element.style.width = width || 100;

  return element;
}

createElement();
```

```javascript
function registerDay(userInputDay) {
  switch (userInputDay) {
    case "월요일":
    case "화요일":
    case "수요일":
    case "목요일":
    case "금요일":
    case "토요일":
    case "일요일":
    default:
      throw Error("");
  }
}
registerDay("월ㄹ요일"); // 오타 입력의 경우를 생각해서 처리해줘야 함
```

```javascript
// 만들어져있는 함수에 기본값 넣기
function safeParseInt(number, radix) {
  return parseInt(number, radix || 10);
}
```

### 명시적인 연산자 사용 지향하기

'()'를 통해 연산자 우선순위를 표현해주자.

- 몸무게 % (신장 \* 신장)

예측 가능하고 디버깅 하기 쉽다.

```javascript
let number;

function increment() {
  number--;
  --number;

  number = number - 1;
}
function increment() {
  number++;
  ++number;

  number = number + 1;
}
```

### Nullish coalescing operator

널 병합 연산자를 사용시에 null, undefined만 평가한다는 것을 꼭 기억하고 사용하자.

```javascript
function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = (height || 10) + "px";
  element.style.width = (width || 10) + "px";

  return element;
}

// 0은 falsy로 처리되기 때문에 OR에서 걸리게 된다.
createElement("div", 0, 0);

// ?? 연산자는 null or undefined만 평가한다. 널 병합 연산자
function createElement(type, height, width) {
  const element = document.createElement(type ?? "div");

  element.style.height = (height ?? 10) + "px";
  element.style.width = (width ?? 10) + "px";

  return element;
}

createElement("div", 0, 0);
```

```javascript
function helloWorld(message) {
  // Early Return을 사용할 때도 널 병합 연산자를 고려해서 넣어야함.
  if (!message) {
    return "Hello! World";
  }

  return "Hello!" + (message || "World");
}

function helloWorld(message) {
  return "Hello!" + (message || "World");
}

helloWorld(0);
```

```javascript
null || undefined ?? "foo"; // 에러 발생. 사람들의 잦은 실수로 언어에서 규제함.
(null || undefined) ?? "foo"; // 해결. OR 연산자는 우선순위가 낮음
```

### 드모르간의 법칙

- true is not true
- false is not false

```javascript
const isValidUser = false;
const isValidToken = false;

// 로그인 성공을 실패로 바꾸는 과정
if (isValidToken && isValidUser) {
  console.log("로그인 성공!");
}
if (!(isValidToken && isValidUser)) {
  console.log("로그인 실패!");
}
if (!isValidToken || !isValidUser) {
  console.log("로그인 실패!");
}
```

### JavaScript의 배열은 객체다.

```javascript
const arr = [1, 2, 3];

arr[3] = "test";
arr["property"] = "string value";
arr["obj"] = {};
arr[{}] = [1, 2, 3];
arr["func"] = function () {
  return "hello";
};

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// console => 1 2 3

console.log(arr);
// console [1, 2, 3, 'test', property: 'string value', obj: {}, '[object Object]': [1, 2, 3], func: [F]]
```

```javascript
const arr = [1, 2, 3];

if (arr.length) {
  console.log("배열 확인");
}

if (typeof arr === "object") {
  console.log("배열 확인");
}

// 배열 검사
Array.isArray(arr);
```

### Array.length

- 자바스크립트의 배열은 길이를 보장하지 못함.
- 배열 길이를 다룰 때는 주의해야 함.

```javascript
const arr = [1, 2, 3];

arr.length = 10;
// [1, 2, 3, , , , , , , ]
```

```javascript
const arr = [1, 2, 3];

arr[9] = 10;
// [1, 2, 3, , , , , , , 10]
```

```javascript
Array.prototype.clear = function () {
  this.length = 0;
};

function clearArray(array) {
  array.length = 0;

  return array;
}

const arr = [1, 2, 3];
arr.clear();
arr.length; // 0

clearArray(arr); // []
```

### 배열 요소에 접근하기

```javascript
function operateTime(input operators, is) {
  inputs[0].split('').forEach(num => {
    cy.get('.digit').contains(num).click();
  })

  inputs[1].split('').forEach(num => {
    cy.get('.digit').contains(num).click();
  })
}

// 예시
function operateTime(input, operators, is) {
  // 배열 구조분해할당으로 명시적으로 작성
  const [firstInput, secondInput] = inputs;

  firstInput.split('').forEach(num => {
    cy.get('.digit').contains(num).click();
  })

  secondInput.split('').forEach(num => {
    cy.get('.digit').contains(num).click();
  })
}

// 예시 2, 매개변수 구조분해할당
function operateTime([firstInput, secondInput], operators, is) {
  firstInput.split('').forEach(num => {
    // ~~~
  })

  secondInput.split('').forEach(num => {
    // ~~~
  })
}
```

```javascript
function clickGroupButton() {
  const confirmButton = document.getElementsByTagName("button")[0];
  const cancelButton = document.getElementsByTagName("button")[1];
  const resetButton = document.getElementsByTagName("button")[2];
}

// 예시
function clickGroupButton() {
  const [confirmButton, cancelButton, resetButton] =
    document.getElementsByTagName("button");
}
```

```javascript
function formatDate(targetDate) {
  const date = targetDate.toISOString().split("T")[0];
  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}

// 예시
function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split("T");
  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}

// 예시 2
function head(arr) {
  return arr[0] ?? "";
}

function formatDate(targetDate) {
  const date = head(targetDate.toISOString().split("T"));
  const [year, month, day] = date.split("-");

  return `${year}년 ${month}월 ${day}일`;
}
```

### 유사 배열 객체

```javascript
const arrayLikeObject = {
  0: "HELLO",
  1: "WORLD",
  length: 2,
};

const arr = Array.from(arrayLikeObject); // 객체를 배열로 바꿔줌
Array.isArray(arr); // true
```

```javascript
// arguments는 대표적인 유사 배열 객체
function generatePriceList() {
  for (let index = 0; index < array.length; index++) {
    const element = arguments[index];

    console.log(element);
  }

  return arguments.map((arg) => arg + "원"); // 유사 배열 객체이기 때문에 배열 메소드 에러 발생
  return Array.from(arguments).map((arg) => arg + "원"); // 배열로 변환 후 사용
}

generatePriceList(100, 200, 300, 400, 500);
```

### 불변성 - immutable

불변성 지키기

- 배열을 복사한다.
- 새로운 배열을 반환하는 메서드들을 활용한다.

```javascript
const originArray = ["123", "456", "789"];
const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

// 원본 배열에 지장을 주기 때문에 새로운 배열로 복사를 해야한다.
// map(), filter() 등 고차 함수 사용
```

### for 문 배열 고차 함수로 리팩터링

```javascript
// 원화
const price = ["2000", "1000", "3000", "5000", "4000"];

function getWonPrice(priceList) {
  let temp = [];

  for (let i = 0; i < priceList.length; i++) {
    temp.push(priceList[i] + "원");
  }

  return temp;
}

// 수정후 코드
const suffixWon = (price) => price + "원";

function getWonPrice(priceList) {
  return priceList.map(suffixWon);
}

// 수정후 코드 + 조건
const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  return priceList.map(suffixWon);
}
```

### 배열 메서드 체이닝 활용하기

```javascript
// 수정후 코드 + 조건 + 정렬
const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  const sortList = isOverList.sort(ascendingList);
  return priceList.map(suffixWon);
}

// 메서드 체이닝 활용
function getWonPrice(priceList) {
  return priceList
    .filter(isOverOneThousand) // 필터
    .sort(ascendingList) // 정렬
    .map(suffixWon); // 요소 정리
}
```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
