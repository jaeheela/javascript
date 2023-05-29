'use strict';

// 🤍 Promise
// => 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object (Promise is a JavaScript object for asynchronous operation.)
// => 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 사용 가능
// => 정해진 장시간의 기능을 수행하고 나서, 정상적으로 기능이 수행되어졌다면 성공의 메세지와 함께 처리된 결과값을 전달해줌
// => 만약 기능을 수행하다 예상치 못한 문제가 발생할 경우 에러 전달해줌

// 🤍 Promise의 Point!!
// => State: pending -> fulfilled or rejected
// => Producer vs Consumer


// 🤍  Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});


// 🤍  Consumers: then, catch, finally
promise //
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });


// 🤍  Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));


// 🤍 Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log)
  .catch(console.log);

