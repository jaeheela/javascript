// 🤍엄격모드 선언
// => Uadded in ES 5, use this for Vanila Javascript
// => 안전한 코딩을 위한 하나의 가이드라인, 순수 바닐라 자바스크립트 사용 시 제일 상단에 선언
// => 타입스크립트 쓸 때에는 전혀 선언할 필요 없지만, 순수바닐라자바스크립트를 이용할 때는 쓰는 것이 좋음!! use strict 반드시 쓰고 javascript 쓰기
// => use strict를 선언하게 되면 더 이상 비상식적인 것들을 쓸 수 없게 됨!! 즉, 상식적인 범위안에서 자바스크립트를 이용할 수 있게 해줌  ex) 변수를 정의하지 않고 사용하는 행위 불가
'use strict';

// 🤍프로그래밍 언어에서 가장 중요한 것은?
// => 입력 → 연산 → 출력
// => 사용자에게 콘솔이나 UI에서 입력받은 데어티를 잘 처리하고 연산해서 알맞게 다시 사용자에게 출력하는 것이 중요!!!!!
// => 물론 그 데이터를 전송을 이용해 서버로 보내서 다시 받아오는 것도 중요
// => 연산을 하면서 CPU를 효율적으로 사용할 수 있도록 CPU에 최적화된 로직을 작성하는 것도 중요
// => 메모리를 최소화해서 사용하는 것도 중요

//🤍변수
// => 자바스크립트 프로그래밍언어에서는, 데이터를 저장하는 공간을 의미, 따라서 변수에 저장된 데이터는 쉽게 다른 데이터로 변할 수 있음
// => 변수가 필요한 순간은? 문자의 값을 받는 그릇으로 유지할 필요가 있을 때 사용, 숫자의 값을 받는 그릇으로 유지할 필요가 있을 때 사용, 코드의 유지보수가 필요할 때 사용
// => 값을 수정해야 할 때 변수를 선언했을 경우 코드의 변경이 쉬워짐 - 즉, 변수는 코드의 재활용성을 높여줌
// => 🍯코드를 작성할 때: "변하는 영역"과 "변하는 않는 영역"을 구분한다면 코드의 유지보수가 쉬워짐
// => 🍯선언된 변수에 할당된 데이터는 언제든지 불러와서 쓸 수 있음 - 암시적 선언(var, let, const 키워드를 사용하지 않음 - 비권장) VS 명시적 선언
// => let num = 10 + 20;
// => let(키워드 - 예약어) , num(변수명or함수명) , =(할당연산자) , 10(값 - 더 이상 평가할 수 없는 데이터) 10 + 20(표현식 - 평가된 하나의 값을 반환하는 코드)
// => ; (세미콜론 - 1개의 명령이 끝나면 붙임) : 자바스트립트는 세미콜론을 문장의 끝에 넣지 않아도 에러가 발생한지 않는 유연한 규칙을 가짐, 세미콜론이 넣는 것이 좋을지 생략하는 것이 좋을지 지향하는 바에 따라 다름
// => 1. 변수를 선언하다 : let num;
// => 2. 값을 할당하다 : let num = 10 + 20 ;
// => 3. 변수 num을 초기화하다 : let num = 10 + 20;

//🤍변수명 규칙 (식별자 규칙)
// => 1. 키워드(let, var, const 등) 사용 금지
// => 2. 공백 금지
// => 3. 첫글자로 가능한 것들 : 영문 소문자 , _(언더스코어), $
// => 4. 영문으로만 작성
// => 5. 의미있는 단어로 작명
// => 6. 표기법 : firstName(카멜표기법 - 변수명,함수명) , First_Name(언더스코어 표기법, 스네이크케이스 표기법 - 상수식별자, 축약어(HTML)) , FirstName(파스칼 표기법 - 생성자함수명) 

