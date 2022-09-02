## ✨ Clean Code in JavaScript !!

> 클린 코드를 공부하며 습득한 지식들과 클린 코드 작성에 대한 방향성에 대해 정리한 README 입니다.
> 저보다 뛰어난 분들이 많다고 생각하며, 이 글을 읽다가 문제가 있거나 의견이 있으면 언제든 연락 주시기 바랍니다.

```
💡 클린 코드 작성에 대해서만 다루다보니 내용중 지식을 요구하는 부분이 있으면 검색해 보시는 걸 추천합니다 :)
```

## 목차

1. [습관들이기](#습관들이기)
2. [변수](#변수)

## 습관들이기

#### 사례를 통해 파악하자!

개발자는 많지만 같은 사람은 없습니다. 그렇기에 모든 개발자들의 개발 방식 혹은 노하우가 같다고 할 수 없습니다. 그러나 모든 개발자가 알아볼 수 있는 코드를 작성한다면 어떨까요? 코드의 가독성은 물론 좋을 것이고 작성한 코드를 유지보수하는 일도 어렵지 않을 것입니다.

그래서 상황에 따라 가독성이 좋고 깔끔한 코드 즉, **클린한 코드**를 작성할 수 있는 능력을 길러야 합니다.

#### 의식적인 수련을 통해 단련하자!

처음부터 누구나 좋은 코드를 작성할 수 없습니다. 저 또한 공부를 하는 입장이고 클린한 코드 작성에 있어 서툴 뿐입니다. 그러나 항상 클린한 코드를 작성하려 노력하고 있습니다. 여러분들도 개발할 때 항상 클린 코드를 의식하면서 개발하다보면 어느새 성장해 있는 자신의 모습을 볼 수 있을 것입니다.

#### 항상 의견을 구하자!

개발을 하다보면 작성한 코드가 정말 잘 작성된 코드인지 의문이 들 때가 많습니다. 그런 생각이 든다면 열린 마음으로 지인들에게 물어보세요! 다른 개발자의 관점에서 볼 때 더 좋은 아이디어가 나오는 경우가 많이 있습니다.

## 변수

#### var를 지양하자

let과 const는 ES2015부터 생겼습니다. let과 const가 없던 ES2015 이전에는 모두 var를 사용했고 let과 const는 var의 업그레이드 문법입니다. 그래서 오래전에 개발된 코드들의 경우 var로 작성된 레거시 코드들이 있을 수 있으며, var를 삭제할 경우 var로 개발된 모든 서버들이 다운될 것입니다.

_JavaScript에서 스코프가 무엇이고, 어떤 역할을 하는지 공부하고 보면 더욱 이해하기 편합니다._

- var - 함수 스코프를 가집니다.
- let, const - 블록 스코프를 가집니다. + TDZ

즉, var보다 let과 const가 안전한 코드를 작성할 수 있게 도와줌.

```javascript
// var는 재할당뿐만 아니라 재선언도 가능합니다.
var name = "이름";
var name = "이름2";
var name = "이름3";
var name = "이름3";

console.log(name); // 이름3

// let은 이미 선언을 했기 때문에 재선언이 불가능하지만 재할당이 가능합니다.
let name = "이름";

let name; // Error, 재선언
name = "hoonloper"; // hoonloper, 재할당

// const는 재선언과 재할당 모두 불가능하다. 즉 상수이다.
const name = "이름";

const name;// Error, 재선언
name = "hoonloper"; // Error, 재할당
```

#### function scope & block scope

함수 스코프와 블록 스코프에 대해 알아봅시다.

```javascript
var global = "전역";

// var는 함수 스코프이기에 if문 스코프에 해당되지 않아 값이 덮어씌워집니다.
if (global === "전역") {
  var global = "지역 변수";
  console.log(global); // 지역 변수
}

// 그래서 전역 변수까지 영향을 줍니다.
console.log(global); // 지역 변수

/* ------------------------- */

let global = "전역";

// let은 블록 스코프이기 때문에 if문에서 블록 스코프가 적용됩니다.
if (global === "전역") {
  let global = "지역 변수";
  console.log(global); // 지역 변수
}

// 지역 변수가 전역 변수에 영향을 끼치지 않습니다.
console.log(global); // 전역

/* ------------------------- */

const global = "전역";

// const도 let과 동일합니다.
if (global === "전역") {
  const global = "지역 변수";
  console.log(global); // 지역 변수
}

console.log(global); // 전역
```

#### let보다 cont를 사용하면 좋은 이유

변수안에 많은 것을 담을 수 있다보니 재할당의 개념으로 접근하면 이해가 쉽습니다.

```javascript
// let과 const는 선언과 동시에 할당합니다.(호이스팅의 개념을 알면 좋습니다.)
const person = {
  name: "jung",
  age: 25,
};

// Error, const는 재할당이 금지됨
person = {
  name: "jung",
  age: 25,
};

// 객체의 값을 바꾸기 위해서 .으로 접근합니다.
person.name = "lee";
person.age = 20;

console.log(person);

// 배열은 아래와 같습니다.
const person = [
  {
    name: "jung",
    age: 25,
  },
];

// 배열의 값을 변경하는 방법 2가지.
person[0] = {
  name: "yong",
  age: 30,
};

person[0].name = "yong";
person[0].age = 30;

// 새로운 값 추가
person.push({
  name: "jung",
  age: 25,
});

// 이 외에도 pop(), shift() 등이 있습니다. (찾아보기!)
```

#### 전역 공간 최소화

실무든 팀프로젝트든 누군가에게 전역 공간을 최소화 하라는 얘기를 들어본 적 있으실 겁니다. 보통 아래에 해당하겠죠!

- 경험
- 누군가 작성해 놓은 blog 혹은 js 생태계에서 지양
- 온라인 강의 혹은 서적
- 사수 및 멘토

전역 공간이 무엇일까요? Global이라고도 하고 Window라고도 합니다.

- window : 브라우저 환경에서 돌아감.
- global : Node 환경에서 돌아감.

```javascript
// global.js 1
var globalVar = "global";

// 전역 초기화
var setTimeout = "setTimeout";

// global.js 2
console.log(globalVar); // global

// 전역 객체의 딜레이를 주는 함수
window.setTimeout(() => {
  console.log("1초");
}, 1000);

/*
전역 공간을 활용하면 전역 공간을 사용하는 코드끼리 겹칠 우려가 있습니다.

전역 공간에서 만들어진 함수 이름을 전역으로 설정하면 해당 메서드에 대입이 되어 정상 동작을 하지 못하는 상황을 만들 수 있습니다.
*/

// 전역 공간을 더럽히는 사례
const array = [10, 20, 30];

// index는 전역 공간에 저장됩니다.(var)
for (var index = 0; index < array.length; index++) {
  // ... 코드
}
```

결론!

- 전역 공간을 최대한 지양합니다.
- 어디서나 접근이 가능하고 스코프 분리의 위험이 있습니다.

해결

- 전역 변수 X(var)
- 지역 변수 O(let, const)
- window, global을 조작하지 않습니다.
- IIFE, Module, clsure, scope를 나누는 방법 등

#### 임시 변수 제거하기

특정 공간 스코프에서 전역변수처럼 활용되는 변수를 임시 변수라 칭하겠습니다. 예시는 아래와 같습니다.

```javascript
function getElements() {
  // const로 선언했지만 함수 내부에서 봤을 때 전역 변수로 사용되고 있습니다.
  const result = {}; // 임시 객체

  result.title = "제목";
  result.text = "내용";
  result.value = "값";

  /* 명확하게 변경했지만 이것도 임시 객체로 볼 수 있습니다. */
  const result = {
    title: "제목",
    text: "내용",
    value: "값",
  };

  /* 더 명확하게 변경, 바로 리턴해주는 형태입니다. */
  return {
    title: "제목",
    text: "내용",
    value: "값",
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
  // 초기 코드
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month > 10 ? month : "0" + month;
  day = day > 10 ? day : "0" + day;
  hour = hour > 10 ? hour : "0" + hour;

  return {
    month,
    day,
    hour,
  };

  // 수정후 코드
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month: month > 10 ? month : "0" + month,
    day: day > 10 ? day : "0" + day,
    hour: hour > 10 ? hour : "0" + hour,
  };
}

// 함수 추가, 지속적인 추상화가 가능합니다.
function getDateTime() {
  const currentDateTime = getDateTime(new Date());
  computedKrDate();

  return {
    month: computedKrDate(currentDateTime.month) + "분 전",
    day: currentDateTime.day + "",
    hour: currentDateTime.hour + "",
  };
}

// 또 다른 사례
function genRandomNumber(min, max) {
  // 함수는 단 하나의 역할만 하도록 작성해야 합니다.
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}

// 또 다른 사례 - 명령형에 가까운 함수
function getSomeValue(params) {
  let tempVal = "";

  // 로직 내에서 temp의 값이 자주 바뀝니다.
  for (let index = 0; index < array.length; index++) {
    temp = array[index];
    temp += array[index];
    temp -= array[index];
    temp *= array[index];
  }

  if (temp) {
    tempVal = temp;
  } else if (temp) {
    temp += tempVal;
  }

  return temp;
}
```

임시 변수를 제거하자!

- 명령형으로 가득한 코드가 나옵니다.
- 어디서 어떻게 잘못되었는지 에러 트래킹이 어렵습니다.
- 추가적인 코드를 작성하고 싶은 유혹에 빠지기 쉽습니다.(ex: temp 값의 변경...)

해결책!

- 함수를 최대한 쪼갭니다.
- 바로 return 합니다.
- 고차함수(map, filter, reduce 등)를 사용합니다.
- 함수형 프로그래밍으로 바꿔보자!

#### 호이스팅 주의!

```javascript
/*
호이스팅은 선언과 할당이 분리됩니다.
런타임 시기 즉, 동작할 때를 의미합니다.
코드를 작성할 때는 스코프를 예상하는데 런타임에서는 예상대로 되지 않는 경우가 있습니다.
*/

var global = 0;

function outer() {
	// 선언과 할당이 분리된 상황입니다.
	console.log(global); // undefined

	var global = 5;

	function inner() {
		var global = 10;
		console.log(global); // 10
	}

	inner();

	global = 1;

	console.log(global); '' 1
}

outer();


// 또 다른 사례
function duplicatedVar() {
	var a;

	console.log(a); // undefined

	var a = 100;

	console.log(a); // 100
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
var 변수 선언 -> 호이스팅 됩니다.
function으로 var 변수명과 동일하게 선언 -> 기존 호이스팅된 var 변수에 덮어씌웁니다.
var 변수에 값까지 할당하게 된다면 정상적으로 분리가 됩니다.

즉, 함수 선언시 const를 활용해 선언하는 방법을 추천합니다.
*/

// '함수 선언(표현)식'
const sum = function () {
	return 1 + 2;
}
```

정리!
런타임시 선언이 최상단으로 끌어올려지는 것이 호이스팅.

문제 - 코드를 작성할 때 예측하지 못한 에러가 발생

해결책!

- var X -> let, const 지향
- 함수 조심 -> 함수 표현식을 사용 권장

#### 타입 검사

```javascript
// typeof는 피연산자의 타입을 검사해 '문자열'로 반환해줍니다. - 함수형으로도 사용 가능합니다.
typeof "문자열";
typeof true;
typeof undefined;
typeof 123;
typeof Symbol();

/*
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

typeof []; // object
typeof Date(); // string
typeof {}; // object

// REFERENCE 형식으로 만들면 typeof가 감지하지 못합니다.
const str = new String("문자열");
typeof str; // object

typeof null; // null === object -> 자바스크립트에서 인정한 오류입니다.

// JS는 동적으로 변하는 언어이기에 타입도 동적으로 변함.
// instanceof 연산자는 객체의 프로토타입 체인을 검사
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const personObj = {
  name: "jung",
  age: 25,
};
const person = new Person("jung", 25);

person instanceof Person; // true
personObj instanceof Person; // false

/* ----------------------------- */

const arr = [];
const func = function () {};
const date = new Date();

// 결국 최상위에 Object 타입이 있어 검사하기 어렵습니다.
arr instanceof Array; // true
func instanceof Function; // true
date instanceof Date; // true

arr instanceof Object; // true
func instanceof Object; // true
date instanceof Object; // true

// 그래서 타입검사 방법이 또 있습니다.
Object.prototype.toString.call("");
Object.prototype.toString.call(new String());
Object.prototype.toString.call(arr);
Object.prototype.toString.call(date);
```

정리

- JS는 동적인 언어라 타입도 동적입니다.
- 그래서 타입 검사가 어렵습니다.
- 상황에 맞는 타입 검사 방법과 주의를 찾아야 합니다. (외우기는 힘들어요)
- Primitive vs reference ->
  - typeof, instanceof 등 타입 검사 방법이 있습니다.
  - - Object.prototype.~~~

#### undefined & null

```javascript
!null;
!!null;
null === false; // false
!null === true; // true
// 수학적으로 null -> 0으로 취급

null + 123; // 123

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

#### eqeq 줄이기

- Equality -> == (느슨)
- Strict equality -> === (엄격)

== 을 이용해 비교하면 type casting이 발생해서 '1'과 1이 같다고 나옵니다.

```javascript
"1" == 1; // true
1 == true; // true
```

#### 형변환 주의하기

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

즉, 명시적인 변환으로 예측하기 쉬운 코드로 작성하는 게 좋습니다.

#### isNaN

IEEE 754 (부동소수점 방식) 채택됐습니다.

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

#### Min - Max

```javascript
/*
min - max
1. 최소값와 최대값을 다룹니다.
2. 최소값와 최대값 포함 여부를 결정해야 합니다. (이상 - 초과 / 이하 - 미만)
3. 혹은 네이밍에 최소값과 최대값 포함 여부를 포함합니다.
*/

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 상수
const MAX_AGE = 20;

function isAdult(age) {
  // 최소값, 최대값 (포함되는지 vs 안되는지)
  // 이상, 초과, vs 이하, 미만
  if (age >= 20) {
    // ... 코드
  }
}

// 최대, 최소 상수를 설정한다.
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);
```

#### Begin - End

```javascript
// 매개변수를 통해 함수에 어떤 인자를 넣어야 하는지 파악 가능합니다.
function reservationDate(beginDate, endDate) {
  // ... 코드
}

reservationDate("YYYY-MM-DD", "YYYY-MM-DD");
```

시작은 동일하나 끝은 다를 경우이다. (Ex : 숙소 예약 등)

#### First - Last

```javascript
/*
first - last
포함된 양 끝을 의미합니다.
부터 ~~~ 까지
*/

const students = ["에이", "비", "씨"];

function getStudents(firstStudent, lastStudent) {
  // ... 코드
}

getStudents("에이", "씨");
```

#### Prefix - Suffix

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

**Prefix와 Suffix는 일관성을 가질 수 있는 아주 좋은 예시입니다.**

#### 매개변수의 순서가 경계!

```javascript
/*
1. 매개변수를 2개가 넘지 않도록 만듭니다.
2. arguments, rest parameter
3. 매개변수를 객체에 담아서 넘깁니다.
4. 랩핑하는 함수
*/

// 객체로 받거나 전개 연산자 혹은 arg로 받는다.
function someFunc({ someArg1, someArg2 }) {}
function someFunc(...someArg) {}
function someFunc(someArg, someArg) {}

// 매개변수로 어느정도 함수가 어떤 기능을 하는지 유추 가능합니다.
genRandomNumber(1, 50);
getDates("2022-01-01", "2022-02-01");
genShuffleArray(1, 5);
```

#### 값식문

문법 : 말의 구성 및 운용상의 규칙. 또는 그것을 연구하는 학문

중요한 이유 - 개발자는 프로그래밍 언어를 사용하기 때문입니다. 컴퓨터를 이해시키지 못하면 문법 에러를 일으킬 수 밖에 없습니다.

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
// 논리연산자 사용 가능합니다.
// 즉시 실행 함수 사용 가능합니다.
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
// 즉시 실행 함수로 감싸 포문으로 임시 변수에 값을 누적시켜 반환하는 안좋은 예시입니다.
function ReactComponent() {
  return (
    <tbody>
      {
        // 기존 코드
        (() => {
          const rows = [];

          for (let i = 0; i < objectRows.length; i++) {
            rows.push(<ObjectRow key={i} data={objectRows[i]} />);
          }

          return rows;
        })()
      }

      {
        // 수정후 코드, 값과 식만 들어갑니다.
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

React에서 고차 함수를 활용해야 합니다.

#### 삼항연산자 다루기

삼항연산자 사용에 있어 일관성이 필요합니다. 그리고 삼항연산자는 3개의 '피'연산자가 필요하며, 조건 ? 참(식) : 거짓(식) 으로 이루어져 있습니다.

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

  switch (temp) {
    case condition: // condition1~3 경우
      return "conditionValue"; // 컨디션 값
    default:
      value4; // 예외
  }
}
```

```javascript
// 우선 순위는 한번 감싸주며 가독성을 높여줍니다.
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
// 삼항연사자는 값 혹은 식을 작성해 주는 게 좋습니다.
// 두 alert의 반환은 undefined이기 때문에 삼항연산자보다 if문을 작성해 주는 게 좋다고 봅니다.
// 숏코딩 or if문 개인 취향~

function alertMessage(isAdult) {
  isAdult ? alert("입장이 가능합니다.") : alert("입장이 불가능합니다.");

  if (isAdult) {
    // ... 코드
  } else {
    // ... 코드
  }
}

// 이런 예시도 있습니다.
function alertMessage(isAdult) {
  return isAdult ? "입장 가능" : "입장 불가능";
}
```

#### Truthy & Falsy

```javascript
if ("string".length > 0)
if (!isNaN(10))
if (boolean === true)

// 참이기 때문에 Truthy가 없어도 동작함
if ("string".length)
if (10)
if (boolean)
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

  return "안녕하세요 " + name + "님";
}

// 수정한 코드
function printName(name) {
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
function example({ isLogin }) {
  return isLogin ? "성공" : "실패";
}

function example({ content }) {
  return content.length > 0 ? content : null;
}
```

#### 단축 평가

```javascript
// AND
true && true && "도달 O";
true && false && "도달 X";

// OR
false || false || "도달 O";
true || true || "도달 X";
```

```javascript
function userData(user) {
  if (user.name) {
    return user.name;
  } else {
    return "X";
  }

  // 이렇게 사용 가능, OR 단축 평가
  return user.name || "X";
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

  // 수정후 코드
  if (isLogin && user) {
    if (user.name) {
      return user.name || "이름없음";
    }
  }
};
```

#### else if & else 피하기

else if를 이어서 사용하기보다 else와 if를 분리해주고 조건식이 많아지면 switch 문을 활용합니다.

else if는 결국 또 다른 if문을 사용하는 거니 두 개의 if로 분리해 주는 것도 좋은 방법입니다.

```javascript
const x = 1;

if (x >= 0) {
  return "x는 0과 같거나 크다";
} else if (x > 0) {
  return "x는 0보다 크다";
} else {
  return "Else";
}

if (x >= 0) {
  return "x는 0과 같거나 크다";
} else {
  if (x > 0) {
    return "x는 0보다 크다";
  }
}
```

#### else 피하기

else의 경우 if 다음에 무조건 동작하니 생략해도 좋습니다.

하지만, 반환이 아닌 데이터 가공에 있어서 A 또는 B 경우의 데이터가 필요하다면 else를 붙여 동작을 하지 않도록 설정해줘야 합니다.

```javascript
function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return "이름없음";
  }

  // 이렇게 사용 가능합니다.
  if (user.name) {
    return user.name;
  }

  return "이름없음";

  // 주의. 이런 경우에는 yh 이후 new name이 입력되어 의도한 데이터가 저장되지 않을 수 있습니다.
  if (user.name) {
    user.name = "yh";
  }

  user.name = "new name";
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

#### Early Return

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

// 수정후 코드
function loginService(isLogin, user) {
  // Early Return, 함수 미리 종료 분기 처리입니다.
  if (isLogin) {
    return;
  }

  if (checkToken()) {
    throw new Error("No Token");
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  // 실행 부분이 명확해집니다.
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
  // 의존성에 따라 분기를 바로 뺄지 아니면 하나의 분기에서 모든 로직을 처리할지 판단해야 합니다.
  // 수많은 Early return을 만드는 것은 좋지 않으나 하나의 조건에만 의존성이 걸려있을 때 사용하면 명시적으로 변할 수 있습니다.
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

#### 부정조건문 지양하기

- 생각을 여러번 해야 할 수 있습니다.
- 프로그래밍 언어 자체로 if문이 처음부터 오고 true부터 실행시킵니다.

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

#### Default case 고려하기

기본값을 정해놓는 경우를 생각해야 합니다.

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

// default 'div' 지정
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
      return;
    case "화요일":
      return;
    case "수요일":
      return;
    case "목요일":
      return;
    case "금요일":
      return;
    case "토요일":
      return;
    case "일요일":
      return;
    default:
      throw Error("");
  }
}

registerDay("월ㄹ요일"); // 오타 입력의 경우를 생각해서 처리해줘야 합니다.
```

```javascript
// parseInt 함수를 또 하나의 함수로 만들어 빈 값이 들어가도 기본값으로 고정해놓는 함수입니다.
function safeParseInt(number, radix) {
  return parseInt(number, radix || 10);
}
```

#### 명시적인 연산자 사용 지향하기

'()'를 통해 연산자 우선 순위를 표현해줍니다.

- ex 몸무게 % (신장 \* 신장)

우선 순위를 표현하면 예측 가능하고 디버깅 하기 쉽습니다.

```javascript
let number;

function increment() {
  number--;
  --number;

  // 풀어서 사용해주는 게 가독성이 좋습니다.
  number = number - 1;
}

function increment() {
  number++;
  ++number;

  // 풀어서 사용해주는 게 가독성이 좋습니다.
  number = number + 1;
}
```

#### Nullish coalescing operator

널 병합 연산자를 사용시에 null, undefined만 평가한다는 것을 꼭 기억하고 사용합시다.

```javascript
function createElement(type, height, width) {
  const element = document.createElement(type || "div");

  element.style.height = (height || 10) + "px";
  element.style.width = (width || 10) + "px";

  return element;
}

// 0은 falsy로 처리되기 때문에 OR에서 걸리게 됩니다.
createElement("div", 0, 0);

// ?? 연산자는 null or undefined만 평가합니다. 널 병합 연산자

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
  // Early Return을 사용할 때도 널 병합 연산자를 고려해서 넣어야 합니다.
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

#### 드모르간의 법칙

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

#### JavaScript의 배열은 객체입니다.

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
// console => [1, 2, 3, 'test', property: 'string value', obj: {}, '[object Object]': [1, 2, 3], func: [F]]
```

```javascript
const arr = [1, 2, 3];

if (arr.length) {
  console.log("배열 확인");
}

if (typeof arr === "object") {
  console.log("배열 확인");
}

// 배열 검사 메서드
Array.isArray(arr);
```

#### Array.length

- 자바스크립트의 배열은 길이를 보장하지 못합니다.

- 배열 길이를 다룰 때는 주의해야 합니다.

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

#### 배열 요소에 접근하기

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
  // 배열 구조분해할당으로 명시적으로 작성합니다.
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
    // ... 코드
  })

  secondInput.split('').forEach(num => {
    // ... 코드
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

#### 유사 배열 객체

```javascript
const arrayLikeObject = {
  0: "HELLO",
  1: "WORLD",
  length: 2,
};

const arr = Array.from(arrayLikeObject); // 객체를 배열로 바꿔줍니다.

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

#### 불변성 - immutable

불변성 지키기

- 배열을 복사합니다.
- 새로운 배열을 반환하는 메서드들을 활용합니다.

```javascript
const originArray = ["123", "456", "789"];
const newArray = originArray;

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

// 원본 배열에 지장을 주기 때문에 새로운 배열로 복사를 해야합니다.
// map(), filter() 등 고차 함수를 사용합니다.
```

#### for문 배열 고차 함수로 리팩터링

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

#### 배열 메서드 체이닝 활용하기

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

### map vs forEach

언어의 명세에 따라 상황에 맞춰 사용해야 합니다.

```javascript
const price = ["2000", "1000", "3000", "5000", "4000"];

// 함수를 실행
const newPricesForEach = prices.forEach((price) => price + "원");

// 새로운 배열을 반환
const newPricesMap = prices.map((price) => price + "원");
```

#### continue & break

고차함수에서 continue & break 사용하는 방법

- throw 에러를 발생시켜 try - catch로 잡아줍니다.
- for, for in, for of 등을 사용합니다.
- .every(), .some(), .find(), .findIndex() 등과 같이 적절한 메서드를 찾아서 사용합니다.

```javascript
const orders = ['first', 'second', 'third']

orders.forEach((order) => {
  if(order === 'second') {
    continue;
    break;
  }
})
```

#### Shorthand Properties

Concise Method - 간결한 메서드를 뜻합니다.

```javascript
const firstName = "jung";
const lastName = "hoon";

const person = {
  firstName: "jung",
  lastName: "hoon",

  getFullName: () => {
    return this.firstName + " " + this.lastName;
  },
};

// Shorthand Properties
const person = {
  firstName,
  lastName,
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};
```

#### Lookup Table

```javascript
function getUserType(type) {
  if (type === "ADMIN") {
    return "관리자";
  } else if (type === "INSTRUCTOR") {
    return "강사";
  } else if (type === "STUDENT") {
    return "수강생";
  } else {
    return "해당없음";
  }
}

function getUserType(type) {
  switch (key) {
    case "ADMIN":
      return "관리자";
    case "INSTRUCTOR":
      return "강사";
    case "STUDENT":
      return "수강생";
    default:
      return "해당없음";
  }
}

// Object Lookup Table - best
// USER_TYPE을 상수로 관리해서 따로 관리를 한다.
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: "관리자",
    INSTRUCTOR: "강사",
    STUDENT: "수강생",
    UNDEFINED: "해당 없음",
  };

  return USER_TYPE[type] || USER_TYPE.UNDEFINED;
}

