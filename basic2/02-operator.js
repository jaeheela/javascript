// 🤍 문자열 결합 연산자(String concatenation)
console.log('my' + ' cat');//my cat
console.log('1' + 2);//12
console.log(`string literals: 1 + 2 = ${1 + 2}`);//string literals: 1 + 2 = 3
console.log(`string literals: 1 + 2

= ${1 + 2}`) //백틱은 공백 모두 적용해줌
/**
string literals: 1 + 2

= 3
 */


// 🤍 산술 연산자(Numeric operators)
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation



// 🤍 증감 연산자(Increment and decrement operators)
let counter = 2;
const preIncrement = ++counter; // counter = counter + 1; 후 preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);//preIncrement: 3, counter: 3
const postIncrement = counter++; // postIncrement = counter; 후 counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);//postIncrement: 3, counter: 4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);//preDecrement: 3, counter: 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);//postDecrement: 3, counter: 2



// 🤍 할당 연산자(Assignment operators)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;



// 🤍 비교 연산자(Comparison operators)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal



// 🤍 논리 연산자(Logical operators) - || (or), && (and), ! (not)
// => simple한 value를 맨 앞에, 실행로직 heavy한 operation은 맨 뒤로
const value1 = true;
const value2 = 4 < 2;
// => || (or), finds the first truthy value : 하나라도 true가 나오면 STOP!!!
console.log(`or: ${value1 || value2 || check()}`);//or: true
// => && (and), finds the first falsy value : 하나라도 false가 나오면 STOP!!!
// => often used to compress long if-statement : &&는 간편한 null 체크 기능으로 자주 사용
// => nullableObject && nullableObject.something -> 풀어쓰면 if(nullableObject!=null) nullableObject.something;
console.log(`and: ${value1 && value2 && check()}`);//and: false
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}
// => ! (not)
console.log(!value1); //false



// 🤍 동등 연산자(Equality)
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입 변경해 검사)
console.log(stringFive == numberFive);//true
console.log(stringFive != numberFive);//false

// === strict equality, no type conversion (타입까지 신경서서 검사)
console.log(stringFive === numberFive);//false
console.log(stringFive !== numberFive);//true

// ❤️‍🔥object equality by reference
const jeri1 = { name: 'jeri' }; //ref1 가리킴
const jeri2 = { name: 'jeri' }; //ref2 가리킴
const jeri3 = jeri1; //ref1 가리킴
console.log(`jeri1 == jeri2 : ${jeri1 == jeri2}`);  //jeri1 == jeri2 : false
console.log(`jeri1 === jeri2 : ${jeri1 === jeri2}`); //jeri1 === jeri2 : false
console.log(`jeri1 === jeri3 : ${jeri1 === jeri3}`); //jeri1 === jeri3 : true

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false



// 🤍 조건문 (Conditional operators) - if, 삼항연산자, switch
// => 지정된 특정 조건이 참인지 거짓인지에 따라 서로 다른 코드로 분기하기 위해 사용되는 제어문
// => if, else if, else문 : if : 1번만 작성, 단독사용가능, else if: 여러번 작성 가능, else: 1번만 작성, if 없이 단독사용 불가, 🍯 if문 작성 시, 실행 부가 한 줄로 끝나는 경우 {}괄호를 생략하고 조건식을 감싸고 있는 ()괄호 옆에 작성 가능
// => 중첩 if문 : if의 개수 제한x, if문의 작성하려는 코드의 분기 처리에 따라 중첩 이용, 분기 처리란? 어떤 조건식을 만족할 때 어떤 블록문을 실행할지 결정하는 것, 하지만 현업에서는 이렇게 작성하지 않음
// => 삼항 연산자 : 조건이 true면 value1을 false면 value2를 반환 - condition ? value1 : value2;
// => switch문 : 동일한 조건 값에 따라 다른 명령을 실행할 수 있게끔 분기하는 조건문
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, jeri!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon'); //전부 다 false면 실행
}
//unkwnon

// Ternary operator - condition ? value1 : value2;
console.log(name === 'jeri' ? 'yes' : 'no'); //no


// 🤍 switch문 (Switch statement)
// => 동일한 조건 값에 따라 다른 명령을 실행할 수 있게끔 분기하는 조건문
// => use for multiple if checks
// => use for enum-like value check
// => use for multiple type checks in TS
// => switch (값o, 표현식o, 값이 담긴 변수o, 변수명o, 함수명o, 조건식x) case문: default문: break;
// => default문은 생략가능하지만 비교할 case문은 반드시 필요, break문이 없다면 일치하는 case문을 실행하고 멈추지 않음
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break; //break문 만나기 전까지 계속 실행
  case 'Chrome': //browser == 'Chrome'인지 비교
  case 'Firefox': //browser == 'Firefox'인지 비교
    console.log('love you!');
    break; //break문 만나기 전까지 계속 실행
  default: //일치하는 case문 없을 때 실행
    console.log('same all!');
    break; //break문 만나기 전까지 계속 실행
}
//go away!

// 🤍 반복문 (Loops)
// => 반복적으로 수행해야 하는 동작을 처리하기 위해 사용되는 제어문, 괄호 안에 조건이 true일 동안 {블록코드}를 반복
// => 🍯 무한반복문이 되지 않도록 반복문의 조건이 false가 되는 순간이 있는지 항상 생각해서 코드 작성하기
// => while(조건식){블록문;} - 조건식이 true면 블록문 실행, 조건식이 false가 될 때까지 블록문 반복, 중첩가능 
// => do{블록문;}while(조건식); - 무조건 최초 1회 블록문 실행, 조건식을 평가해 조건식이 true면 블록문 실행, 조건식이 false가 될 때까지 블록문 반복, 중첩가능 
// => for(초깃값; 조건식; 증감식){블록문;} - 초깃값은 최초 1회만 실행, 조건식을 평가해 true면 블록문 실행, 증감식으로 인해 증가한 뒤 조건식이 true면 블록문 실행, 조건식이 false가 될 때까지 블록문 반복, 중첩가능
// => 반복문의 제어 break문 : break문 만나면 그 즉시 종료, 보통 if문과 함께 사용
// => 반복문의 제어 continue문 : continue문 만나면 건너뛰고 실행
let i = 3;
while (i > 0) { //while loop, while the condition is truthy, body code is executed.
  console.log(`while: ${i}`);
  i--; //만약 쓰지 않는다면? i는 계속 3이니 무한루프
}
//while: 3
//while: 2
//while: 1
do { //do while loop, body code is executed first, then check the condition.
  console.log(`do while: ${i}`); //무조건 한번은 실행
  i--;
} while (i > 0);
//do while: 0
for (i = 3; i > 0; i--) { //for loop, for(begin; condition; step)
  console.log(`for: ${i}`);
}
//for: 3
//for: 2
//for: 1
for (let i = 3; i > 0; i = i - 2) { //inline variable declaration
  console.log(`inline variable for: ${i}`);
}
//inline variable for: 3
//inline variable for: 1
for (let i = 0; i < 10; i++) {//nested loops
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}
for (let i = 0; i < 11; i++) { //continue문 - Q1. iterate from 0 to 10 and print only even numbers (use continue)
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}
//q1. 1
//q1. 3
//q1. 5
//q1. 7
//q1. 9
for (let i = 0; i < 11; i++) { //break문 - Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
//q2. 0
//q2. 1
//q2. 2
//q2. 3
//q2. 4
//q2. 5
//q2. 6
//q2. 7
//q2. 8