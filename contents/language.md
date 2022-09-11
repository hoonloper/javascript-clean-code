## 목차

- [네이밍](#네이밍)
- [연산자](#연산자)
- [조건문](#조건문)
- [기본값 고정](#기본값-지정)

## 문법

#### var를 지양하자

let과 const는 ES2015부터 생겼습니다. let과 const가 없던 ES2015 이전에는 모두 var를 사용했고 let과 const는 var의 업그레이드 문법입니다. 그래서 오래전에 개발된 코드들의 경우 var로 작성된 레거시 코드들이 있을 수 있으며, var를 삭제할 경우 var로 개발된 모든 서버들이 다운될 것입니다.

_JavaScript에서 스코프가 무엇이고, 어떤 역할을 하는지 공부하고 보면 더욱 이해하기 편합니다._

- var - 함수 스코프를 가집니다.
- let, const - 블록 스코프를 가집니다. + TDZ

즉, var보다 let과 const가 안전한 코드를 작성할 수 있게 도와줍니다.

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

// const는 재선언과 재할당 모두 불가능합니다. 즉 상수입니다.
const name = "이름";

const name;// Error, 재선언
name = "hoonloper"; // Error, 재할당
```

#### function scope & block scope

함수 스코프와 블록 스코프에 대해 알아봅시다.

```javascript
var global = '전역';

// var는 함수 스코프이기에 if문 스코프에 해당되지 않아 값이 덮어씌워집니다.
if (global === '전역') {
  var global = '지역 변수';
  console.log(global); // 지역 변수
}

// 그래서 전역 변수까지 영향을 줍니다.
console.log(global); // 지역 변수

/* ------------------------- */

let global = '전역';

// let은 블록 스코프이기 때문에 if문에서 블록 스코프가 적용됩니다.
if (global === '전역') {
  let global = '지역 변수';
  console.log(global); // 지역 변수
}

// 지역 변수가 전역 변수에 영향을 끼치지 않습니다.
console.log(global); // 전역

/* ------------------------- */

const global = '전역';

// const도 let과 동일합니다.
if (global === '전역') {
  const global = '지역 변수';
  console.log(global); // 지역 변수
}

console.log(global); // 전역
```

#### let보다 cont를 사용하면 좋은 이유

변수안에 많은 것을 담을 수 있다보니 재할당의 개념으로 접근하면 이해가 쉽습니다.

```javascript
// let과 const는 선언과 동시에 할당합니다.(호이스팅의 개념을 알면 좋습니다.)
const person = {
  name: 'jung',
  age: 25,
};

// Error, const는 재할당이 금지됩니다.
person = {
  name: 'jung',
  age: 25,
};

// 객체의 값을 바꾸기 위해서 .으로 접근합니다.
person.name = 'lee';
person.age = 20;

console.log(person);

// 배열은 아래와 같습니다.
const person = [
  {
    name: 'jung',
    age: 25,
  },
];

// 배열의 값을 변경하는 방법 2가지
person[0] = {
  name: 'yong',
  age: 30,
};

person[0].name = 'yong';
person[0].age = 30;

// 새로운 값 추가
person.push({
  name: 'jung',
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
var globalVar = 'global';

// 전역 초기화
var setTimeout = 'setTimeout';

// global.js 2
console.log(globalVar); // global

// 전역 객체의 딜레이를 주는 함수
window.setTimeout(() => {
  console.log('1초');
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
- IIFE, Module, closure, scope를 나누는 방법 등

#### 임시 변수 제거하기

특정 공간 스코프에서 전역변수처럼 활용되는 변수를 임시 변수라 칭하겠습니다. 예시는 아래와 같습니다.

```javascript
function getElements() {
  // const로 선언했지만 함수 내부에서 봤을 때 전역 변수로 사용되고 있습니다.
  const result = {}; // 임시 객체

  result.title = '제목';
  result.text = '내용';
  result.value = '값';

  /* 명확하게 변경했지만 이것도 임시 객체로 볼 수 있습니다. */
  const result = {
    title: '제목',
    text: '내용',
    value: '값',
  };

  /* 더 명확하게 변경, 바로 리턴해주는 형태입니다. */
  return {
    title: '제목',
    text: '내용',
    value: '값',
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

  month = month > 10 ? month : '0' + month;
  day = day > 10 ? day : '0' + day;
  hour = hour > 10 ? hour : '0' + hour;

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
    month: month > 10 ? month : '0' + month,
    day: day > 10 ? day : '0' + day,
    hour: hour > 10 ? hour : '0' + hour,
  };
}

// 함수 추가, 지속적인 추상화가 가능합니다.
function getDateTime() {
  const currentDateTime = getDateTime(new Date());
  computedKrDate();

  return {
    month: computedKrDate(currentDateTime.month) + '분 전',
    day: currentDateTime.day + '',
    hour: currentDateTime.hour + '',
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
  let tempVal = '';

  // 로직 내에서 temp의 값이 자주 바뀝니다.
  for (let index = 0; index < array.length; index++) {
    temp = array[index];
    temp += array[index];
    temp -= array[index];
    temp *= array[index];
  }

  // temp값에 따라 분기 처리 로직...
  if (temp) {
    // ... 코드
  } else if (temp) {
    // ... 코드
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

  console.log(global); // 1
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

// 변수에 할당할 경우 동작합니다.
sum = function () {
  return 1 + 2;
};

console.log(sum());

// 함수도 호이스팅이 됩니다.
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

// 함수 표현식
const sum = function () {
  return 1 + 2;
};
```

정리!
런타임시 선언이 최상단으로 끌어올려지는 것이 호이스팅입니다.

문제 - 코드를 작성할 때 예측하지 못한 에러가 발생합니다.

해결책!

- var -> let, const 지향합니다.
- 함수 조심 -> 함수 표현식을 사용 권장합니다.

#### 타입 검사

```javascript
// typeof는 피연산자의 타입을 검사해 '문자열'로 반환해줍니다. - 함수형으로도 사용 가능합니다.
typeof '문자열';
typeof true;
typeof undefined;
typeof 123;
typeof Symbol();

/*
PRIMITIVE(원시값) vs REFERENCE(자료형)
*/

// PRIMITIVE
typeof '문자열';
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
const str = new String('문자열');
typeof str; // object

typeof null; // null === object -> 자바스크립트에서 인정한 오류입니다.

// JS는 동적으로 변하는 언어이기에 타입도 동적으로 변함.
// instanceof 연산자는 객체의 프로토타입 체인을 검사
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const personObj = {
  name: 'jung',
  age: 25,
};
const person = new Person('jung', 25);

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
Object.prototype.toString.call('');
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
'1' == 1; // true
1 == true; // true
```

#### 형변환 주의하기

```javascript
'1' == 1; // 느슨한 검사 -> 형 변환
1 == true;
0 == false;

// 암묵적 형변환
11 + '문자'; // '11 문자와 결합'
!!'문자열'; // true
!!''; // false

// 명시적으로 수정하자.
String(11 + '문자'); // '11 문자와 결합'
Boolean('문자열'); // true
Boolean(''); // false

parseInt('9.9999', 10); // 9
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
typeof 123 === 'number'; // true
typeof 123 !== 'number'; // false
isNaN(123); // false -> 숫자가 숫자가 아니다.

// ES2015+
isNan(123 + 'test'); // true
Number.isNaN(123 + 'test'); // false

isNaN; // 느슨한 검사
Number.isNaN; // 엄격한 검사
```

## 네이밍

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

// 최대, 최소 상수를 설정합니다.
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

reservationDate('YYYY-MM-DD', 'YYYY-MM-DD');
```

시작은 동일하나 끝은 다를 경우이다. (Ex : 숙소 예약 등)

#### First - Last

```javascript
/*
first - last
포함된 양 끝을 의미합니다.
부터 ~~~ 까지
*/

const students = ['에이', '비', '씨'];

function getStudents(firstStudent, lastStudent) {
  // ... 코드
}

getStudents('에이', '씨');
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
getDates('2022-01-01', '2022-02-01');
genShuffleArray(1, 5);
```

## 연산자

#### 값식문

문법 : 말의 구성 및 운용상의 규칙. 또는 그것을 연구하는 학문

중요한 이유 - 개발자는 프로그래밍 언어를 사용하기 때문입니다. 컴퓨터를 이해시키지 못하면 문법 에러를 일으킬 수 밖에 없습니다.

문법 에러 -> 장애 -> 서비스 마비까지...

```javascript
// This JSX:
ReactDOM.render(<div id="msg">Hello World!</div>, mountNode);

// Is transformed to this JS:
ReactDOM.render(
  React.createElement('div', { id: 'msg' }, 'Hello World!'),
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
      <p>{this.state.color || 'white'}</p>
      <h3>Hex</h3>
      <p>
        {(() => {
          switch (this.state.color) {
            case 'red':
              return '#FF0000';
            case 'green':
              return '#00FF00';
            case 'blue':
              return '#0000FF';
            default:
              return '#FFFFFF';
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
      return 'conditionValue'; // 컨디션 값
    default:
      value4; // 예외
  }
}
```

```javascript
// 우선 순위는 한번 감싸주며 가독성을 높여줍니다.
const example = condition1 ? (a === 0 ? 'zero' : 'positive') : 'negative';
```

```javascript
// 삼항 연산자의 좋은 예시
const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '이름없음';

  return `안녕하세요 ${name}`;
};
```

```javascript
// 좋지 않은 예
// 삼항연사자는 값 혹은 식을 작성해 주는 게 좋습니다.
// 두 alert의 반환은 undefined이기 때문에 삼항연산자보다 if문을 작성해 주는 게 좋다고 봅니다.
// 숏코딩 or if문 개인 취향~

function alertMessage(isAdult) {
  isAdult ? alert('입장이 가능합니다.') : alert('입장이 불가능합니다.');

  if (isAdult) {
    // ... 코드
  } else {
    // ... 코드
  }
}

// 이런 예시도 있습니다.
function alertMessage(isAdult) {
  return isAdult ? '입장 가능' : '입장 불가능';
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
    return '사람이 없네요';
  }

  return '안녕하세요 ' + name + '님';
}

// 수정한 코드
function printName(name) {
  if (!name) {
    return '사람이 없네요';
  }

  return '안녕하세요 ' + name + '님';
}
```

```javascript
/**
 * Truthy (참 같은 값)
 */
function example({ isLogin }) {
  return isLogin ? '성공' : '실패';
}

function example({ content }) {
  return content.length > 0 ? content : null;
}
```

#### 단축 평가

```javascript
// AND
true && true && '도달 O';
true && false && '도달 X';

// OR
false || false || '도달 O';
true || true || '도달 X';
```

```javascript
function userData(user) {
  if (user.name) {
    return user.name;
  } else {
    return 'X';
  }

  // 이렇게 사용 가능, OR 단축 평가
  return user.name || 'X';
}
```

```javascript
function favoriteDog(someDog) {
  let favoriteDog;

  if (someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = '냐옹';
  }

  return favoriteDog + ' 입니다.';

  // 이렇게 사용 가능
  return (someDog || '냐옹') + '입니다.';
}
```

```javascript
const getActiveUserName = (user, isLogin) => {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return '이름없음';
      }
    }
  }

  // 수정후 코드
  if (isLogin && user) {
    if (user.name) {
      return user.name || '이름없음';
    }
  }
};
```

## 조건문

#### else if & else 피하기

else if를 이어서 사용하기보다 else와 if를 분리해주고 조건식이 많아지면 switch 문을 활용합니다.

else if는 결국 또 다른 if문을 사용하는 거니 두 개의 if로 분리해 주는 것도 좋은 방법입니다.

```javascript
const x = 1;

if (x >= 0) {
  return 'x는 0과 같거나 크다';
} else if (x > 0) {
  return 'x는 0보다 크다';
} else {
  return 'Else';
}

if (x >= 0) {
  return 'x는 0과 같거나 크다';
} else {
  if (x > 0) {
    return 'x는 0보다 크다';
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
    return '이름없음';
  }

  // 이렇게 사용 가능합니다.
  if (user.name) {
    return user.name;
  }

  return '이름없음';

  // 주의. 이런 경우에는 yh 이후 new name이 입력되어 의도한 데이터가 저장되지 않을 수 있습니다.
  if (user.name) {
    user.name = 'yh';
  }

  user.name = 'new name';
}
```

```javascript
// age가 20 미만시 특수 함수 실행
function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  } else {
    return '안녕하세요.';
  }

  // 인사는 어떠한 경우에도 출력해야 하기에 else 지우기
  if (user.age < 20) {
    report(user);
  }

  return '안녕하세요.';
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

        return '로그인 성공';
      }
    } else {
      throw new Error('No Token');
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
    throw new Error('No Token');
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  // 실행 부분이 명확해집니다.
  login();
}

function login() {
  refreshToken();

  return '로그인 성공';
}
```

```javascript
function 오늘하루(condition, weather, isJob) {
  if (condition === 'GOOD') {
    공부();

    게임();

    유튜브보기();

    if (weather === 'GOOD') {
      운동();

      빨래();
    }

    if (isJob === 'GOOD') {
      야간업무();

      조기취침();
    }
  }
}

// 수정후 코드
function 오늘하루(condition, weather, isJob) {
  // 의존성에 따라 분기를 바로 뺄지 아니면 하나의 분기에서 모든 로직을 처리할지 판단해야 합니다.
  // 수많은 Early return을 만드는 것은 좋지 않으나 하나의 조건에만 의존성이 걸려있을 때 사용하면 명시적으로 변할 수 있습니다.
  if (condition !== 'GOOD') {
    return;
  }

  공부();
  게임();
  유튜브보기();

  if (weather === 'GOOD') {
    return;
  }

  운동();
  빨래();

  if (isJob === 'GOOD') {
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
  console.log('숫자입니다');
}

function isNumber(num) {
  return !Number.isNaN(num) && typeof num === 'number';
}

if (isNumber(3)) {
  console.log('숫자입니다');
}
```

```javascript
// 추천하지 않는 방법
const isCondition = true;
const isNotCondition = false;

if (!isCondition) {
  console.log('거짓인 경우에만 실행');
}

if (!isNotCondition) {
  console.log('거짓인 경우에만 실행');
}
```

## 기본값 지정

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
  const element = document.createElement(type || 'div');

  element.style.height = height || 100;
  element.style.width = width || 100;

  return element;
}

createElement();
```

```javascript
function registerDay(userInputDay) {
  switch (userInputDay) {
    case '월요일':
      return;
    case '화요일':
      return;
    case '수요일':
      return;
    case '목요일':
      return;
    case '금요일':
      return;
    case '토요일':
      return;
    case '일요일':
      return;
    default:
      throw Error('');
  }
}

registerDay('월ㄹ요일'); // 오타 입력의 경우를 생각해서 처리해줘야 합니다.
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
  const element = document.createElement(type || 'div');

  element.style.height = (height || 10) + 'px';
  element.style.width = (width || 10) + 'px';

  return element;
}

// 0은 falsy로 처리되기 때문에 OR에서 걸리게 됩니다.
createElement('div', 0, 0);

// ?? 연산자는 null or undefined만 평가합니다. 널 병합 연산자

function createElement(type, height, width) {
  const element = document.createElement(type ?? 'div');

  element.style.height = (height ?? 10) + 'px';
  element.style.width = (width ?? 10) + 'px';

  return element;
}

createElement('div', 0, 0);
```

```javascript
function helloWorld(message) {
  // Early Return을 사용할 때도 널 병합 연산자를 고려해서 넣어야 합니다.
  if (!message) {
    return 'Hello! World';
  }

  return 'Hello!' + (message || 'World');
}

function helloWorld(message) {
  return 'Hello!' + (message || 'World');
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
  console.log('로그인 성공!');
}

if (!(isValidToken && isValidUser)) {
  console.log('로그인 실패!');
}

if (!isValidToken || !isValidUser) {
  console.log('로그인 실패!');
}
```
