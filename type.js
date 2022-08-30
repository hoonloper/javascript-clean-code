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
