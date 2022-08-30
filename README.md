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
