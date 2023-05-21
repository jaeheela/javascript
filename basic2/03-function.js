// 🤍 Function (함수)
// => 함수(function)란 하나의 로직을 재실행 할 수 있도록 하는 것으로 코드의 재사용성을 높여줌
// => 하나의 동작을 위한 코드의 집합 - 프로그램에서 기본적인 빌딩 블록임
// => 반복적인 동작을 처리하기 위해 작성함, 여러번 사용하는 일종의 서브프로그램이라고도 부름
// => 액션이나 계산 로직 수행

// 🤍 자바스크립트 함수 사용법 및 특징
// => 길고 복잡한 코드를 함수로 치환하고 싶을 때 사용
// => 함수를 업그레이드 하고 싶다면 매개변수를 이용해 사용
// => 함수는 보통 한 번 선언하고 내용이 변경되는 일이 없도록 코드를 작성하는 경우가 많음 -> 함수표현식에서 const 이용하자!
// => 재사용성 높아짐 (동일한코드를 여러 곳에서 사용함), 유지, 보수성 용이, 코드의 가독성 높아짐
// => 입력 - 어떤 값을 인자로 전달하느냐에 따라서 함수가 반환하는 값이나 메소드의 동작방법을 다르게 할 수 있음
// => : 매개변수(parameter - 외부에서 전달하는 데이터를 함수에서 받을 수 있도록 정의하는 함수) , 인수/인자(argument - 함수 호출 시 전달하는 데이터 - 값)


// 🤍 함수 선언문 (Function declaration)
// => function name(param1, param2) { body... return; }
// => 하나의 함수는 한가지 일만 하도록 작성 
// => 함수명 작성 규칙 : doSomething, command, verb e.g. createCardAndPoint -> createCard, createPoint 로 변환
// => 자바스크립트에서 함수는 객체이다.
// => 함수를 선언한 뒤 콘솔에서 함수명. 로 검색하면 함수가 가진 메소드나 속성 확인 가능
// => 타입스크립트 : type 설정을 해줘야 함 ex. function log(message: string):number{ console.log(message);  return 0; } - TS playground 에서 연습해보기
function printHello() {
  console.log('Hello');
}
printHello(); //함수호출 - Hello
function log(message) { //type 설정이 없음
  console.log(message);
}
log('Hello@'); //Hello@
log(1234); //1234


// 🤍 입력 : 매개변수(Parameters)
// => 매개변수는 함수 내에서만 유효 , 매개변수로 전달되는 자료형은 모든 자료형 가능
// => function funcName (숫자, 문자열, 논리형, null, undefined, 객체, 배열, 함수){ 코드작성; }
// => 매개변수의 개수는 제한 없음 (복수의 인자가능)
// => 원시값의 매개변수 : 함수에 값을 전달함
// => 객체타입의 매개변수 : 함수에 참조번지를 전달함
// => 💙매개변수에 기본값 지정 가능
// => 💙지정된 인자의 개수보다 부족하게 전달할 경우 : 인자의 기본 값은 undefined이므로 undefined 할당
// => 💙지정된 인자의 개수보다 많게 전달할 경우 : 정상출력됨, 자바스크립트의 함수 내부에 arguments라는 특별한 지역변수 존재하므로 넘겨받은 인자들을 이 지역변수 arguments에 마치 배열과 같이 저장되고 접근함
// => 쉽게 말해 받아주는 저장소 (arguments)가 있기 때문에 초과된 인수를 무시할 뿐 오류는 발생하지 않음
// => 💙매개변수에 나머지 인자 구문 작성 가능 : 나머지 인자로 작성하면 함수에 배열 형태로 전달함,  즉, printAll('dream', 'coding', 'ellie'); -> ['dream', 'coding', 'ellie'] 형식으로 매개변수에 전달됨
{
  function changeName(obj) { //ref로 전달됨
    obj.name = 'coder'; //함수 안에서 ref가 라기키고 있는 값이 변경됨
  }
  const ellie = { name: 'jeri' };
  changeName(ellie);
  console.log(ellie); //{name: 'coder'}
}

