## 객체

#### JavaScript의 배열은 객체입니다.

```javascript
const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {};
arr[{}] = [1, 2, 3];
arr['func'] = function () {
  return 'hello';
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
  console.log('배열 확인');
}

if (typeof arr === 'object') {
  console.log('배열 확인');
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
  const confirmButton = document.getElementsByTagName('button')[0];
  const cancelButton = document.getElementsByTagName('button')[1];
  const resetButton = document.getElementsByTagName('button')[2];
}

// 예시
function clickGroupButton() {
  const [confirmButton, cancelButton, resetButton] =
    document.getElementsByTagName('button');
}
```

```javascript
function formatDate(targetDate) {
  const date = targetDate.toISOString().split('T')[0];
  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}

// 예시
function formatDate(targetDate) {
  const [date] = targetDate.toISOString().split('T');
  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}

// 예시 2
function head(arr) {
  return arr[0] ?? '';
}

function formatDate(targetDate) {
  const date = head(targetDate.toISOString().split('T'));
  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}
```

#### 유사 배열 객체

```javascript
const arrayLikeObject = {
  0: 'HELLO',
  1: 'WORLD',
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

  return arguments.map((arg) => arg + '원'); // 유사 배열 객체이기 때문에 배열 메소드 에러 발생

  return Array.from(arguments).map((arg) => arg + '원'); // 배열로 변환 후 사용
}

generatePriceList(100, 200, 300, 400, 500);
```

#### 불변성 - immutable

불변성 지키기

- 배열을 복사합니다.
- 새로운 배열을 반환하는 메서드들을 활용합니다.

```javascript
const originArray = ['123', '456', '789'];
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
const price = ['2000', '1000', '3000', '5000', '4000'];

function getWonPrice(priceList) {
  let temp = [];

  for (let i = 0; i < priceList.length; i++) {
    temp.push(priceList[i] + '원');
  }

  return temp;
}

// 수정후 코드
const suffixWon = (price) => price + '원';

function getWonPrice(priceList) {
  return priceList.map(suffixWon);
}

// 수정후 코드 + 조건
const suffixWon = (price) => price + '원';
const isOverOneThousand = (price) => Number(price) > 1000;

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);

  return priceList.map(suffixWon);
}
```

#### 배열 메서드 체이닝 활용하기

```javascript
// 수정후 코드 + 조건 + 정렬
const suffixWon = (price) => price + '원';
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
const price = ['2000', '1000', '3000', '5000', '4000'];

// 함수를 실행
const newPricesForEach = prices.forEach((price) => price + '원');

// 새로운 배열을 반환
const newPricesMap = prices.map((price) => price + '원');
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
const firstName = 'jung';
const lastName = 'hoon';

const person = {
  firstName: 'jung',
  lastName: 'hoon',

  getFullName: () => {
    return this.firstName + ' ' + this.lastName;
  },
};

// Shorthand Properties
const person = {
  firstName,
  lastName,
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
};
```

#### Lookup Table

```javascript
function getUserType(type) {
  if (type === 'ADMIN') {
    return '관리자';
  } else if (type === 'INSTRUCTOR') {
    return '강사';
  } else if (type === 'STUDENT') {
    return '수강생';
  } else {
    return '해당없음';
  }
}

function getUserType(type) {
  switch (key) {
    case 'ADMIN':
      return '관리자';
    case 'INSTRUCTOR':
      return '강사';
    case 'STUDENT':
      return '수강생';
    default:
      return '해당없음';
  }
}

// Object Lookup Table - best
// USER_TYPE을 상수로 관리해서 따로 관리를 한다.
function getUserType(type) {
  const USER_TYPE = {
    ADMIN: '관리자',
    INSTRUCTOR: '강사',
    STUDENT: '수강생',
    UNDEFINED: '해당 없음',
  };

  return USER_TYPE[type] || USER_TYPE.UNDEFINED;
}

// 또 다른 사례
function getUserType(type) {
  return (
    {
      ADMIN: '관리자',
      INSTRUCTOR: '강사',
      STUDENT: '수강생',
    }[type] || '해당 없음'
  );
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

someElement.addEventListener('click', login);

// model이라는 객체를 접근하기 너무 쉽기에 함수로 뺴줍니다.
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

const yh = new Person('yh', 25, 'korea');

// 수정후 코드
function Person({ name, age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const yh = new Person({ name: 'yh', age: 25, location: 'korea' });

// 수정후 코드
function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const yhOptions = { age: 25, location: 'korea' };
const yh = new Person('yh', yhOptions);
```

```javascript
const orders = ['first', 'second', 'third'];
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
  return this.brand + '-' + this.name;
};

// JS 발전으로 인해 class 사용 가능
class Car {
  constructor(name, brand) {
    this.name = name;
    this.brand = brand;
  }

  sayName() {
    return this.brand + '-' + this.name;
  }
}

const casper = new Car('캐스퍼', '현대');
```

#### hasOwnProperty

```javascript
const person = {
  name: 'yh',
};

person.hasOwnProperty('jyh'); // 있으면 true, 없으면 false

const foo = {
  hasOwnProperty: function () {
    return false;
  },

  bar: '~~~~',
};

foo.hasOwnProperty('bar'); // false, hasOwnProperty는 함수명을 보호하지 않습니다.

Object.prototype.hasOwnProperty.call(foo, 'bar'); // prototype으로 접근해서 사용하면 정상 동작합니다.

// 함수화
function hasOwnProp(targetObj, targetProp) {
  return Object.prototype.hasOwnProperty.call(targetObj, targetProp);
}
```
