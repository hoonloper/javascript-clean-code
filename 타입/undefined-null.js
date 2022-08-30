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
