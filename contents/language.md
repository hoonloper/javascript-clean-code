## ๐ ๋ชฉ์ฐจ

- [๋ฌธ๋ฒ](#๋ฌธ๋ฒ)
- [๋ค์ด๋ฐ](#๋ค์ด๋ฐ)
- [์ฐ์ฐ์](#์ฐ์ฐ์)
- [์กฐ๊ฑด๋ฌธ](#์กฐ๊ฑด๋ฌธ)
- [๊ธฐ๋ณธ๊ฐ ๊ณ ์ ](#๊ธฐ๋ณธ๊ฐ-์ง์ )

## ๋ฌธ๋ฒ

#### var๋ฅผ ์ง์ํ์

let๊ณผ const๋ ES2015๋ถํฐ ์๊ฒผ์ต๋๋ค. let๊ณผ const๊ฐ ์๋ ES2015 ์ด์ ์๋ ๋ชจ๋ var๋ฅผ ์ฌ์ฉํ๊ณ  let๊ณผ const๋ var์ ์๊ทธ๋ ์ด๋ ๋ฌธ๋ฒ์๋๋ค. ๊ทธ๋์ ์ค๋์ ์ ๊ฐ๋ฐ๋ ์ฝ๋๋ค์ ๊ฒฝ์ฐ var๋ก ์์ฑ๋ ๋ ๊ฑฐ์ ์ฝ๋๋ค์ด ์์ ์ ์์ผ๋ฉฐ, var๋ฅผ ์ญ์ ํ  ๊ฒฝ์ฐ var๋ก ๊ฐ๋ฐ๋ ๋ชจ๋  ์๋ฒ๋ค์ด ๋ค์ด๋  ๊ฒ์๋๋ค.

_JavaScript์์ ์ค์ฝํ๊ฐ ๋ฌด์์ด๊ณ , ์ด๋ค ์ญํ ์ ํ๋์ง ๊ณต๋ถํ๊ณ  ๋ณด๋ฉด ๋์ฑ ์ดํดํ๊ธฐ ํธํฉ๋๋ค._

- var - ํจ์ ์ค์ฝํ๋ฅผ ๊ฐ์ง๋๋ค.
- let, const - ๋ธ๋ก ์ค์ฝํ๋ฅผ ๊ฐ์ง๋๋ค. + TDZ

์ฆ, var๋ณด๋ค let๊ณผ const๊ฐ ์์ ํ ์ฝ๋๋ฅผ ์์ฑํ  ์ ์๊ฒ ๋์์ค๋๋ค.

```javascript
// var๋ ์ฌํ ๋น๋ฟ๋ง ์๋๋ผ ์ฌ์ ์ธ๋ ๊ฐ๋ฅํฉ๋๋ค.
var name = "์ด๋ฆ";
var name = "์ด๋ฆ2";
var name = "์ด๋ฆ3";
var name = "์ด๋ฆ3";

console.log(name); // ์ด๋ฆ3

// let์ ์ด๋ฏธ ์ ์ธ์ ํ๊ธฐ ๋๋ฌธ์ ์ฌ์ ์ธ์ด ๋ถ๊ฐ๋ฅํ์ง๋ง ์ฌํ ๋น์ด ๊ฐ๋ฅํฉ๋๋ค.
let name = "์ด๋ฆ";

let name; // Error, ์ฌ์ ์ธ
name = "hoonloper"; // hoonloper, ์ฌํ ๋น

// const๋ ์ฌ์ ์ธ๊ณผ ์ฌํ ๋น ๋ชจ๋ ๋ถ๊ฐ๋ฅํฉ๋๋ค. ์ฆ ์์์๋๋ค.
const name = "์ด๋ฆ";

const name;// Error, ์ฌ์ ์ธ
name = "hoonloper"; // Error, ์ฌํ ๋น
```

#### function scope & block scope

ํจ์ ์ค์ฝํ์ ๋ธ๋ก ์ค์ฝํ์ ๋ํด ์์๋ด์๋ค.

```javascript
var global = '์ ์ญ';

// var๋ ํจ์ ์ค์ฝํ์ด๊ธฐ์ if๋ฌธ ์ค์ฝํ์ ํด๋น๋์ง ์์ ๊ฐ์ด ๋ฎ์ด์์์ง๋๋ค.
if (global === '์ ์ญ') {
  var global = '์ง์ญ ๋ณ์';
  console.log(global); // ์ง์ญ ๋ณ์
}

// ๊ทธ๋์ ์ ์ญ ๋ณ์๊น์ง ์ํฅ์ ์ค๋๋ค.
console.log(global); // ์ง์ญ ๋ณ์

/* ------------------------- */

let global = '์ ์ญ';

// let์ ๋ธ๋ก ์ค์ฝํ์ด๊ธฐ ๋๋ฌธ์ if๋ฌธ์์ ๋ธ๋ก ์ค์ฝํ๊ฐ ์ ์ฉ๋ฉ๋๋ค.
if (global === '์ ์ญ') {
  let global = '์ง์ญ ๋ณ์';
  console.log(global); // ์ง์ญ ๋ณ์
}

// ์ง์ญ ๋ณ์๊ฐ ์ ์ญ ๋ณ์์ ์ํฅ์ ๋ผ์น์ง ์์ต๋๋ค.
console.log(global); // ์ ์ญ

/* ------------------------- */

const global = '์ ์ญ';

// const๋ let๊ณผ ๋์ผํฉ๋๋ค.
if (global === '์ ์ญ') {
  const global = '์ง์ญ ๋ณ์';
  console.log(global); // ์ง์ญ ๋ณ์
}

console.log(global); // ์ ์ญ
```

#### let๋ณด๋ค cont๋ฅผ ์ฌ์ฉํ๋ฉด ์ข์ ์ด์ 

๋ณ์์์ ๋ง์ ๊ฒ์ ๋ด์ ์ ์๋ค๋ณด๋ ์ฌํ ๋น์ ๊ฐ๋์ผ๋ก ์ ๊ทผํ๋ฉด ์ดํด๊ฐ ์ฝ์ต๋๋ค.

```javascript
// let๊ณผ const๋ ์ ์ธ๊ณผ ๋์์ ํ ๋นํฉ๋๋ค.(ํธ์ด์คํ์ ๊ฐ๋์ ์๋ฉด ์ข์ต๋๋ค.)
const person = {
  name: 'jung',
  age: 25,
};

// Error, const๋ ์ฌํ ๋น์ด ๊ธ์ง๋ฉ๋๋ค.
person = {
  name: 'jung',
  age: 25,
};

// ๊ฐ์ฒด์ ๊ฐ์ ๋ฐ๊พธ๊ธฐ ์ํด์ .์ผ๋ก ์ ๊ทผํฉ๋๋ค.
person.name = 'lee';
person.age = 20;

console.log(person);

// ๋ฐฐ์ด์ ์๋์ ๊ฐ์ต๋๋ค.
const person = [
  {
    name: 'jung',
    age: 25,
  },
];

// ๋ฐฐ์ด์ ๊ฐ์ ๋ณ๊ฒฝํ๋ ๋ฐฉ๋ฒ 2๊ฐ์ง
person[0] = {
  name: 'yong',
  age: 30,
};

person[0].name = 'yong';
person[0].age = 30;

// ์๋ก์ด ๊ฐ ์ถ๊ฐ
person.push({
  name: 'jung',
  age: 25,
});

// ์ด ์ธ์๋ pop(), shift() ๋ฑ์ด ์์ต๋๋ค. (์ฐพ์๋ณด๊ธฐ!)
```

#### ์ ์ญ ๊ณต๊ฐ ์ต์ํ

์ค๋ฌด๋  ํํ๋ก์ ํธ๋  ๋๊ตฐ๊ฐ์๊ฒ ์ ์ญ ๊ณต๊ฐ์ ์ต์ํ ํ๋ผ๋ ์๊ธฐ๋ฅผ ๋ค์ด๋ณธ ์  ์์ผ์ค ๊ฒ๋๋ค. ๋ณดํต ์๋์ ํด๋นํ๊ฒ ์ฃ !

- ๊ฒฝํ
- ๋๊ตฐ๊ฐ ์์ฑํด ๋์ blog ํน์ js ์ํ๊ณ์์ ์ง์
- ์จ๋ผ์ธ ๊ฐ์ ํน์ ์์ 
- ์ฌ์ ๋ฐ ๋ฉํ 

์ ์ญ ๊ณต๊ฐ์ด ๋ฌด์์ผ๊น์? Global์ด๋ผ๊ณ ๋ ํ๊ณ  Window๋ผ๊ณ ๋ ํฉ๋๋ค.

- window : ๋ธ๋ผ์ฐ์  ํ๊ฒฝ์์ ๋์๊ฐ.
- global : Node ํ๊ฒฝ์์ ๋์๊ฐ.

```javascript
// global.js 1
var globalVar = 'global';

// ์ ์ญ ์ด๊ธฐํ
var setTimeout = 'setTimeout';

// global.js 2
console.log(globalVar); // global

// ์ ์ญ ๊ฐ์ฒด์ ๋๋ ์ด๋ฅผ ์ฃผ๋ ํจ์
window.setTimeout(() => {
  console.log('1์ด');
}, 1000);

/*
์ ์ญ ๊ณต๊ฐ์ ํ์ฉํ๋ฉด ์ ์ญ ๊ณต๊ฐ์ ์ฌ์ฉํ๋ ์ฝ๋๋ผ๋ฆฌ ๊ฒน์น  ์ฐ๋ ค๊ฐ ์์ต๋๋ค.

์ ์ญ ๊ณต๊ฐ์์ ๋ง๋ค์ด์ง ํจ์ ์ด๋ฆ์ ์ ์ญ์ผ๋ก ์ค์ ํ๋ฉด ํด๋น ๋ฉ์๋์ ๋์์ด ๋์ด ์ ์ ๋์์ ํ์ง ๋ชปํ๋ ์ํฉ์ ๋ง๋ค ์ ์์ต๋๋ค.
*/

// ์ ์ญ ๊ณต๊ฐ์ ๋๋ฝํ๋ ์ฌ๋ก
const array = [10, 20, 30];

// index๋ ์ ์ญ ๊ณต๊ฐ์ ์ ์ฅ๋ฉ๋๋ค.(var)
for (var index = 0; index < array.length; index++) {
  // ... ์ฝ๋
}
```

๊ฒฐ๋ก !

- ์ ์ญ ๊ณต๊ฐ์ ์ต๋ํ ์ง์ํฉ๋๋ค.
- ์ด๋์๋ ์ ๊ทผ์ด ๊ฐ๋ฅํ๊ณ  ์ค์ฝํ ๋ถ๋ฆฌ์ ์ํ์ด ์์ต๋๋ค.

ํด๊ฒฐ

- ์ ์ญ ๋ณ์ X(var)
- ์ง์ญ ๋ณ์ O(let, const)
- window, global์ ์กฐ์ํ์ง ์์ต๋๋ค.
- IIFE, Module, closure, scope๋ฅผ ๋๋๋ ๋ฐฉ๋ฒ ๋ฑ

#### ์์ ๋ณ์ ์ ๊ฑฐํ๊ธฐ

ํน์  ๊ณต๊ฐ ์ค์ฝํ์์ ์ ์ญ๋ณ์์ฒ๋ผ ํ์ฉ๋๋ ๋ณ์๋ฅผ ์์ ๋ณ์๋ผ ์นญํ๊ฒ ์ต๋๋ค. ์์๋ ์๋์ ๊ฐ์ต๋๋ค.

```javascript
function getElements() {
  // const๋ก ์ ์ธํ์ง๋ง ํจ์ ๋ด๋ถ์์ ๋ดค์ ๋ ์ ์ญ ๋ณ์๋ก ์ฌ์ฉ๋๊ณ  ์์ต๋๋ค.
  const result = {}; // ์์ ๊ฐ์ฒด

  result.title = '์ ๋ชฉ';
  result.text = '๋ด์ฉ';
  result.value = '๊ฐ';

  /* ๋ชํํ๊ฒ ๋ณ๊ฒฝํ์ง๋ง ์ด๊ฒ๋ ์์ ๊ฐ์ฒด๋ก ๋ณผ ์ ์์ต๋๋ค. */
  const result = {
    title: '์ ๋ชฉ',
    text: '๋ด์ฉ',
    value: '๊ฐ',
  };

  /* ๋ ๋ชํํ๊ฒ ๋ณ๊ฒฝ, ๋ฐ๋ก ๋ฆฌํดํด์ฃผ๋ ํํ์๋๋ค. */
  return {
    title: '์ ๋ชฉ',
    text: '๋ด์ฉ',
    value: '๊ฐ',
  };
}

/*
๋๋ฒ์งธ ์ฌ๋ก - date time์ ๋ค๋ฃจ๋ ์ ํธ ํจ์
์ถ๊ฐ์ ์ธ ์คํ์ด ์๊ธด๋ค๋ฉด ๋ฌธ์ ๊ฐ ๋ฐ์ํ  ์ ์์ต๋๋ค.
๋ ์ง์ ๋ํ ์๊ตฌ์ฌํญ์ด ์๊ฒผ์ ๋
- ํจ์ ์ถ๊ฐ
- ํจ์ ์ ์ง๋ณด์ ์์ 
ํจ์๋ฅผ ์ ์ง๋ณด์ํ๋ค๋ฉด ๋ฌธ์ ๊ฐ ์๊ธธ ์ ์์ต๋๋ค.
-> ์์ญ, ์๋ฐฑ๊ฐ์ง ์ฌ์ฉ ๊ฒฝ๋ก๊ฐ ์์ ์ ์๊ธฐ ๋๋ฌธ์๋๋ค.
*/

// ์ด๊ธฐ ์ฝ๋
function getDateTime(targetDate) {
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
}

// ์์ ํ ์ฝ๋
function getDateTime(targetDate) {
  const month = targetDate.getMonth();
  const day = targetDate.getDate();
  const hour = targetDate.Hours();

  return {
    month: month > 10 ? month : '0' + month,
    day: day > 10 ? day : '0' + day,
    hour: hour > 10 ? hour : '0' + hour,
  };
}

// ํจ์ ์ถ๊ฐ, ์ง์์ ์ธ ์ถ์ํ๊ฐ ๊ฐ๋ฅํฉ๋๋ค.
function getDateTime() {
  const currentDateTime = getDateTime(new Date());
  computedKrDate();

  return {
    month: computedKrDate(currentDateTime.month) + '๋ถ ์ ',
    day: currentDateTime.day + '',
    hour: currentDateTime.hour + '',
  };
}

// ๋ ๋ค๋ฅธ ์ฌ๋ก
function genRandomNumber(min, max) {
  // ํจ์๋ ๋จ ํ๋์ ์ญํ ๋ง ํ๋๋ก ์์ฑํด์ผ ํฉ๋๋ค.
  const randomNumber = Math.floor(Math.random() * (max + 1) + min);

  return randomNumber;
}

// ๋ ๋ค๋ฅธ ์ฌ๋ก - ๋ช๋ นํ์ ๊ฐ๊น์ด ํจ์
function getSomeValue(params) {
  let tempVal = '';

  // ๋ก์ง ๋ด์์ temp์ ๊ฐ์ด ์์ฃผ ๋ฐ๋๋๋ค.
  for (let index = 0; index < array.length; index++) {
    temp = array[index];
    temp += array[index];
    temp -= array[index];
    temp *= array[index];
  }

  // temp๊ฐ์ ๋ฐ๋ผ ๋ถ๊ธฐ ์ฒ๋ฆฌ ๋ก์ง...
  if (temp) {
    // ... ์ฝ๋
  } else if (temp) {
    // ... ์ฝ๋
  }

  return temp;
}
```

##### ์์ ๋ณ์๋ฅผ ์ ๊ฑฐํ์!

- ๋ช๋ นํ์ผ๋ก ๊ฐ๋ํ ์ฝ๋๊ฐ ๋์ต๋๋ค.
- ์ด๋์ ์ด๋ป๊ฒ ์๋ชป๋์๋์ง ์๋ฌ ํธ๋ํน์ด ์ด๋ ต์ต๋๋ค.
- ์ถ๊ฐ์ ์ธ ์ฝ๋๋ฅผ ์์ฑํ๊ณ  ์ถ์ ์ ํน์ ๋น ์ง๊ธฐ ์ฝ์ต๋๋ค.(ex: temp ๊ฐ์ ๋ณ๊ฒฝ...)

์ด๋ป๊ฒ ํ๋ฉด ์ข์๊น?

- ํจ์๋ฅผ ์ต๋ํ ์ชผ๊ฐญ๋๋ค.
- ๋ฐ๋ก return ํฉ๋๋ค.
- ๊ณ ์ฐจํจ์(map, filter, reduce ๋ฑ)๋ฅผ ์ฌ์ฉํฉ๋๋ค.
- ํจ์ํ ํ๋ก๊ทธ๋๋ฐ์ผ๋ก ๋ฐ๊ฟ๋ณด์!

#### ํธ์ด์คํ ์ฃผ์!

```javascript
/*
ํธ์ด์คํ์ ์ ์ธ๊ณผ ํ ๋น์ด ๋ถ๋ฆฌ๋ฉ๋๋ค.
๋ฐํ์ ์๊ธฐ ์ฆ, ๋์ํ  ๋๋ฅผ ์๋ฏธํฉ๋๋ค.
์ฝ๋๋ฅผ ์์ฑํ  ๋๋ ์ค์ฝํ๋ฅผ ์์ํ๋๋ฐ ๋ฐํ์์์๋ ์์๋๋ก ๋์ง ์๋ ๊ฒฝ์ฐ๊ฐ ์์ต๋๋ค.
*/

var global = 0;

function outer() {
  // ์ ์ธ๊ณผ ํ ๋น์ด ๋ถ๋ฆฌ๋ ์ํฉ์๋๋ค.
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

// ๋ ๋ค๋ฅธ ์ฌ๋ก
function duplicatedVar() {
  var a;

  console.log(a); // undefined

  var a = 100;

  console.log(a); // 100
}

duplicatedVar();

// ๋ ๋ค๋ฅธ ์ฌ๋ก - ํจ์
var sum;

// ๋ณ์์ ํ ๋นํ  ๊ฒฝ์ฐ ๋์ํฉ๋๋ค.
sum = function () {
  return 1 + 2;
};

console.log(sum());

// ํจ์๋ ํธ์ด์คํ์ด ๋ฉ๋๋ค.
function sum() {
  return 1 + 2;
}

console.log(sum());

/*
var ๋ณ์ ์ ์ธ -> ํธ์ด์คํ ๋ฉ๋๋ค.
function์ผ๋ก var ๋ณ์๋ช๊ณผ ๋์ผํ๊ฒ ์ ์ธ -> ๊ธฐ์กด ํธ์ด์คํ๋ var ๋ณ์์ ๋ฎ์ด์์๋๋ค.
var ๋ณ์์ ๊ฐ๊น์ง ํ ๋นํ๊ฒ ๋๋ค๋ฉด ์ ์์ ์ผ๋ก ๋ถ๋ฆฌ๊ฐ ๋ฉ๋๋ค.

์ฆ, ํจ์ ์ ์ธ์ const๋ฅผ ํ์ฉํด ์ ์ธํ๋ ๋ฐฉ๋ฒ์ ์ถ์ฒํฉ๋๋ค.
*/

// ํจ์ ํํ์
const sum = function () {
  return 1 + 2;
};
// or
const sum = () => {
  return 1 + 2;
};
```

๋ฐํ์์ ์ ์ธ์ด ์ต์๋จ์ผ๋ก ๋์ด์ฌ๋ ค์ง๋ ๊ฒ์ด ํธ์ด์คํ์ด๋ฉฐ, ํธ์ด์คํ์ ์ฝ๋๋ฅผ ์์ฑํ  ๋ ์์ธกํ  ์ ์๋ ์๋ฌ๋ฅผ ๋ถ๋ฌ์ฌ ์ ์์ต๋๋ค.

- var -> let, const ์งํฅํฉ๋๋ค.
- ํจ์ ์กฐ์ฌ -> ํจ์ ํํ์์ ์ฌ์ฉ ๊ถ์ฅํฉ๋๋ค.

#### ํ์ ๊ฒ์ฌ

```javascript
// typeof๋ ํผ์ฐ์ฐ์์ ํ์์ ๊ฒ์ฌํด '๋ฌธ์์ด'๋ก ๋ฐํํด์ค๋๋ค. - ํจ์ํ์ผ๋ก๋ ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค.
typeof '๋ฌธ์์ด';
typeof true;
typeof undefined;
typeof 123;
typeof Symbol();

/*
PRIMITIVE(์์๊ฐ) vs REFERENCE(์๋ฃํ)
*/

// PRIMITIVE
typeof '๋ฌธ์์ด';
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

// REFERENCE ํ์์ผ๋ก ๋ง๋ค๋ฉด typeof๊ฐ ๊ฐ์งํ์ง ๋ชปํฉ๋๋ค.
const str = new String('๋ฌธ์์ด');
typeof str; // object

typeof null; // null === object -> ์๋ฐ์คํฌ๋ฆฝํธ์์ ์ธ์ ํ ์ค๋ฅ์๋๋ค.

// JS๋ ๋์ ์ผ๋ก ๋ณํ๋ ์ธ์ด์ด๊ธฐ์ ํ์๋ ๋์ ์ผ๋ก ๋ณํจ.
// instanceof ์ฐ์ฐ์๋ ๊ฐ์ฒด์ ํ๋กํ ํ์ ์ฒด์ธ์ ๊ฒ์ฌ
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

// ๊ฒฐ๊ตญ ์ต์์์ Object ํ์์ด ์์ด ๊ฒ์ฌํ๊ธฐ ์ด๋ ต์ต๋๋ค.
arr instanceof Array; // true
func instanceof Function; // true
date instanceof Date; // true

arr instanceof Object; // true
func instanceof Object; // true
date instanceof Object; // true

// ๊ทธ๋์ ํ์๊ฒ์ฌ ๋ฐฉ๋ฒ์ด ๋ ์์ต๋๋ค.
Object.prototype.toString.call('');
Object.prototype.toString.call(new String());
Object.prototype.toString.call(arr);
Object.prototype.toString.call(date);
```

- JS๋ ๋์ ์ธ ์ธ์ด๋ผ ํ์๋ ๋์ ์๋๋ค.
- ๊ทธ๋์ ํ์ ๊ฒ์ฌ๊ฐ ์ด๋ ต์ต๋๋ค.
- ์ํฉ์ ๋ง๋ ํ์ ๊ฒ์ฌ ๋ฐฉ๋ฒ๊ณผ ์ฃผ์๋ฅผ ์ฐพ์์ผ ํฉ๋๋ค. (์ธ์ฐ๊ธฐ๋ ํ๋ค์ด์)
- Primitive vs reference ->
  - typeof, instanceof ๋ฑ ํ์ ๊ฒ์ฌ ๋ฐฉ๋ฒ์ด ์์ต๋๋ค.
  - - Object.prototype.~~~

#### undefined & null

```javascript
!null;
!!null;
null === false; // false
!null === true; // true
// ์ํ์ ์ผ๋ก null -> 0์ผ๋ก ์ทจ๊ธ

null + 123; // 123

// ์ ์ธํ์ง๋ง ๊ฐ์ ์ ์๋์ง ์๊ณ  ํ ๋น X
let varb;
typeof varb; // undefined
undefined + 10; // NaN
!undefined; // true
undefined == null; // true
undefined === null; // false
!undefined === !null; // true
```

undefined, null -> ๊ฐ์ด ์๊ฑฐ๋ ์ ์๋์ง ์์, ์ฆ ๋ช์์ ์ธ ํํ์๋๋ค.

undefined -> NaN
null -> 0

undefined -> type undefined
null -> object

#### eqeq ์ค์ด๊ธฐ

- Equality -> == (๋์จ)
- Strict equality -> === (์๊ฒฉ)

== ์ ์ด์ฉํด ๋น๊ตํ๋ฉด type casting์ด ๋ฐ์ํด์ '1'๊ณผ 1์ด ๊ฐ๋ค๊ณ  ๋์ต๋๋ค.

```javascript
'1' == 1; // true
1 == true; // true
```

#### ํ๋ณํ ์ฃผ์ํ๊ธฐ

```javascript
'1' == 1; // ๋์จํ ๊ฒ์ฌ -> ํ ๋ณํ
1 == true;
0 == false;

// ์๋ฌต์  ํ๋ณํ
11 + '๋ฌธ์'; // '11 ๋ฌธ์์ ๊ฒฐํฉ'
!!'๋ฌธ์์ด'; // true
!!''; // false

// ๋ช์์ ์ผ๋ก ์์ ํ์.
String(11 + '๋ฌธ์'); // '11 ๋ฌธ์์ ๊ฒฐํฉ'
Boolean('๋ฌธ์์ด'); // true
Boolean(''); // false

parseInt('9.9999', 10); // 9
```

- ์ฌ์ฉ์ -> ๋ช์์ ์ธ ๋ณํ(ํ์)
- JS -> ์๋ฌต์ ์ธ ๋ณํ(ํ์)

์ฆ ๋ช์์ ์ธ ๋ณํ์ผ๋ก ์์ธกํ๊ธฐ ์ฌ์ด ์ฝ๋๋ก ์์ฑํ๋ ๊ฒ ์ข์ต๋๋ค.

#### isNaN

IEEE 754 (๋ถ๋์์์  ๋ฐฉ์) ์ฑํ๋์ต๋๋ค.

```javascript
// JS ์ต๋ ์ ์
Number.MAX_SAFE_INTEGER;

// JS ์ ์ ๊ฒ์ฌ
Number.isInteger;

// isNaN -> is Not a Number -> ์ซ์๊ฐ ์๋๋ค.
typeof 123 === 'number'; // true
typeof 123 !== 'number'; // false
isNaN(123); // false -> ์ซ์๊ฐ ์ซ์๊ฐ ์๋๋ค.

// ES2015+
isNan(123 + 'test'); // true
Number.isNaN(123 + 'test'); // false

isNaN; // ๋์จํ ๊ฒ์ฌ
Number.isNaN; // ์๊ฒฉํ ๊ฒ์ฌ
```

## ๋ค์ด๋ฐ

#### Min - Max

```javascript
/*
min - max
1. ์ต์๊ฐ์ ์ต๋๊ฐ์ ๋ค๋ฃน๋๋ค.
2. ์ต์๊ฐ์ ์ต๋๊ฐ ํฌํจ ์ฌ๋ถ๋ฅผ ๊ฒฐ์ ํด์ผ ํฉ๋๋ค. (์ด์ - ์ด๊ณผ / ์ดํ - ๋ฏธ๋ง)
3. ํน์ ๋ค์ด๋ฐ์ ์ต์๊ฐ๊ณผ ์ต๋๊ฐ ํฌํจ ์ฌ๋ถ๋ฅผ ํฌํจํฉ๋๋ค.
*/

function genRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ์์
const MAX_AGE = 20;

function isAdult(age) {
  // ์ต์๊ฐ, ์ต๋๊ฐ (ํฌํจ๋๋์ง vs ์๋๋์ง)
  // ์ด์, ์ด๊ณผ, vs ์ดํ, ๋ฏธ๋ง
  if (age >= 20) {
    // ... ์ฝ๋
  }
}

// ์ต๋, ์ต์ ์์๋ฅผ ์ค์ ํฉ๋๋ค.
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

genRandomNumber(MIN_NUMBER, MAX_NUMBER);
```

#### Begin - End

```javascript
// ๋งค๊ฐ๋ณ์๋ฅผ ํตํด ํจ์์ ์ด๋ค ์ธ์๋ฅผ ๋ฃ์ด์ผ ํ๋์ง ํ์ ๊ฐ๋ฅํฉ๋๋ค.
function reservationDate(beginDate, endDate) {
  // ... ์ฝ๋
}

reservationDate('YYYY-MM-DD', 'YYYY-MM-DD');
```

์์์ ๋์ผํ๋ ๋์ ๋ค๋ฅผ ๊ฒฝ์ฐ์ด๋ค. (Ex : ์์ ์์ฝ ๋ฑ)

#### First - Last

```javascript
/*
first - last
ํฌํจ๋ ์ ๋์ ์๋ฏธํฉ๋๋ค.
๋ถํฐ ~~~ ๊น์ง
*/

const students = ['์์ด', '๋น', '์จ'];

function getStudents(firstStudent, lastStudent) {
  // ... ์ฝ๋
}

getStudents('์์ด', '์จ');
```

#### Prefix - Suffix

- Prefix - ์ ๋์ฌ
- Suffix - ์ ๋ฏธ์ฌ

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
- s(๋ณต์), (๋จ์)

**Prefix์ Suffix๋ ์ผ๊ด์ฑ์ ๊ฐ์ง ์ ์๋ ์์ฃผ ์ข์ ์์์๋๋ค.**

#### ๋งค๊ฐ๋ณ์์ ์์๊ฐ ๊ฒฝ๊ณ!

```javascript
/*
1. ๋งค๊ฐ๋ณ์๋ฅผ 2๊ฐ๊ฐ ๋์ง ์๋๋ก ๋ง๋ญ๋๋ค.
2. arguments, rest parameter
3. ๋งค๊ฐ๋ณ์๋ฅผ ๊ฐ์ฒด์ ๋ด์์ ๋๊น๋๋ค.
4. ๋ฉํํ๋ ํจ์
*/

// ๊ฐ์ฒด๋ก ๋ฐ๊ฑฐ๋ ์ ๊ฐ ์ฐ์ฐ์ ํน์ arg๋ก ๋ฐ๋๋ค.
function someFunc({ someArg1, someArg2 }) {}
function someFunc(...someArg) {}
function someFunc(someArg, someArg) {}

// ๋งค๊ฐ๋ณ์๋ก ์ด๋์ ๋ ํจ์๊ฐ ์ด๋ค ๊ธฐ๋ฅ์ ํ๋์ง ์ ์ถ ๊ฐ๋ฅํฉ๋๋ค.
genRandomNumber(1, 50);
getDates('2022-01-01', '2022-02-01');
genShuffleArray(1, 5);
```

## ์ฐ์ฐ์

#### ๊ฐ์๋ฌธ

๋ฌธ๋ฒ ์ ์ : ๋ง์ ๊ตฌ์ฑ ๋ฐ ์ด์ฉ์์ ๊ท์น. ๋๋ ๊ทธ๊ฒ์ ์ฐ๊ตฌํ๋ ํ๋ฌธ

์ค์ํ ์ด์  - ๊ฐ๋ฐ์๋ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด๋ฅผ ์ฌ์ฉํ๊ธฐ ๋๋ฌธ์๋๋ค. ์ปดํจํฐ๋ฅผ ์ดํด์ํค์ง ๋ชปํ๋ฉด ๋ฌธ๋ฒ ์๋ฌ๋ฅผ ์ผ์ผํฌ ์ ๋ฐ์ ์์ต๋๋ค.

๋ฌธ๋ฒ ์๋ฌ -> ์ฅ์  -> ์๋น์ค ๋ง๋น๊น์ง...

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
// ๋ฌธ์ ์๋ชป ์๋ ฅํ ๊ฒฝ์ฐ
// This JSX:
<div id={if (condition) { 'msg' }}>Hello World!</div>

// Is transformed to this JS:
React.createElement("div", {id: if (condition) { 'msg' }}, "Hello World!");

// ์ผํจ์ฐ์ฐ์๋ ์ฌ์ฉ ๊ฐ๋ฅ
ReactDOM.render(<div id={condition ? 'msg' : null}>Hello World!</div>, mountNode);
```

```javascript
// ๋ผ๋ฆฌ์ฐ์ฐ์ ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค.
// ์ฆ์ ์คํ ํจ์ ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค.
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
// ์ฆ์ ์คํ ํจ์๋ก ๊ฐ์ธ ํฌ๋ฌธ์ผ๋ก ์์ ๋ณ์์ ๊ฐ์ ๋์ ์์ผ ๋ฐํํ๋ ์์ข์ ์์์๋๋ค.
function ReactComponent() {
  return (
    <tbody>
      {
        // ๊ธฐ์กด ์ฝ๋
        (() => {
          const rows = [];

          for (let i = 0; i < objectRows.length; i++) {
            rows.push(<ObjectRow key={i} data={objectRows[i]} />);
          }

          return rows;
        })()
      }

      {
        // ์์ ํ ์ฝ๋, ๊ฐ๊ณผ ์๋ง ๋ค์ด๊ฐ๋๋ค.
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
        // ์์ ์  ์ฝ๋
        (() => {
          if (conditionOne) return <span>One</span>;
          if (conditionTwo) return <span>Two</span>;
          else conditionOne;

          return <span>Three</span>;
        })()
      }

      {
        // ์์ ํ ์ฝ๋
        conditionOne && <span>One</span>
      }
      {conditionTwo && <span>Two</span>}
      {conditionTwo && <span>Three</span>}
    </div>
  );
}
```

React์์ ๊ณ ์ฐจ ํจ์๋ฅผ ํ์ฉํด์ผ ํฉ๋๋ค.

#### ์ผํญ์ฐ์ฐ์ ๋ค๋ฃจ๊ธฐ

์ผํญ์ฐ์ฐ์ ์ฌ์ฉ์ ์์ด ์ผ๊ด์ฑ์ด ํ์ํฉ๋๋ค. ๊ทธ๋ฆฌ๊ณ  ์ผํญ์ฐ์ฐ์๋ 3๊ฐ์ 'ํผ'์ฐ์ฐ์๊ฐ ํ์ํ๋ฉฐ, ์กฐ๊ฑด ? ์ฐธ(์) : ๊ฑฐ์ง(์) ์ผ๋ก ์ด๋ฃจ์ด์ ธ ์์ต๋๋ค.

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
  // ์กฐ๊ฑด์ ์ ์ํด๋ณธ ํ ์ผ์ด์ค๊ฐ ๋ง๋ค๋ฉด switch๋ฌธ์ ๊ณ ๋ คํด๋ด๋๋ค.
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
    case condition: // condition1~3 ๊ฒฝ์ฐ
      return 'conditionValue'; // ์ปจ๋์ ๊ฐ
    default:
      value4; // ์์ธ
  }
}
```

```javascript
// ์ฐ์  ์์๋ ๊ดํธ'()'๋ก ํ๋ฒ ๊ฐ์ธ์ฃผ๋ฉฐ ๊ฐ๋์ฑ์ ๋์ฌ์ค๋๋ค.
const example = condition1 ? (a === 0 ? 'zero' : 'positive') : 'negative';
```

```javascript
// ์ผํญ ์ฐ์ฐ์์ ์ข์ ์์์๋๋ค.
const welcomeMessage = (isLogin) => {
  const name = isLogin ? getName() : '์ด๋ฆ์์';

  return `์๋ํ์ธ์ ${name}`;
};
```

```javascript
// ์ข์ง ์์ ์
// ์ผํญ์ฐ์ฌ์๋ ๊ฐ ํน์ ์์ ์์ฑํด ์ฃผ๋ ๊ฒ ์ข์ต๋๋ค.
// ๋ alert์ ๋ฐํ์ undefined์ด๊ธฐ ๋๋ฌธ์ ์ผํญ์ฐ์ฐ์๋ณด๋ค if๋ฌธ์ ์์ฑํด ์ฃผ๋ ๊ฒ ์ข๋ค๊ณ  ๋ด๋๋ค.
// ์์ฝ๋ฉ or if๋ฌธ ๊ฐ์ธ ์ทจํฅ~

function alertMessage(isAdult) {
  isAdult ? alert('์์ฅ์ด ๊ฐ๋ฅํฉ๋๋ค.') : alert('์์ฅ์ด ๋ถ๊ฐ๋ฅํฉ๋๋ค.');

  if (isAdult) {
    // ... ์ฝ๋
  } else {
    // ... ์ฝ๋
  }
}

// ์ด๋ฐ ์์๋ ์์ต๋๋ค.
function alertMessage(isAdult) {
  return isAdult ? '์์ฅ ๊ฐ๋ฅ' : '์์ฅ ๋ถ๊ฐ๋ฅ';
}
```

#### Truthy & Falsy

```javascript
if ("string".length > 0)
if (!isNaN(10))
if (boolean === true)

// ์ฐธ์ด๊ธฐ ๋๋ฌธ์ Truthy๊ฐ ์์ด๋ ๋์ํจ
if ("string".length)
if (10)
if (boolean)
```

##### ์ฐธ ๊ฐ์ ๊ฐ

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

##### ๊ฑฐ์ง ๊ฐ์ ๊ฐ

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
    return '์ฌ๋์ด ์๋ค์';
  }

  return '์๋ํ์ธ์ ' + name + '๋';
}

// ์์ ํ ์ฝ๋
function printName(name) {
  if (!name) {
    return '์ฌ๋์ด ์๋ค์';
  }

  return '์๋ํ์ธ์ ' + name + '๋';
}
```

```javascript
/**
 * Truthy (์ฐธ ๊ฐ์ ๊ฐ)
 */
function example({ isLogin }) {
  return isLogin ? '์ฑ๊ณต' : '์คํจ';
}

function example({ content }) {
  return content.length > 0 ? content : null;
}
```

#### ๋จ์ถ ํ๊ฐ

```javascript
// AND
true && true && '๋๋ฌ O';
true && false && '๋๋ฌ X';

// OR
false || false || '๋๋ฌ O';
true || true || '๋๋ฌ X';
```

```javascript
function userData(user) {
  if (user.name) {
    return user.name;
  } else {
    return 'X';
  }

  // ์ด๋ ๊ฒ ์ฌ์ฉ ๊ฐ๋ฅ, OR ๋จ์ถ ํ๊ฐ
  return user.name || 'X';
}
```

```javascript
function favoriteDog(someDog) {
  let favoriteDog;

  if (someDog) {
    favoriteDog = dog;
  } else {
    favoriteDog = '๋์น';
  }

  return favoriteDog + ' ์๋๋ค.';

  // ์ด๋ ๊ฒ ์ฌ์ฉ ๊ฐ๋ฅ
  return (someDog || '๋์น') + '์๋๋ค.';
}
```

```javascript
const getActiveUserName = (user, isLogin) => {
  if (isLogin) {
    if (user) {
      if (user.name) {
        return user.name;
      } else {
        return '์ด๋ฆ์์';
      }
    }
  }

  // ์์ ํ ์ฝ๋
  if (isLogin && user) {
    if (user.name) {
      return user.name || '์ด๋ฆ์์';
    }
  }
};
```

## ์กฐ๊ฑด๋ฌธ

#### else if & else ํผํ๊ธฐ

else if๋ฅผ ์ด์ด์ ์ฌ์ฉํ๊ธฐ๋ณด๋ค else์ if๋ฅผ ๋ถ๋ฆฌํด์ฃผ๊ณ  ์กฐ๊ฑด์์ด ๋ง์์ง๋ฉด switch ๋ฌธ์ ํ์ฉํฉ๋๋ค.

else if๋ ๊ฒฐ๊ตญ ๋ ๋ค๋ฅธ if๋ฌธ์ ์ฌ์ฉํ๋ ๊ฑฐ๋ ๋ ๊ฐ์ if๋ก ๋ถ๋ฆฌํด ์ฃผ๋ ๊ฒ๋ ์ข์ ๋ฐฉ๋ฒ์๋๋ค.

```javascript
const x = 1;

if (x >= 0) {
  return 'x๋ 0๊ณผ ๊ฐ๊ฑฐ๋ ํฌ๋ค';
} else if (x > 0) {
  return 'x๋ 0๋ณด๋ค ํฌ๋ค';
} else {
  return 'Else';
}

if (x >= 0) {
  return 'x๋ 0๊ณผ ๊ฐ๊ฑฐ๋ ํฌ๋ค';
} else {
  if (x > 0) {
    return 'x๋ 0๋ณด๋ค ํฌ๋ค';
  }
}
```

#### else ํผํ๊ธฐ

else์ ๊ฒฝ์ฐ if ๋ค์์ ๋ฌด์กฐ๊ฑด ๋์ํ๋ ์๋ตํด๋ ์ข์ต๋๋ค.

ํ์ง๋ง, ๋ฐํ์ด ์๋ ๋ฐ์ดํฐ ๊ฐ๊ณต์ ์์ด์ A ๋๋ B ๊ฒฝ์ฐ์ ๋ฐ์ดํฐ๊ฐ ํ์ํ๋ค๋ฉด else๋ฅผ ๋ถ์ฌ ๋์์ ํ์ง ์๋๋ก ์ค์ ํด์ค์ผ ํฉ๋๋ค.

```javascript
function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return '์ด๋ฆ์์';
  }

  // ์ด๋ ๊ฒ ์ฌ์ฉ ๊ฐ๋ฅํฉ๋๋ค.
  if (user.name) {
    return user.name;
  }

  return '์ด๋ฆ์์';

  // ์ฃผ์. ์ด๋ฐ ๊ฒฝ์ฐ์๋ yh ์ดํ new name์ด ์๋ ฅ๋์ด ์๋ํ ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋์ง ์์ ์ ์์ต๋๋ค.
  if (user.name) {
    user.name = 'yh';
  }

  user.name = 'new name';
}
```

```javascript
// age๊ฐ 20 ๋ฏธ๋ง์ ํน์ ํจ์ ์คํ
function getHelloCustomer(user) {
  if (user.age < 20) {
    report(user);
  } else {
    return '์๋ํ์ธ์.';
  }

  // ์ธ์ฌ๋ ์ด๋ ํ ๊ฒฝ์ฐ์๋ ์ถ๋ ฅํด์ผ ํ๊ธฐ์ else ์ง์ฐ๊ธฐ
  if (user.age < 20) {
    report(user);
  }

  return '์๋ํ์ธ์.';
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

        return '๋ก๊ทธ์ธ ์ฑ๊ณต';
      }
    } else {
      throw new Error('No Token');
    }
  }
}

