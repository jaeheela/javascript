'use strict';
// 🤍 객체 (Objects)
// => 자바스크립트 Object 참고 문서 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference
// => 자바스크립트 데이타 타입 중 하나 : one of the JavaScript's data types.
// => a collection of related data and/or functionality.
// => Nearly all objects in JavaScript are instances of Object
// => object는 key와 value의 집합체이다. object = { key : value };

//🤍 객체와 함수 이용 예시
let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj); //{value: 7}


//🤍 객체 생성 방법
// => object literal 문법 : const obj1 = {};
// => object constructor 문법 : const obj2 = new Object();
{
  //개선하기 위해 객체 사용
  const name = "jeri";
  const age = 4;
  function print(name, age) {
    console.log(name);
    console.log(age);
  }
  print(name, age);
}
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const jeri = { name: 'jeri', age: 4 };
print(jeri);
//jeri
//4


// 🤍 자바스크립트 매직 
// => 자바스크립트는 Runtime 때 동적으로 타입이 결정됨 - dynamically typed language 
// => 그러므로 아래와 같은 미친짓 가능
jeri.hasJob = true; //객체 생성 후 속성 추가 가능
console.log(jeri.hasJob); //true
delete jeri.hasJob; //객체 생성 후 속성 삭제 가능
console.log(jeri.hasJob); //undefined


// 🤍 계산된 속성 (Computed properties) : ['name']
// => 키는 항상 string 타입 이어야 함
// => jeri.name : jeri의 name이라는 고정된 키값에 해당하는 속성을 받아오고 싶을 때 사용
// => jeri['name'] : 런타임 시 키 값이 결정될 경우 많이 사용, 키와 관련된 value를 동적으로 받고 싶을때 사용하기 ( ex. 키를 변수로 표현해야할 경우)
console.log(jeri.name); //jeri
console.log(jeri['name']); //jeri
//console.log(jeri[name]); //error
jeri['hasJob'] = true;
console.log(jeri.hasJob); //true
function printValue(obj, key) { //원한는 키를 사용자에게 받아서 값을 출력하는 함수
  console.log(obj[key]);
}
printValue(jeri, 'name'); //jeri
printValue(jeri, 'age'); //4


// 🤍 생성자 함수(Constructor Function & Property value shorthand)
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
//const person4 = makePerson('jeri', 20);
const person4 = new Person('jeri', 20);
// => 다른 계산은 하지 않는 객체 생성 함수 
// => 클래스명처럼 함수명을 대문자 명사로 표기 makePerson -> Person
// =>클래스 없을 시절 사용 많이함 
//function makePerson(name, age) { 
function Person(name, age) {
  /*
  return {
    //방법1.
    // name: name,
    // age: age

    //방법2. key와 value의 이름이 동일하다면 생략 가능( property value short handle)
    name,
    age
  }
  */
  //방법3.
  // this = {}; 생략되었음
  this.name = name;
  this.age = age;
  // return this; 생략되었음
}


// 🤍 in 연산자 
// => key in obj : 해당하는 key가 obj 안에 있나요?
console.log('name' in jeri); //true
console.log('age' in jeri); //true
console.log('random' in jeri); //false
console.log(jeri.random); //undefined

// 🤍 for..in
// => for (key in obj) : 반복문 내부에 key 지역변수를 만들어 obj의 key를 담아라
for (let key in jeri) {
  console.log(`키 = ${key}, 값 = ${jeri[key]}`);
}
//키 = name, 값 = jeri
//키 = age, 값 = 4
//키 = hasJob, 값 = true

// 🤍 for..of
// => for (value of iterable) : 반복문 내부에 value 지역변수를 만들어 iterable(배열리스트)를 순차적으로 돌면서 담아라
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (let value of array) {
  console.log(value);
}


// 🤍 객체 복사(cloning)
// => Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'jeri', age: '10' };

//얕은 복사
const user2 = user;
console.log(user); //{name: 'jeri', age: '10'}
//user2.age = '30';
//console.log(user); //{name: 'jeri', age: '30'} - 기존 user의 값도 함께 변경됨ㅠㅠ

//깊은복사 - old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user); //{name: 'jeri', age: '10'}
user3.age = '30';
console.log(user3); //{name: 'jeri', age: '30'}
console.log(user); //{name: 'jeri', age: '10'}

//깊은복사 - old way
const user4 = Object.assign({}, user);
console.log(user); //{name: 'jeri', age: '10'}
user4.age = '40';
console.log(user4); //{name: 'jeri', age: '40'}
console.log(user); //{name: 'jeri', age: '10'}

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed); //{color: 'blue', size: 'big'}
console.log(mixed.color); //blue
console.log(mixed.size);  //big



// 🤍 객체의 축약 표현
// => 프로퍼티 축약: key 값 = 변수 값
{
  /*
  const name = 'Jhon';
  const age = 20;
  const obj = { name: name, age: age };
  console.log(obj); //{name: 'John', age:20}
  */
  const name = 'Jhon';
  const age = 20;
  const obj = { name, age };
  console.log(obj); //{name: 'John', age:20}
}

// 🤍 Object 다루기
{
  const obj = { x: 10, y: 20, z: 30 };

  //Object.keys(객체명) : 주어진 객체의 키값들을 배열로 반환
  console.log(Object.keys(obj)); //(3) ['x', 'y', 'z']

  //Object.values(객체명) : 주어진 객체의 (프로퍼티)값들을 배열로 반환
  console.log(Object.values(obj)); //(3) [10, 20, 30]

  //Object.entries(객체명) : 프로퍼티[key , value]를 각각의 배열로 반환, 전체 객체는 프로퍼티 배열들의 배열로 표현
  console.log(Object.entries(obj));
  //(3) [Array(2), Array(2), Array(2)]
  // 0: (2) ['x', 10]
  // 1: (2) ['y', 20]
  // 2: (2) ['z', 30]

  //객체명.hasOwnProperty('key이름') : true or false로 반환
  console.log(obj.hasOwnProperty('age')); //false
  console.log(obj.hasOwnProperty('hobby')); //false
  console.log(obj.hasOwnProperty('x')); //true
}

console.clear();
