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