// ์์ ํ ์ฝ๋
function loginService(isLogin, user) {
  // Early Return, ํจ์ ๋ฏธ๋ฆฌ ์ข๋ฃ ๋ถ๊ธฐ ์ฒ๋ฆฌ์๋๋ค.
  if (isLogin) {
    return;
  }

  if (checkToken()) {
    throw new Error('No Token');
  }

  if (!user.nickName) {
    return registerUser(user);
  }

  // ์คํ ๋ถ๋ถ์ด ๋ชํํด์ง๋๋ค.
  login();
}

function login() {
  refreshToken();

  return '๋ก๊ทธ์ธ ์ฑ๊ณต';
}
```

```javascript
function ์ค๋ํ๋ฃจ(condition, weather, isJob) {
  if (condition === 'GOOD') {
    ๊ณต๋ถ();

    ๊ฒ์();

    ์ ํ๋ธ๋ณด๊ธฐ();

    if (weather === 'GOOD') {
      ์ด๋();

      ๋นจ๋();
    }

    if (isJob === 'GOOD') {
      ์ผ๊ฐ์๋ฌด();

      ์กฐ๊ธฐ์ทจ์นจ();
    }
  }
}

// ์์ ํ ์ฝ๋
function ์ค๋ํ๋ฃจ(condition, weather, isJob) {
  // ์์กด์ฑ์ ๋ฐ๋ผ ๋ถ๊ธฐ๋ฅผ ๋ฐ๋ก ๋บ์ง ์๋๋ฉด ํ๋์ ๋ถ๊ธฐ์์ ๋ชจ๋  ๋ก์ง์ ์ฒ๋ฆฌํ ์ง ํ๋จํด์ผ ํฉ๋๋ค.
  // ์๋ง์ Early return์ ๋ง๋๋ ๊ฒ์ ์ข์ง ์์ผ๋ ํ๋์ ์กฐ๊ฑด์๋ง ์์กด์ฑ์ด ๊ฑธ๋ ค์์ ๋ ์ฌ์ฉํ๋ฉด ๋ช์์ ์ผ๋ก ๋ณํ  ์ ์์ต๋๋ค.
  if (condition !== 'GOOD') {
    return;
  }

  ๊ณต๋ถ();
  ๊ฒ์();
  ์ ํ๋ธ๋ณด๊ธฐ();

  if (weather === 'GOOD') {
    return;
  }

  ์ด๋();
  ๋นจ๋();

  if (isJob === 'GOOD') {
    return;
  }

  ์ผ๊ฐ์๋ฌด();
  ์กฐ๊ธฐ์ทจ์นจ();
}
```

#### ๋ถ์ ์กฐ๊ฑด๋ฌธ ์ง์ํ๊ธฐ

- ์๊ฐ์ ์ฌ๋ฌ๋ฒ ํด์ผ ํ  ์ ์์ต๋๋ค.
- ํ๋ก๊ทธ๋๋ฐ ์ธ์ด ์์ฒด๋ก if๋ฌธ์ด ์ฒ์๋ถํฐ ์ค๊ณ  true๋ถํฐ ์คํ์ํต๋๋ค.

๋ถ์ ์กฐ๊ฑด๋ฌธ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ

- Early Return
- Form Validation
- ๋ณด์ ํน์ ๊ฒ์ฌํ๋ ๋ก์ง

```javascript
if (!isNaN(3)) {
  console.log('์ซ์์๋๋ค');
}

