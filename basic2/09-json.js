'use strict';

// 🤍 JSON - JavaScript Object Notation
// 유용 사이트
// => json Diff - https://www.jsondiff.com/
// => JSON Beautifer - https://jsonbeautifier.org/
// => JSON Parser - https://jsonparser.org/
// => JSON Validator - https://tools.learningcontainer.com/


// 🤍 Object to JSON - stringfy(obj)
let json = JSON.stringify(true);
console.log(json); //true
json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"]

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  //symbol: Symbol('id'), //error JSON에 포함x
  jump: function () {   //JSON에 포함x
    console.log(`${this.name} can jump!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2023-05-16T11:39:04.502Z"}
json = JSON.stringify(rabbit, ['name']);
console.log(json); //{"name":"tori"}
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); //{"name":"tori","color":"white","size":null}
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  //key: , value: [object Object]
  //key: name, value: tori
  //key: color, value: white
  //key: size, value: null
  //key: birthDate, value: 2023-05-16T11:43:54.927Z
  //key: jump, value: function () { console.log(`${this.name} can jump!`);}
  return key === 'name' ? 'ellie' : value;
});
console.log(json); //{"name":"ellie","color":"white","size":null,"birthDate":"2023-05-16T11:43:54.927Z"}

console.clear();

// 🤍 JSON to Object - parse(json)
json = JSON.stringify(rabbit);
console.log(json); //{"name":"tori","color":"white","size":null,"birthDate":"2023-05-16T11:48:19.501Z"}
const obj1 = JSON.parse(json);
console.log(obj1); //{name: 'tori', color: 'white', size: null, birthDate: '2023-05-16T11:48:19.501Z'} - jump메소드 없음
rabbit.jump(); //tori can jump!
//obj1.jump(); //error
console.log(rabbit.birthDate.getDate()); //16
//console.log(obj1.birthDate.getDate()); //error

const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  //key: name, value: tori
  //key: color, value: white
  //key: size, value: null
  //key: birthDate, value: 2023-05-16T11:49:06.590Z
  //key: , value: [object Object]
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj2); //{name: 'tori', color: 'white', size: null, birthDate: Tue May 16 2023 20:49:46 GMT+0900 (한국 표준시)}
console.log(rabbit.birthDate.getDate()); //16
console.log(obj2.birthDate.getDate());   //16


