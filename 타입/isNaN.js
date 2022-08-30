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