function isNumber(num) {
  return !Number.isNaN(num) && typeof num === 'number';
}

if (isNumber(3)) {
  console.log('์ซ์์๋๋ค');
}
```

```javascript
// ์ถ์ฒํ์ง ์๋ ๋ฐฉ๋ฒ
const isCondition = true;
const isNotCondition = false;

if (!isCondition) {
  console.log('๊ฑฐ์ง์ธ ๊ฒฝ์ฐ์๋ง ์คํ');
}

if (!isNotCondition) {
  console.log('๊ฑฐ์ง์ธ ๊ฒฝ์ฐ์๋ง ์คํ');
}
```

## ๊ธฐ๋ณธ๊ฐ ์ง์ 

#### Default case ๊ณ ๋ คํ๊ธฐ

๊ธฐ๋ณธ๊ฐ์ ์ ํด๋๋ ๊ฒฝ์ฐ๋ฅผ ์๊ฐํด์ผ ํฉ๋๋ค.

```javascript
function sum(x, y) {
  return x + y;
}

// ๋ํดํธ๊ฐ ์ถ๊ฐ
function sum(x, y) {
  x = x || 1;
  y = y || 1;

  return x + y;
}

// ๋งค๊ฐ๋ณ์์ ์ถ๊ฐ
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

// default 'div' ์ง์ 
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
    case '์์์ผ':
      return;
    case 'ํ์์ผ':
      return;
    case '์์์ผ':
      return;
    case '๋ชฉ์์ผ':
      return;
    case '๊ธ์์ผ':
      return;
    case 'ํ ์์ผ':
      return;
    case '์ผ์์ผ':
      return;
    default:
      throw Error('');
  }
}

