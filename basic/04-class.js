'use strict';

// 🤍 객체 지향 프로그래밍 (Object-oriendted programming)
// => 클래스(class) - template
// => 객체(object) - instance of a class
// => JavaScript classes : introduced in ES6, syntactical sugar over prototype-based inheritance



// 🤍 클래스 선언
class Person {
  constructor(name, age) {// constructor
    this.name = name; //fields
    this.age = age;
  }
  speak() { //methods
    console.log(`${this.name}: hello!`);
  }
}
// 🤍 객체 생성
const Jeri = new Person('Jeri', 20);
console.log(Jeri.name);//Jeri
console.log(Jeri.age);//20
Jeri.speak();//Jeri: hello!



// 🤍 Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  /*
  get age() { //Getter메소드를 만들면 객체 생성 시 생성자 내부의 this.age필드는 메모리에 올라가있는 데이터를 읽어오는 것이 아닌 Getter를 호출함
    return this.age; (Getter 내 사용 변수명 변경 필요)
  }
  set age(value) { //Setter메소드를 만들면 객체 생성 시 생성자 내부의 age필드는 바로 메모리에 값을 할당하는 것이 아닌 Setter를 호출함
    this.age = value; //무한반복로직임 수정필요 (Setter 내 사용 변수명 변경 필요)
  }
  */
  get age() {
    return this._age;
  }
  set age(value) { //
    // if (value < 0) { throw Error('age can not be negative');  }
    this._age = value < 0 ? 0 : value;
  }
}
const user1 = new User('Steve', 'Job', -1); //잘못된 값으로 객체 생성하지 못하도록 Setter 이용
console.log(user1.age); //0



// 🤍 Public, Private 필드
// => Public : 언제든지 접근 가능 필드 - read,write 가능
// => Private : 클래스 내부에서만 값에 접근 가능하고(read,write 가능) , 클래스 외부에서 접근 불가능 필드(read,write 불가능)
// => Too soon! : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
// => 지원 브라우저가 적어서 사용하려면 바벨 이용 필요
class Experiment {
  publicField = 2;
  #privateField = 0; //private Fields
}
const experiment = new Experiment();
console.log(experiment.publicField); //2
console.log(experiment.privateField); //undefined



// 🤍 Static 속성과 메소드
// => Static으로 선언하게 되면 생성된 객체가 아닌 클래스와 연결되어 있게됨
// => 즉, 객체로 접근 불가능, 클래스로 접근 가능
// Too soon!
class Article {
  static publisher = 'Dream Coding';//Static 속성 - 클래스와 연결
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {//Static 메소드 - 클래스와 연결
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); //Dream Coding
console.log(article1.publisher); //undefined
Article.printPublisher(); //Dream Coding
//article1.printPublisher(); //error



// 🤍 상속 (Inheritance)
// => 상속받아 재사용
// => a way for one class to extend another class.
// => instanceOf 연산자 이용해 Class checking 하기
// => : rectangle instanceof Rectangle - rectangle이 Rectangle 대신 사용 가능한가요?
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    return this.width * this.height;
  }
}
class Rectangle extends Shape {

}

class Triangle extends Shape {
  draw() { //overriding (오버라이딩에 의한 다형성)
    super.draw();
    console.log('🔺');
  }
  getArea() { //overriding (오버라이딩에 의한 다형성)
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); //drawing blue color!
console.log(rectangle.getArea()); //400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); //drawing red color! 🔺
console.log(triangle.getArea()); //200

console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); //true
console.log(triangle instanceof Object); //true - 자바스크립트에서 만든 모든 클래스는 Object를 상속받아 만든 것
console.log(triangle.toString());
