'use strict';

// 자료구조
// => 자료구조의 필요성 : 검색, 삽입, 삭제, 정렬 잘 하기 위해
// => 자료구조와 알고리즘 공부하기
// => array, map, set, list(single-linked-list & double-linked-list ..) ..


// 자료구조 (Array)🎉
// => Array는 순서가 중요한 자료구조
// => Array 요소의 접근은 index로 가능 : array[0], arrary[1], ...
// => Array는 모든 자료형 저장 가능 : onst arr  = ['abc',10,true,undefined,null,[],{},function(){}];
// => Array는 빈 배열로 선언 가능 : const arr = [];


// 🤍 Array 선언법
const arr1 = new Array();
const arr2 = [1, 2];


// 🤍 Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); //(2) ['🍎', '🍌']
console.log(fruits.length); //2
console.log(fruits[0]); //🍎
console.log(fruits[1]); //🍌
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]); //🍌


// 🤍 print all fruits (Looping over an array)
//for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//for of
for (let fruit of fruits) {
  console.log(fruit);
}
//Array.forEach((current, index, array)=>{}) : 요소 각각에 접근해 요소 하나씩 순서대로 함수를 실행하는 메서드, 짧은 반복문, 보통 배열의 길이 모를 때 이용
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));
//🍎 0 (2) ['🍎', '🍌']
//🍌 1 (2) ['🍎', '🍌']



// 🤍 배열 다루기
//Array.push() : 마지막 원소 추가(Addtion)
fruits.push('🍓', '🍑');
console.log(fruits); //(4) ['🍎', '🍌', '🍓', '🍑']


//Array.pop() : 마지막 원소 제거(deletion)
const poped = fruits.pop();
fruits.pop();
console.log(fruits); //(2) ['🍎', '🍌']


//Array.unshift() : 첫번째 원소 추가(Addtion)
fruits.unshift('🍓', '🍋');
console.log(fruits); //(4) ['🍓', '🍋', '🍎', '🍌']


//Array.shift() : 첫번째 원소 제거(deletion)
fruits.shift();
fruits.shift();
console.log(fruits); //(2) ['🍎', '🍌']


// => 첫번째원소를 unshift, shift 하는 것보다 마지막 원소를 pop,push 하는 것이 더 빠름!!
// => 가능하면 pop & push를 더 많이 사용하자!


//Array.splice(시작인덱스,배열에서제거할요소의개수,배열에서추가할요소들) : 중간에 원소 삭제 및 추가 (원하는 갯수만큼)
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); //(5) ['🍎', '🍌', '🍓', '🍑', '🍋']
fruits.splice(1, 1);
console.log(fruits); //(4) ['🍎', '🍓', '🍑', '🍋']
fruits.splice(1, 0, '🍏', '🍉');
console.log(fruits); //(6) ['🍎', '🍏', '🍉', '🍓', '🍑', '🍋']


//Array.concat() : 기존 배열에 새로운 배열 합치기 
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2); // combine two arrays
console.log(newFruits); //(8) ['🍎', '🍏', '🍉', '🍓', '🍑', '🍋', '🍐', '🥥']


//Array.indexOf() : 요소의 인덱스 검색 (find the index)
console.log(fruits);
console.log(fruits.indexOf('🍎')); //0
console.log(fruits.indexOf('🍉')); //2
console.log(fruits.indexOf('🥥')); //-1 (배열에 없다면 -1반환)

// Array.includes() : 요소 포함 여부 
console.log(fruits.includes('🍉')); //true
console.log(fruits.includes('🥥')); //false

//Array. lastIndexOf() : 요소의 인덱스 검색 (find the index)
fruits.push('🍎');
console.log(fruits); //(7) ['🍎', '🍏', '🍉', '🍓', '🍑', '🍋', '🍎']
console.log(fruits.indexOf('🍎')); //0 (만약 똑같은 데이터가 있더라도 가장 첫번째로 해당하는 값을 만나면 그 값을 리턴함)
console.log(fruits.lastIndexOf('🍎')); //6
console.log(fruits.lastIndexOf('🥥')); //-1

console.clear();