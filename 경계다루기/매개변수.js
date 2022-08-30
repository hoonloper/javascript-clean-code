/*
1. 매개변수를 2개가 넘지 않도록 만든다.
2. arguments, rest parameter
3. 매개변수를 객체에 담아서 넘긴다.
4. 랩핑하는 함수
 */

// 객체로 받거나 전개 연산자 혹은 arg로 받는다.
function someFunc({ someArg1, someArg2 }) {}
function someFunc(...someArg) {}
function someFunc(someArg, someArg) {}

// 매개변수로 어느정도 유추 가능
genRandomNumber(1, 50);
getDates("2022-01-01", "2022-02-01");
genShuffleArray(1, 5);