registerDay('์ใน์์ผ'); // ์คํ ์๋ ฅ์ ๊ฒฝ์ฐ๋ฅผ ์๊ฐํด์ ์ฒ๋ฆฌํด์ค์ผ ํฉ๋๋ค.
```

```javascript
// parseInt ํจ์๋ฅผ ๋ ํ๋์ ํจ์๋ก ๋ง๋ค์ด ๋น ๊ฐ์ด ๋ค์ด๊ฐ๋ ๊ธฐ๋ณธ๊ฐ์ผ๋ก ๊ณ ์ ํด๋๋ ํจ์์๋๋ค.
function safeParseInt(number, radix) {
  return parseInt(number, radix || 10);
}
```

#### ๋ช์์ ์ธ ์ฐ์ฐ์ ์ฌ์ฉ ์งํฅํ๊ธฐ

'()'๋ฅผ ํตํด ์ฐ์ฐ์ ์ฐ์  ์์๋ฅผ ํํํด์ค๋๋ค.

- ex ๋ชธ๋ฌด๊ฒ % (์ ์ฅ \* ์ ์ฅ)

์ฐ์  ์์๋ฅผ ํํํ๋ฉด ์์ธก ๊ฐ๋ฅํ๊ณ  ๋๋ฒ๊น ํ๊ธฐ ์ฝ์ต๋๋ค.

```javascript
let number;

