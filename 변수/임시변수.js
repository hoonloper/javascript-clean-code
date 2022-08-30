function getElements() {
    // const로 선언했지만 함수가 커진다면, 함수 내부에서 봤을 때 전역 변수로 사용되고 있음.
    const result = {}; // 임시 객체

    title = document.querySelector('.title')
    text = document.querySelector('.text')
    value = document.querySelector('.value')
    
    /* 명확하게 변경 */
    const result = {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value')
    }; // 임시 객체

    /* 더 명확하게 변경 */
    return {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value')
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
    /* 기존 코드
    let month = targetDate.getMonth();
    let day = targetDate.getDate();
    let hour = targetDate.Hours();

    month = month > 10 ? month : '0' + month;
    day = day > 10 ? day : '0' + day;
    hour = hour > 10 ? hour : '0' + hour;

    return {
        month, day, hour
    };
    */

    // 첫번째 수정
    const month = targetDate.getMonth();
    const day = targetDate.getDate();
    const hour = targetDate.Hours();

    return {
        month:month > 10 ? month : '0' + month,
        day:day > 10 ? day : '0' + day,
        hour: hour > 10 ? hour : '0' + hour
    };
}

// 함수 추가, 지속적인 추상화 가능함.
function getDateTime() {
    const currentDateTime = getDateTime(new Date())
    computedKrDate();

    return {
        month: computedKrDate(currentDateTime.month) + '분 전',
        day: currentDateTime.day + '',
        hour: currentDateTime.hour + ''
    }
}

// 또 다른 사례
function genRandomNumber(min, max) {
    // 함수는 단 하나의 역할만 하도록 짜야함.
    const randomNumber = Math.floor(Math.random() * (max + 1) + min);

    return randomNumber;
}

// 또 다른 사례 - 명령형에 가까운 함수
function getSomeValue(params) {
    let tempVal = '';

    for (let index = 0; index < array.length; index++) {
        temp = array[index];
        temp += array[index];
        temp -= array[index];
        temp *= array[index];
    }

    if(temp??) {
        tempVal = ??
    } else if (temp ??) {
        temp += ??
    }

    return temp;
}