// 또 다른 사례
function getUserType(type) {
  return (
    {
      ADMIN: "관리자",
      INSTRUCTOR: "강사",
      STUDENT: "수강생",
    }[type] || "해당 없음"
  );
}
```

#### Object Destructuring

객체의 구조분해할당

인자가 3개 이상일 때 보통 사용합니다.

객체 구조분해할당을 통해 명시적인 코드를 작성할 수 있습니다.

```javascript
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const yh = new Person("yh", 25, "korea");

// 수정후 코드
function Person({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const yh = new Person({ name: "yh", age: 25, location: "korea" });

// 수정후 코드
function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const yhOptions = { age: 25, location: "korea" };
const yh = new Person("yh", yhOptions);
```

```javascript
const orders = ["first", "second", "third"];
const st = orders[0];
const rd = orders[2];
const [first, , third] = orders;

// 객체로 수정후 코드
const { 0: st2, 2: rd2 } = orders;
```

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root');
)

// 수정후 코드
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root');
)
```

#### Object freeze

- 객체를 동결합니다.
- 객체의 동결 확인은 Object.isFrozen을 사용하면 가능합니다.
- 대중적인 유틸 라이브러리를 사용하거나 직접 유틸 함수를 생성하면 깊은 얼리기를 할 수 있습니다.
- Typescript에서는 readonly가 그 역할을 합니다.

```javascript

const STATUS = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

// Object 얼리기!
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
});

// 얕은 얼리기
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  // 옵션은 얼려지지 않습니다.
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

STATUS.OPTIONS;

Object.isFrozen(Object.OPTIONS); // 얕은 얼리기로 false 출력

// 깊은 얼리기 함수
function deepFreeze(targetObj) {

/*
1. 객체를 순회합니다.
2. 값이 객체인지 확인합니다.
3. 객체이면 재귀합니다.
4. 객체가 아니면 Object.freeze();
*/

// Ex
Object.keys(targetObj).forEach(key => {
  if(/* 객체가 맞다면 */) {
    deepFreeze(targetObj[key]);
  }
})

return Object.freeze(targetObj)
}

```

#### Prototype 조작 지양하기

프로토타입을 조작하는 것은 아주 강력하며, 위험합니다.

예를들어 .map(), .forEach()등과 같은 메서드를 덮어씌우면 심각한 에러를 초래할 수 있습니다.

- JS 언어 발전
- JS 빌트인 객체를 건드리지 말자

```javascript
// 구 시대 생성자 함수 생성법
function Car(name, brand) {
  this.name = name;
  this.brand = brand;
}

Car.prototype.sayName = function () {
  return this.brand + "-" + this.name;
};

// JS 발전으로 인해 class 사용 가능
class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName() {
    return this.brand + "-" + this.name;
  }
}

const casper = new Car("캐스퍼", "현대");
```

#### hasOwnProperty

```javascript
const person = {
  name: "yh",
};

person.hasOwnProperty("jyh"); // 있으면 true, 없으면 false

const foo = {
  hasOwnProperty: function () {
    return false;
  },

  bar: "~~~~",
};

foo.hasOwnProperty("bar"); // false, hasOwnProperty는 함수명을 보호하지 않습니다.

Object.prototype.hasOwnProperty.call(foo, "bar"); // prototype으로 접근해서 사용하면 정상 동작합니다.

// 함수화
function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}
```

#### 직접 접근 지양하기

예측 가능한 코드를 작성해서 동작이 예측 가능한 앱을 개발합니다.

```javascript
const model = {
  isLogin: false,
  isValidToken: false,
};

function login() {
  model.isLogin = true;
  model.isValidToken = true;
}

function logout() {
  model.isLogin = false;
  model.isValidToken = false;
}

someElement.addEventListener("click", login);

// model이라는 객체를 접근하기 너무 용이하기에 함수로 뺴줍니다.
function setLogin(bool) {
  model.isLogin = bool;
}

function setValidToken(bool) {
  model.isValidToken = bool;
}

function login() {
  setLogin(true);
  setValidToken(true);
}

function logout() {
  setLogin(false);
  setValidToken(false);
}
```

#### 함수, 메서드, 생성자

##### 함수란?

- func();
- 1급 객체
- 변수나, 데이터에 담길 수 있다.
- 매개변수로 전달 가능 (콜백 함수)
- 함수가 함수를 반환 혹은 매개변수로 받을 수 있음 (고차 함수)

##### 메서드 => 객체에 의존성이 있는 함수, OOP 행동을 의미합니다.

- obj.method();

##### 생성자 함수 => 인스턴스를 생성하는 역할 => Class

- const instance = new Func();

```javascript
// 함수
function func() {
  return this;
}

// 객체의 메서드
const obj = {
  method() {
    return this;
  },
  conciseMethod: function () {
    // 간결하게 보여주기 가능
    return this;
  },
};

// 생성자 함수 (Class)
function Func() {
  return this;
}

class Func {
  constructor() {
    this.~~~
  }
}
```

#### Argument & Parameter

```javascript
function example(parameter) {
  console.log(parameter); // Output = foo
}

const argument = "foo";

example(argument);
```

#### 복잡한 인자 관리하기

```javascript
/* isToggle을 통해 어떤 기능의 함수인지 유추 가능합니다. */
function toggleDisplay(isToggle) {
  // ... 코드
}

/* 두 가지 값을 더하는 걸 유추할 수 있습니다.*/
function sum(sum1, sum2) {
  // ... 코드
}

/* 최소, 최대 랜덤값 유추 가능합니다. */
function genRandomNumber(min, max) {
  // ... 코드
}

/* 3개의 인자여도 명시적인 코드를 작성할 수 있으면 괜찮습니다. */
function timer(start, stop, end) {
  // ... 코드
}

/* 사각형과 같이 인자가 4개가 필요하더라도 명시적이면 괜찮습니다. */
function genSquare(top, right, bottom, left) {
  // ... 코드
}
```

```javascript
// 각 인자에 맞는 위치를 확인해야 하는 번거로움이 있습니다.
function createCar(name, brand, color, type) {
  return {
    name,
    brand,
    color,
    type,
  };
}

// 수정후 코드
// 구조분해할당을 사용하면 순서를 신경쓰지 않아도 됩니다.
function createCar({ name, brand, color, type }) {
  return {
    name,
    brand,
    color,
    type,
  };
}

// 중요한 데이터의 경우 고정적으로 넣어주고 선택적 요소들은 옵션 형식으로 넣어준다.
function createCar(name, { brand, color, type }) {
  return {
    name,
    brand,
    color,
    type,
  };
}

createCar("car", {});
```

```javascript
// undefined로 들어올 수 있는 값들은 분기 처리를 해줘야 합니다.
function createCar({ name, brand, color, type }) {
  if (!name) {
    throw new Error("name is a required");
  }

  if (!brand) {
    throw new Error("brand is a required");
  }
}
```

#### Default Value

```javascript
// 고전적인 코드의 예
function createCarousel(options) {
  options = options || {}; // undefined 방어 코드

  // nullish 방어 코드
  var margin = options.margin || 0;
  var center = options.center || false;
  var navElement = options.navElement || "div";

  // ... 코드

  return {
    margin,
    center,
    navElement,
  };
}

createCarousel();

// 수정후 코드
// default parameter
function createCarousel({
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  // .. 코드

  return {
    margin,
    center,
    navElement,
  };
}

createCarousel();

// throw error to default parameter
const required = (argName) => {
  throw new Error("required is " + argName);
};

function createCarousel({
  items = required("items"),
  margin = 0,
  center = false,
  navElement = "div",
} = {}) {
  // ...  코드

  return {
    margin,
    center,
    navElement,
  };
}

createCarousel({
  margin: 10,
  center: true,
  navElement: "span",
});
```

#### Rest Parameters

```javascript
function sumTotal() {
  return Array.from(arguments).reduce((acc, cur) => acc + cur);
}

sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 수정후 코드
function sumTotal(...args) {
  return args.reduce((acc, cur) => acc + cur);
}

sumTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 수정후 코드 - 추가 매개변수를 받을 수 있습니다.
function sumTotal(initValue, ...args) {
  return args.reduce((acc, cur) => acc + cur, initValue);
}

sumTotal(100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

#### void & return

```javascript
// alert, setState는 return이 필요없는 void 함수입니다.
function handleClick() {
  return setState(false);
}

function showAlert(message) {
  return alert(message);
}

// return이 없어 최종적으로 undefined 출력합니다.
function test(sum1, sum2) {
  const result = sum1 + sum2;
}

function testVoidFunc() {
  return test(1, 2);
}

testVoidFunc();
```

```javascript
// 반환이 있을법한 이름의 함수들입니다.
function isAdult(age) {
  return age > 19;
}

function getUserName(name) {
  return "유저 " + name;
}
```

#### Arrow Function

객체 내에서 화살표 함수를 사용하게 되면 this로 접근을 못하는 문제가 발생할 수 있습니다.

화살표 함수는 렉시컬 스코프를 가지게 되는데 호출된 객체를 this로 바라보는 것이 아닌 바로 상위의 문맥을 따르는 경우가 있습니다.

그렇기 때문에 상위의 스코프를 따르고 this의 동작방식을 따르지 않기 때문에 this로 호출해도 동작이 되지 않습니다.

this의 동작 방식과 화살표 함수를 알고 있으면 도움이 됩니다.

```javascript
const user = {
  name: "yh",
  getName: () => {
    return this.name;
  },
};

user.getName(); // undefined

// 화살표 함수 -> 일반 함수
const user = {
  name: "yh",
  getName() {
    return this.name;
  },
};

user.getName(); // yh
```

화살표 함수는 arguments 객체도 사용할 수 없고, call, apply, bind 등 다양한 것들을 사용하지 못합니다.

```javascript
const user = {
  name: "yh",
  getName: () => {
    return this.name;
  },
  // argument는 사용 불가
  newFriends: () => {
    const newFriendList = Array.from(arguments);

    return this.name + newFriendList;
  },
  // rest parameter를 사용하면 가능
  newFriends: (...rest) => {
    return this.name + rest;
  },
};
```

화살표 함수는 생성자 함수로 만들 수 없는 단점이 있습니다.

하지만 class가 지원하기 때문에 굳이 화살표 함수로 만들 이유는 없지만 new 연산자로 조합하는 화살표 함수는 에러를 초래할 수 있습니다.

```javascript
const Person = (name, city) => {
  this.name = name;
  this.city = city;
};

const person = new Person("yh", "kr"); // Error
```

```javascript
class Parent {
  // 일반 함수
  parentMethod() {
    console.log("parentMethod");
  }

  // 화살표 함수
  parentMethodArrow = () => {
    console.log("parentMethodArrow");
  };

  // 화살표 함수는 자식 클래스에서 동일 함수 이름으로 호출하면 화살표 함수가 호출됩니다.
  overrideMethod = () => {
    return "Parent";
  };

  // 화살표 함수를 그냥 함수로 바꿔주면 해결!
  overrideMethod() {
    return "Parent";
  }
}

class Child extends Parent {
  childMethod() {
    // 정상 호출
    super.parentMethod();

    // Error 발생
    super.parentMethodArrow();
  }

  overrideMethod() {
    return "Child";
  }
}

new Child().childMethod();
new Child().overrideMethod(); // 부모의 메서드가 호출됨
```

#### Callback function

콜백 함수는 장풍을 유도하고, async await을 통해 비동기를 제어하는 기법이다 라고 생각할 수 있습니다.

콜백 함수는 함수의 실행권을 다른 함수에 위임하는 것으로도 볼 수 있습니다.

```javascript
// Callback function 사례
someElement.addEventListener("click", function (e) {
  console.log(someElement + "이 클릭되었습니다.");
});

// addEventListener 콜백 함수 예시
DOM.prototype.addEventListener = function (eventType, cbFunc) {
  if (eventType === "click") {
    const clickEventObject = {
      target: {},
    };

    cbFunc(clickEventObject);
  }
};

// 회원가입
function register() {
  const isConfirm = confirm("회원가입에 성공했습니다.");

  if (isConfirm) {
    redirectUserInfoPage();
  }
}

// 로그인
function login() {
  const isConfirm = alert("로그인에 성공했습니다.");

  if (isConfirm) {
    redirectIndexPage();
  }
}

// 공통의 Callback function
function confirmModal(
  message,
  cnFunc = () => {
    throw Error("error");
  }
) {
  const isConfirm = alert(message);

  if (isConfirm && cbFunc) {
    cbFunc();
  }
}

// 수정후 코드
// Callback function은 함수를 인자에 실행시키는 게 아닌 함수 자체를 넘깁니다.
// 회원가입
function register() {
  confirmModal("회원가입에 성공했습니다.", redirectUserInfoPage);
}

// 로그인
function login() {
  confirmModal("로그인에 성공했습니다.", redirectIndexPage);
}
```

#### 순수 함수

side effect와 같은 부작용을 발생시키지 않는 함수를 순수 함수라 합니다.

함수를 호출할 때마다 동일한 값을 뱉어야 하는데 누군가 임의적으로 값을 바꿔 함수의 호출된 값이 달라지면 안됩니다.

```javascript
let num1 = 10;
let num2 = 20;

function impureSum1() {
  return num1 + num2;
}

function impureSum2(newNum) {
  return num1 + newNum;
}

impureSum1(); // 30
impureSum1(); // 30
num1 = 30;
impureSum1(); // 50

impureSum2(10); // 40
num1 = 100;
impureSum2(10); // 110

// Pure Function
function pureSum(num1, num2) {
  return num1 + num2;
}

pureSum(10, 20); // 30
pureSum(10, 20); // 30
pureSum(30, 100); // 130
pureSum(30, 100); // 130
```

```javascript
function changeValue(num) {
  num++;

  return num;
}

changeValue(1); // 2

// 객체 테스트
const obj = { one: 1 };

function changeObj(targetObj) {
  targetObj.one = 100;

  return targetObj;
}

changeObj(obj); // { one: 100 }
console.log(obj); // { one: 100 } 기존 객체의 데이터가 바뀌었습니다.

// primitive type vs reference type을 공부하면 좋습니다.
// 객체, 배열을 조작하는 함수를 만들 때는 새롭게 만들어서 반환합니다.
function changeObj(targetObj) {
  return { ...targetObj, one: 100 };
}

changeObj(obj); // { one: 100 }
console.log(obj); // { one: 1 }
```

#### Closure

함수는 괄호를 사용하여 호출할 수 있다.

```javascript
function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  };
}