function increment() {
  number--;
  --number;

  // ํ์ด์ ์ฌ์ฉํด์ฃผ๋ ๊ฒ ๊ฐ๋์ฑ์ด ์ข์ต๋๋ค.
  number = number - 1;
}

function increment() {
  number++;
  ++number;

  // ํ์ด์ ์ฌ์ฉํด์ฃผ๋ ๊ฒ ๊ฐ๋์ฑ์ด ์ข์ต๋๋ค.
  number = number + 1;
}
```

#### Nullish coalescing operator

๋ ๋ณํฉ ์ฐ์ฐ์๋ฅผ ์ฌ์ฉ์์ null, undefined๋ง ํ๊ฐํ๋ค๋ ๊ฒ์ ๊ผญ ๊ธฐ์ตํ๊ณ  ์ฌ์ฉํฉ์๋ค.

```javascript
function createElement(type, height, width) {
  const element = document.createElement(type || 'div');

  element.style.height = (height || 10) + 'px';
  element.style.width = (width || 10) + 'px';

  return element;
}

// 0์ falsy๋ก ์ฒ๋ฆฌ๋๊ธฐ ๋๋ฌธ์ OR์์ ๊ฑธ๋ฆฌ๊ฒ ๋ฉ๋๋ค.
createElement('div', 0, 0);