// 🤍Variable 선언법
// => 자바스크립트는 키워드 없이 변수 선언이 가능하지만, 그럴 경우 {}스코프 규칙을 무시하고 무조건 전역변수 취급하므로 비권장!!!!!
// => 반드시 키워드 이용해 변수 선언하기 + use strict 사용하기
// => 전역변수 사용 : 비권장 , 지역변수 사용 권장, 불가피하게 전역변수를 사용해야 하는 경우는? 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용하기
// => 전역변수를 사용하고 싶지 않다면 즉시실행함수로 만들어 로직 모듈화하기
// => 참고로 해당 변수에 대한 지역변수가 존재하지 않으면, 전역변수를 확인함 - 우선순위 : 지역변수 >> 전역변수
// 1. let
// => dded in ES6, rw(read/write)
// => Mutable data types : all objects by default are mutable in JS
// => 변수 재선언 x, 중복선언 x : let num = 10 + 20; let num = 50; //num has already declared.
// => not 호이스팅 : console.log(a); let a = 10; //uncaught ReferenceError: num is not defined.
// => 블록스코프 지원 : {}을 이용해 블록을 지정하면 블록 밖에서는 블록 안의 내용을 더 이상 볼 수 없음, console.log를 이용해 블록 밖에서 name변수에 접근하면 아무 값도 나오지 않음,  반대로 블록을 쓰지 않고 파일 안에다가 바로 정의해서 쓰는 변수들(globalScope)은 어느곳에서나 접근 가능
// => 전역변수 : 전역변수들은 어플리케이션이 실행되는 순간부터 끝날때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로 쓰는 것이 좋음
// => 참조우선순위 : 같은지역스코프의 식별자를 참조함, 없다면? 전역스코프의 식별자를 참조함
// 2. Constants
// => r(read only) , use const whenever possible, only use let if variable needs to change.
// => Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// => favor immutable data type always for a few reasons:  security, thread safety, reduce human mistakes
// => const 키워드로 선언한 변수는 데이터를 변경할 수 없어서 변수가 아닌 상수라고 부름
// => 재선언x , 중복선언x, 재할당x, 선언과 동시에 할당 해야함 : const num; num = 10; //error - 선 선언 후 할당 x
// 3. var 
// => don't ever use this!
// => var hoisting (move declaration from bottom to top), has no block scope
// => 변수 재선언 가능, 중복선언 가능 :  var num = 10 + 20; var nam = 50; //새로 num 공간을 생성해서 기존의 값(20+20)을 50이 덮어버림
// => ok 호이스팅 : 출력 - 초기화 >> 선언(선언문은 최상위에) - 출력 - 할당(할당은 제자리에) ex. console.log(num); var num = 10; - 변수 선언문을 자바스크립트 스코프 최상위로 올려줌 (호이스팅)
// => 블록스코프 지원 x, 함수스코프만 지원 : 즉, 블록스코프 내 var는 모두 global스코프로 취급
// => var text = 'outside';
// => function printScope (){ console.log(text); var  text = "inside"; }
// => printScope(); //undefined 왜..?
// => var의 호이스팅으로 인해 아래 순서로 변경
// => var text = 'outside';
// => function printScope (){ var text; console.log(text); text = "inside"; }
// => printScope(); //그래서.. undefined

//🤍const를 쓸까? let을 쓸까?
// => 코드를 구분하기 보다 무조건 우선 const를 사용해 변수를 선언하기
// => 해당 값을 변경할 필요가 있을 때만 선언부에서 let으로 수정하기
// => 개발자의 실수로 생길 수 있는 (재할당 등) 잡기 힘든 실수를 줄일 수 있음
// => 즉, 프로그램의 버그를 줄일 수 있다는 것 - const를 기본으로 사용하는 버릇 들이기!!!!


const daysInWeek = 7;
let globalName = 'global name'; //global scope - 전역변수 (어느 곳에서나 접근 가능)
{
  let name = 'jeri'; //local scope - 지역변수
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);
{
  age = 4;
  var age; //var는 블록스코프를 무시함
}
console.log(age);
const maxNumber = 5;
let a = 10;
{
  let a = 20; //중복선언이지만 오류 나지 않음
}
console.log(a)
//10
//jeri
//hello
//global name
// name is not defined
//global name
//4
//10


//🤍 Variable types (변수에 담을 수 있는 타입)
// => primitive type , single item: number, string, boolean, null, undefined, symbol
// => object , box container (single iteme들을 하나의 박스 안에 담아 관리해주는 객체)
// => function, first-class function (변수에 할당 가능 >> 함수의 매개변수로 전달 가능 >> 함수의 반환값으로 사용도 가능)