const addOne = add(1); // 함수 sum을 품고있습니다.
const addTwo = add(2);
```

```javascript
function add(num1) {
  return function (num2) {
    return function (calculateFn) {
      return calculateFn(num1, num2);
    };
  };
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiple(num1, num2) {
  return num1 * num2;
}

const addOne = add(5)(2);
const sumAdd = addOne(sum); // 7
const sumMultiple = addOne(multiple); // 10
```

```javascript
function log(value) {
  return function (fn) {
    fn(value);
  };
}

const logFoo = log("foo");

logFoo((v) => console.log(v)); // foo
logFoo((v) => console.info(v)); // foo
logFoo((v) => console.error(v)); // foo, 빨강바탕
logFoo((v) => console.warn(v)); // foo, 노랑바탕
```

```javascript
const arr = [1, 2, 3, "A", "B", "C"];

const isNumber = (value) => typeof value === "number";
const isString = (value) => typeof value === "string";

arr.filter(isNumber);

// 수정후 코드(Closure X)
function isTypeOf(type, value) {
  return typeof value === type;
}

const isNumber = (value) => isTypeOf("number", value);
const isString = (value) => isTypeOf("string", value);

// Closure로 변환
function isTypeOf(type, value) {
  return function (value) {
    return typeof type === value;
  };
}

const isNumber = (value) => isTypeOf("number");
const isString = (value) => isTypeOf("string");

arr.filter(isNumber); // [1, 2, 3]
arr.filter(isString); // ['A', 'B', 'C']
```

```javascript
// endpoint 별로 나눈 코드입니다.
function fetcher(endpoint) {
  return function (url, options) {
    return fetch(endpoint + url, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.error);
        }
      })
      .catch((err) => console.error(err));
  };
}

// baseUrl을 기억합니다.
const getNaverApi = fecher("https://www.naver.com");
const getKakaoApi = fecher("https://www.kakao.com");

getNaverApi("/webtoon").then((res) => res);
getKakaoApi("/webtoon").then((res) => res);
```