{
  function showMessage(message, from = 'unknown') { //Default parameters (added in ES6)
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!'); //Hi! by unknown
}
{
  function printAll(...args) { //Rest parameters (added in ES6)
    for (let i = 0; i < args.length; i++) {//for문
      console.log(args[i]);
    }
    for (const arg of args) {//for of문
      console.log(arg);
    }
    args.forEach((arg) => console.log(arg));//forEach()함수
  }
  printAll('dream', 'coding', 'ellie');
  //dream
  //coding
  //ellie
}
{
  function something(a, b, ...rest) {//Rest parameters (added in ES6)
    console.log(a);
    console.log(b);
    console.log(rest);
  }
  something(1, 2, 3, 4, 5);
  //1
  //2
  //[3, 4, 5]
}
{
  function get_arguments(arg1, arg2, arg3, arg4) {
    return arg1 + arg2
  }
  console.log(get_arguments(10, 20)); //30
  console.log(get_arguments(20, 30)); //50
}
{
  function sum(a, b) {
    console.log(a + b);
  }
  sum(10, 20, 30); //30

  function sumTwo(a, b) {
    console.log(arguments);
  }
  sumTwo(10, 20, 30);
  //Arguments(3) [10, 20, 30, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}


// 🤍 출력 : 반환값 (Return 값) 
// => 역할1 : return 뒤에 따라오는 값을 함수의 결과로 반환함과 동시에 함수를 종료
// => 역할2 : return은 결과를 반환없이 함수를 중지시킬수도 있음
// => Return a value : 값 반환
// => Return a object : 객체 반환
{
  //sum(1, 2); // 함수 호이스팅 ok
  function sum(a, b) {
    //방법1
    //let result = a + b;
    //return result; 

    //방법2
    return a + b;
  }
  const result = sum(1, 2);
  console.log(`sum: ${sum(1, 2)}`); //sum: 3
}


// 🤍 Local scope
// => 함수에서 정의한 블록문만 스코프의 유효범위로 인정하는 것(함수 스코프 - 함수의 지역변수)
// => 유리창의 틴트와 같음 : 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable (스코프와 상관없이 모두 참조)
function printMessage() {
  let message = 'hello'; // local variable(함수외부에서 참조 불가능)
  console.log(message); //hello
  console.log(globalMessage); //global
  function printAnother() { //클로저함수 : 자식함수는 부모함수에 정의된 변수에 접근 가능
    console.log(message); //hello
    let childMessage = 'hello'; //local variable(함수외부에서 참조 불가능)
  }
  // console.log(childMessage); //error
}
printMessage();
//hello
//global




//❤️‍🔥현업 팁 : Early return, early exit
function upgradeUser(user) { // bad
  if (user.point > 10) {
    // long upgrade logic...
  }
}
function upgradeUser(user) { // good
  if (user.point <= 10) {
    return; //조건이 맞지 않을 때는 빨리 리턴해서 함수 종료
  }
  //조건이 맞을 때만 그 다음에 필요 로직 작성
  // long upgrade logic...
}






// 🤍 함수표현식 (Function expression)
// => a function expression is created when the execution reaches it. (리터럴 함수방식)
// => 자바스크립트 함수는 변수에 할당 가능 (First-class function) - functions are treated like any other variable
// => not 함수호이스팅 : a function declaration can be called earlier than it is defined. (hoisted)
// => 함수는 다른 변수와 마찬가지로 변수에 할당 가능 - can be assigned as a value to variable 
// => 함수의 매개변수로 함수 전달 가능 - can be passed as an argument to other functions.
// => 함수의 반환값으로 함수 반환 가능 - can be returned by another function
// => 함수 표현식으로 작성하면 일관되게 마지막에 ; 찍어주자
// => 변수명이 중요!!!, 변수의 이름으로만 호출 가능, 함수명의 무의미
//print(); //error
const print = function () { //함수 선언과 동시에 변수에 할당, 현재 함수명이 없음 : anonymous function
  console.log('print');
};
print(); //print
const printAgain = print; //새로운 변수에 함수 할당
printAgain(); //print
const sumAgain = sum; //새로운 변수에 함수 할당
console.log(sumAgain(1, 3)); //4


// 🤍 콜백함수(Callback function using function expression)
// => answer 변수, printYes 함수, printNo 함수가 매개변수로 전달되는 함수
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') { //answer에 따라
    printYes(); //printYes 함수 호출
  } else {
    printNo(); //printNo 함수 호출
  }
}