//🤍 Data types(자료형)
// => data = value(값) + type(값의유형) : 값을 가질 수 있는 여러가지 유형
// 1. primitive type(원시타입)
// => 의미 : 객체가 아니면서 메소드도 가지지 않는 어떠한 값
// => 문자열(string), 숫자형(number), 논리형(boolean), undefined, null, symbol
// 2. reference type(참조타입)
// => 의미 : 원시데이터타입의 집합  - 원시 데이터 타입이 할당될 때 변수에 값 자체가 담기는 것과 달리, 보관하는 곳의 주소(ref)가 담기는 데이터 타입
// => 객체 (자바스크립트의 거의 모든 데이터와 자료구조 차지) - 고정된 크기를 가지지 않고, 주소만을 가지기 때문에 동적으로 크기가 변하는 데이터를 보관할 수 있음
// => 배열(array), 객체리터럴, 함수


// 🤍 number
// => 정수, 실수 모두 (typeof) number
// => 정수 : -1, 0, 1, 2.. 실수 : 0.1, 0.3, 0.003, -1.03 ...
// => 실수 이용 주의 : 자바스크립트의 실수는 부동 소수점 방식으로 표현함, 그래서 실수 계산이 부정확함
// => bigInt : 숫자 데이터 타입으로 표현할 수 있는 범위를 넘어선 숫자를 표현할 때 사용, 길이에 상관없이 정수를 나타낼 수 있음, 정수 리터럴 끝에 n을 붙여 표현함
// => infinity, -infinity, NaN : speical numeric values
const count = 17; // integer
const size = 17.1; // decimal number
//const count: number = 12; //typescript
//const size: number = 1.2; //typescript
console.log(`value: ${count}, type: ${typeof count}`); //value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); //value: 17.1, type: number
const sum = 0.1 + 0.2;
console.log(sum) //0.3000000000004 - 실수끼리 연산했을때 0.0000000004처럼 소수점이 발생할 수 있다는 점 염두하기
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); //Infinity
console.log(negativeInfinity); //-Infinity
console.log(nAn); //NaN
const bigInt = 1234567890123456789012345678901234567890n; // bigInt (fairly new, don't use it yet) : over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); //value: 1234567890123456789012345678901234567890, type: bigint


// 🤍 string (문자열)
// => "Hello, world" 큰따옴표 이용 , 'Hello, world' 작은따옴표 이용, 연결연산자  + 이용
// => 이스케이프 문자 \(역슬래시) 이용 : \'(작은따옴표 출력), \"(큰따옴표 출력), \n(줄바꿈 출력), \t(수평탭 출력), \\(\ 출력)
// => `Hello world` 백틱기호 (es6에 추가된 템플릿문자열) : 백틱을 쓰면 이스케이프 사용 안해도 됨, 백틱을 쓰면 ${ } 문법 이용해 변수 or 표현식 넣을 수 있음
// => 다른 프로그래밍언어에서는 1가지의 character만 들어있는 데이터타입이 따로 있지만 자바스크립트에서는 한가지의 글자든 여러개의 글자든 다 string 타입으로 할당이 됨
// => 문자열 관련 기능 : length속성 ..
const char = 'c';
const brendan = "brendan";
const greeting = 'hello ' + brendan;  // string + 변수 - 일반 string과 + 기호를 이용해서 다른 변수 string을 붙이는 것도 가능
console.log(`value: ${greeting}, type: ${typeof greeting}`); //value: hello brendan, type: string
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); //value: hi brendan!, type: string
console.log('value: ' + helloBob + ' type: ' + typeof helloBob); //value: hi brendan! type: string
console.log(`${3 * 4}는 12입니다`); //12는 12입니다 - 표현식
let gugudan = 2 * 3;
console.log(`${gugudan}은 계산하면 6입니다`) //6은 계산하면 6입니다 - 변수
const Myage = 20;
const myName = 'John';
const message = `My name is ${myName} and I'm ${Myage} years old.`;
console.log(`${message}`) //My name is John and I'm 20 years old.
console.log(message) //My name is John and I'm 20 years old.
console.log("string".length); //6