// ?? ์ฐ์ฐ์๋ null or undefined๋ง ํ๊ฐํฉ๋๋ค. ๋ ๋ณํฉ ์ฐ์ฐ์

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
  // Early Return์ ์ฌ์ฉํ  ๋๋ ๋ ๋ณํฉ ์ฐ์ฐ์๋ฅผ ๊ณ ๋ คํด์ ๋ฃ์ด์ผ ํฉ๋๋ค.
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
null || undefined ?? "foo"; // ์๋ฌ ๋ฐ์. ์ฌ๋๋ค์ ์ฆ์ ์ค์๋ก ์ธ์ด์์ ๊ท์ ๋ฅผ ํ์ต๋๋ค.
(null || undefined) ?? "foo"; // ํด๊ฒฐ. OR ์ฐ์ฐ์๋ ์ฐ์ ์์๊ฐ ๋ฎ์ต๋๋ค.
```

#### ๋๋ชจ๋ฅด๊ฐ์ ๋ฒ์น

- true is not true
- false is not false

```javascript
const isValidUser = false;
const isValidToken = false;

// ๋ก๊ทธ์ธ ์ฑ๊ณต์ ์คํจ๋ก ๋ฐ๊พธ๋ ๊ณผ์ 
if (isValidToken && isValidUser) {
  console.log('๋ก๊ทธ์ธ ์ฑ๊ณต!');
}

if (!(isValidToken && isValidUser)) {
  console.log('๋ก๊ทธ์ธ ์คํจ!');
}

if (!isValidToken || !isValidUser) {
  console.log('๋ก๊ทธ์ธ ์คํจ!');
}
```
