'use strict';

// 🤍 자바스트립트
// => 동기적 코드
// => 호이스팅 된 이후부터 우리가 작성한 순서대로 하나씩 동기적으로 실행된다.
// => 호이스팅 : var, function declaration (var 변수, 함수 선언문) 들이 자동적으로 제일 위로 올라가는 것

console.log('1');
//1
setTimeout(() => console.log('2'), 1000);
console.log('3');
//3
function printImmediately(print) {// Synchronous callback
  print();
}
function printWithDelay(print, timeout) {// Asynchronous callback
  setTimeout(print, timeout);
}
printImmediately(() => console.log('hello'));
//hello
//1000ms 후 2
printWithDelay(() => console.log('async callback'), 2000);
//2000ms 후 async callback


// ❤️‍🔥 콜백 지옥 체험 - Callback Hell example - 콜백체인의 문제점
// => 가독성 떨어짐
// => 비즈니스 로직을 한눈에 이해하기 어려움
// => 디버깅 및 문제분석, 유지보수 어려움
class UserStorage { //유저 저장소

  //id와 password를 받아와서 로그인 성공시 onSucess메서드 호출 , 에러시 onError메서드 호출
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ((id === 'jeri' && password === 'dream') || (id === 'coder' && password === 'academy')) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  //user객체를 전달해서 이름이 user면 admin권한부여, 아니면 Error호출
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'jeri') {
        onSuccess({ name: 'jeri', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}
const userStorage = new UserStorage();
const id = prompt('enter your id'); //사용자 입력값
const password = prompt('enter your password'); //사용자 입력값
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);