// 🤍 boolean
// => false: 0, null, undefined, NaN, ''(빈문자열)
// => true: any other value
// => 값 : 오직 true or false 만 가능
// => 표현식 : 논리적인 연산으로 표현 가능
const canRead = true; // 값 - true
const test = 3 < 1; // 표현식 - false
console.log(`value: ${canRead}, type: ${typeof canRead}`); //value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`); //value: false, type: boolean
if ("0") console.log("hi") // true - hi
if ("") console.log("hi")  // false -


// 🤍 null
// => 사용자 정의 o (값이 없음, 값이 존재하지 않음)
// => 넌 null이야! 텅텅 빈 값이야!!
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); //value: null, type: object


// 🤍 undefined
// => 사용자 정의 x (값이 아직 지정되지 않았음)
// => var, let, const 키워드로 변수를 선언하게 되면, 자바스크립트 엔진은 메모리에 변수공간을 생성하게 됨
// => 그런데 자바스크립트는 생성된 변수 공간을 그냥 비워두는 것이 아닌 어떠한 데이터가 할당이 되기 전까지 undefined를 할당함
let x; //선언은 되었지만 값이 지정되어 있지 않음
//let x = undefined;  //undefined라고 명확하게 할당해도 됨
console.log(`value: ${x}, type: ${typeof x}`); //value: undefined, type: undefined


// 🤍 null VS undefined비교
console.log(null == undefined); //true
console.log(null === undefined); //false - 값은 같으나 type이 다르기 때문에 false 로 나옴


// 🤍 symbol
// => create unique identifiers for objects
// => 객체의 고유한 식별자를 만들기 위해 사용, map이나 자료구조에서 고유한 식별자가 필요할 때 사용
// => 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶어 고유한 식별자가 필요할 때 사용
// => symbol은 바로 출력하면 error발생하므로 .description을 이용하여 string으로 변환 후 출력 가능
// => string으로 작성하는 경우 String() - 다른 파일에서 동일한 string을 쓰면 "동일한 식별자"로 간주
// => symbol로 작성하는 경우 Symbol() -  다른 파일에서 동일한 symbol을 쓰면 "다른 식별자"로 간주
// => 즉, 동일한 string을 작성했어도 다른 symbol로 만들어질 수 있음! 주어진 string에 상관없이 고유한 식별자를 만들 때 사용함
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id'); //string이 똑같은데 동일한 Symbol을 만들고싶다면? - 주어진 string("id")에 맞는 심볼을 만들어줘!
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
//console.log(`value: ${symbol1}, type: ${typeof symbol1}`); //error
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //value: id, type: symbol


// 🤍 object, real-life object() - 자바스크립트 객체는 변수에 할당 가능 , data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;


// 🤍 자바스크립트의 특징 -  Dynamically typed language
// => C, Java : statically typed language - 변수를 선언할 때 어떤 타입인지 결정해서 타입을 같이 선언해야한다는 것
// => Javascript: dynamically typed language - 선언할 때 어떤 타입인지 선언하지 않고 runtime 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수 있다는 것
// => 장점 : 좋은 아이디어를 빠르게  프로토타입하고 싶을 때 유연하고 사용 가능
// => 단점 : 대규모 프로젝트에서는 다이나믹 타입 때문에 개발의 어려움
// => 타입스크립트 : dynamic typing으로 하도 뒤통수를 많이 맞아서 type script이 나옴!!! 타입스크립트는 자바스크립트 위에 타입이 올려진 언어 자바스크립트를 충분히 배우고 타입스크립트를 배우길~
// => 자바스크립트는 바로 브라우저가 이해할 수 있기 때문에 실시간으로 연동해서 볼 수 있지만, 타입스크립트는 결국 브라우저가 이해할 수 있는 자바스크립트로 트랜스컴파일러를 이용해야함, 하지만 타입스크립트는 실시간으로 볼 수 없음
let text = 'hello'; // 'hello'라는 string을 할당하면 text의 유형은 string
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;  // 다시 text에 1을 할당하면 text의 유형은 number로 변경
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7' + 5;  //  자바스크립에서는 '문자열에 더하기가 있으니 숫자열을 문자열로 변환해서 더해줘야겠다'고 해석
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2'; //'숫자들을 나눌 수 있는 나누기연산자를 썼으니 숫자로 인식해야겠다'고 해석
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
//console.log(text.charAt(0)); //error -> 변경끝에 최종적으로 number기 때문에 0번째 문자열 못찍음