// 🤍 익명함수(anonymous function)
const printYes = function () {
  console.log('yes!');
};


// 🤍 이름있는함수(named function)
// => 디버깅 시 디버깅의 stack traces에 함수이름이 나오게 하면 유용하기 때문에 사용함
// => 함수 안에서 함수 자신을 다시 한번 호출할 때 사용함 ex. recurisons - 피보나치수 계산 , 반복되는 평균값 계산 등
const printNo = function print() {
  console.log('no!');
  //print(); //무한 no! 호출 - call stack이 다 차서 error 발생
};
randomQuiz('wrong', printYes, printNo); //no!
randomQuiz('love you', printYes, printNo); //yes!


// 🤍 화살표함수(Arrow function)
// => 항상 익명 함수로 작성 가능
// => 형식 : (  ) => {   블록문; }; 
// => 화살표함수로 작성된 함수를 호출하기 위해서는 함수표현식 방법으로 작성해야 호출 가능 ex. const 식별자 = (  ) => {   블록문; }; 식별자();
{
  //const simplePrint = function () { console.log('simplePrint!'); }; 
  const simplePrint = () => console.log('simplePrint!');
  //const add =  function (a, b) {return a + b};
  const add = (a, b) => a + b;
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
  };
  simplePrint(); //simplePrint!
  console.log(add(1, 2)); //3
  console.log(simpleMultiply(3, 4)); //12
}
{
  //전달하고자 하는 매개변수가 하나도 없다면?
  const printPie = () => 3.14; //그냥 소괄호만 적어두기
  const result = printPie();
  console.log(result);
  //3.14
}
{
  //화살표함수가 내부적으로 객체를 반환하고 있는 형태라면?
  const getObject = () => ({ name: 'jeri', age: 20 }) //⭐️{}를 소괄호로 감싸주기⭐️
  const obj = getObject();
  console.log(obj.name);
  //jeri
}
{
  //함수 안에 함수가 들어가 있는 형태라면?(내부함수형태) 화살표함수로 변경해주기
  // function outer(x) {
  //   return function inner() {
  //     return x + x;
  //   }
  // }
  const outer = (x) => () => x + x;
  const innerFunc = outer(10);
  const result = innerFunc();
  console.log(result); //20
}



// 🤍 즉시실행함수 (IIFE: Immediately Invoked Function Expression)
// => 함수를 정의하면서 동시에 실행까지 하는 함수
// => 언제 사용? 최초 1회 함수 사용하고 말 것들에 전역 스코프를 오염시키지 않도록 하기 위해 사용하는 것
// => 특징 : 1번 실행하고 나면 메모리에 데이터가 안남음 , 즉시실행 함수의 함수명(식별자)는 한번도 사용되지 않은 것처럼 인식하기 때문에 재사용 가능
// => 형식 : (즉시실행할 함수)() ; - 즉시실행할 함수를 괄호 안에 작성, 즉시실행할 함수에 전달값이 있으면 인수로 작성
(function hello() {
  console.log('IIFE');
})(); //IIFE
(function sum(a, b) {
  console.log(a + b);
})(10, 20);


// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
// => 정해진 데이터에 따라 처리하는 경우는 if문보다는 switch문이 더 좋음
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command'); //Error 객체
  }
}
console.log(calculate('add', 2, 3)); //5