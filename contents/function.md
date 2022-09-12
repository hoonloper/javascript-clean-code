## 함수

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

const argument = 'foo';

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

// 중요한 데이터의 경우 고정적으로 넣어주고 선택적 요소들은 옵션 형식으로 넣어줍니다.
function createCar(name, { brand, color, type }) {
  return {
    name,
    brand,
    color,
    type,
  };
}

createCar('car', {});
```

```javascript
// undefined로 들어올 수 있는 값들은 분기 처리를 해줘야 합니다.
function createCar({ name, brand, color, type }) {
  if (!name) {
    throw new Error('name is a required');
  }

  if (!brand) {
    throw new Error('brand is a required');
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
  var navElement = options.navElement || 'div';

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
  navElement = 'div',
} = {}) {
  // ... 코드

  return {
    margin,
    center,
    navElement,
  };
}

createCarousel();

// 고정 값이 없을 때 에러를 던져주는 함수입니다.
const required = (argName) => {
  throw new Error('required is ' + argName);
};

function createCarousel({
  items = required('items'),
  margin = 0,
  center = false,
  navElement = 'div',
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
  navElement: 'span',
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
  return '유저 ' + name;
}
```

#### Arrow Function

객체 내에서 화살표 함수를 사용하게 되면 this로 접근을 못하는 문제가 발생할 수 있습니다.

화살표 함수는 렉시컬 스코프를 가지게 되는데 호출된 객체를 this로 바라보는 것이 아닌 바로 상위의 문맥을 따르는 경우가 있습니다.

그렇기 때문에 상위의 스코프를 따르고 this의 동작방식을 따르지 않기 때문에 this로 호출해도 동작이 되지 않습니다.

this의 동작 방식과 화살표 함수를 알고 있으면 도움이 됩니다.

```javascript
const user = {
  name: 'yh',
  getName: () => {
    return this.name;
  },
};

user.getName(); // undefined

// 화살표 함수 -> 일반 함수
const user = {
  name: 'yh',
  getName() {
    return this.name;
  },
};

user.getName(); // yh
```

화살표 함수는 arguments 객체도 사용할 수 없고, call, apply, bind 등 다양한 것들을 사용하지 못합니다.

```javascript
const user = {
  name: 'yh',
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

const person = new Person('yh', 'kr'); // Error
```

```javascript
class Parent {
  // 일반 함수
  parentMethod() {
    console.log('parentMethod');
  }

  // 화살표 함수
  parentMethodArrow = () => {
    console.log('parentMethodArrow');
  };

  // 화살표 함수는 자식 클래스에서 동일 함수 이름으로 호출하면 화살표 함수가 호출됩니다.
  overrideMethod = () => {
    return 'Parent';
  };

  // 화살표 함수를 그냥 함수로 바꿔주면 해결!
  overrideMethod() {
    return 'Parent';
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
    return 'Child';
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
someElement.addEventListener('click', function (e) {
  console.log(someElement + '이 클릭되었습니다.');
});

// addEventListener 콜백 함수 예시
DOM.prototype.addEventListener = function (eventType, cbFunc) {
  if (eventType === 'click') {
    const clickEventObject = {
      target: {},
    };

    cbFunc(clickEventObject);
  }
};

// 회원가입
function register() {
  const isConfirm = confirm('회원가입에 성공했습니다.');

  if (isConfirm) {
    redirectUserInfoPage();
  }
}

// 로그인
function login() {
  const isConfirm = alert('로그인에 성공했습니다.');

  if (isConfirm) {
    redirectIndexPage();
  }
}

// 공통의 Callback function
function confirmModal(
  message,
  cnFunc = () => {
    throw Error('error');
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
  confirmModal('회원가입에 성공했습니다.', redirectUserInfoPage);
}

// 로그인
function login() {
  confirmModal('로그인에 성공했습니다.', redirectIndexPage);
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

const logFoo = log('foo');

logFoo((v) => console.log(v)); // foo
logFoo((v) => console.info(v)); // foo
logFoo((v) => console.error(v)); // foo, 빨강바탕
logFoo((v) => console.warn(v)); // foo, 노랑바탕
```

```javascript
const arr = [1, 2, 3, 'A', 'B', 'C'];

const isNumber = (value) => typeof value === 'number';
const isString = (value) => typeof value === 'string';

arr.filter(isNumber);

// 수정후 코드(Closure X)
function isTypeOf(type, value) {
  return typeof value === type;
}

const isNumber = (value) => isTypeOf('number', value);
const isString = (value) => isTypeOf('string', value);

// Closure로 변환
function isTypeOf(type, value) {
  return function (value) {
    return typeof type === value;
  };
}

const isNumber = (value) => isTypeOf('number');
const isString = (value) => isTypeOf('string');

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
const getNaverApi = fecher('https://www.naver.com');
const getKakaoApi = fecher('https://www.kakao.com');

getNaverApi('/webtoon').then((res) => res);
getKakaoApi('/webtoon').then((res) => res);
```
