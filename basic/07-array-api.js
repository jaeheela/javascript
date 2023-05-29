
//🤍 Array.join() : 반환값) 하나의 문자열
{
  // Q1. make a string out of an array
  // => ['apple', 'banana', 'orange'] >> "apple,banana,orange"
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  //const result = fruits.join(''); //ok
  console.log(result); //apple,banana,orange
}


//🤍 Array.split() : 반환값) 새배열
{
  // Q2. make an array out of a string
  // => "🍎, 🥝, 🍌, 🍒" >> ['🍎', ' 🥝', ' 🍌', ' 🍒']
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result); //(4) ['🍎', ' 🥝', ' 🍌', ' 🍒']
}


//🤍 Array.sort(): 요소 정렬
//Array.reverse(): 요소 역순 정렬
// => 정렬의 순서는 기본적으로 문자열의 유니코드 순서에 따름, 그래서 숫자 정렬은 정확하지 않을 수도 있음(숫자의 크기를 비교하여 정렬하는 것이 아님..)
{
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // => [1, 2, 3, 4, 5] >> [5, 4, 3, 2, 1]
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); //(5) [5, 4, 3, 2, 1]
  console.log(array); //(5) [5, 4, 3, 2, 1]
}


//🤍 Array.slice() : 배열의 특정한 부분을 리턴해줌
// => 아무런 인자도 전달하지 않은 경우 배열을 조각내지 않고 같은주소를 참조하지 않는 새배열 리턴해줌
{
  // Q4. make new array without the first two elements
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  const array2 = array.slice();
  console.log(result); //(3) [3, 4, 5]
  console.log(array);  //(5) [1, 2, 3, 4, 5]
  console.log(array2); //(5) [1, 2, 3, 4, 5]
}









class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];


//🤍 Array.find((current, index, array)=>{}) : 반환값) 조건에 만족하는 1번째 요소를 만나면 바로 return - 값
//🤍 Array.findIndex((currentValue, index, array)=>{}) : 반환값)만족하는 1번째 요소를 만나면 바로 return  - 인덱스
{
  // Q5. find a student with the score 90
  const result = students.find((student) => student.score === 90);
  console.log(result); //Student {name: 'C', age: 30, enrolled: true, score: 90}
}



//🤍 Array.filter((current, index, array)=>{}) : 요소 각각에 접근해 콜백함수를 호출 후 true만 반환해 새 배열로 반환하는 메서드
// => 즉, 어떤 기준을 통과한 요소만 모아 새로운 배열로 만듬, true인 결과값이 없다면 [빈배열] 반환, 원본 데이터 그대로 유지, 새로운 배열 생성해 반환
{
  // Q6. make an array of enrolled students
  const result = students.filter((student) => student.enrolled);
  console.log(result); //(3) [Student, Student, Student]
}



//🤍 Array.map((current, index, array)=>{}) : 요소 각각에 접근해 요소 하나씩 순서대로 함수를 실행한 뒤 그 결과들을 새로운 배열로 반환하는 메서드
// => 짧은 반복문, 보통 배열의 길이 모를 때 이용
// => forEach()와 거의 동일하게 동작하지만 반환값이 존재, 배열로 반환
{
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  const result = students.map((student) => student.score);
  console.log(result); //(5) [45, 80, 90, 66, 88]
}



//🤍 Array.some((current, index, array)=>{}) : 배열의 요소 중 콜백함수의 return 값이 true가 하나라도 있으면(만족값 1개) true를 반환하는 메소드
//🤍 Array.every((current, index, array)=>{}) : 배열의 요소 중 콜백함수의 return 값이 모두 true여야(만족값 모두) true를 반환하는 메소드
{
  // Q8. check if there is a student with the score lower than 50
  const result = students.some((student) => student.score < 50);
  console.log(result); //true

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2); //true
}



//🤍 Array.reduce((accumulator,current,index,array)=>{}, 리듀서 함수에 제공할 초깃값))
// => accumulator : 콜백함수의 반환값들을 누적하는 대상
// => 필수인자 : acc, curr, 선택인자: index, array
// => 선택인자 : 리듀서 함수에 제공할 초깃값 - 지정하지 않으면 arr[0] 요소 사용함
// => 배열의 각 요소에 대해 주어진 리듀서 함수를 실행한 뒤 하나의 값을 반환
{
  // Q9. compute students' average score
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length); //73.8
}
{
  //배열의 수 더하기
  const arr = [1, 2, 3, 4, 5];
  const reducer = (acc, num) => acc + num;
  arr.reduce(reducer);
  console.log(arr.reduce(reducer)); //15
}
{
  //배열의 수 더하기 (초깃값설정)
  const arr = [1, 2, 3, 4, 5];
  const reducer = (acc, num) => acc + num;
  arr.reduce(reducer, 10);
  console.log(arr.reduce(reducer, 10)); //10+15=25
}
{
  //배열 중 5 이상만 더하기
  const arr = [2, 4, 6, 8, 10];
  const reducer = (acc, num) => {
    if (num > 5) acc = acc + num;
    return acc;
  }
  arr.reduce(reducer, 0);
  console.log(arr.reduce(reducer, 0)); //24
  console.log(arr.reduce(reducer));   //26
}
{
  //배열의 각 a, b, c의 개수 알아내기
  const arr = ["a", "a", "a", "b", "c", "c", "b", "a"];
  const reducer = (acc, cur) => {
    if (acc[cur]) { acc[cur] = acc[cur] + 1; }
    else acc[cur] = 1;
    return acc;
  }
  arr.reduce(reducer, {});
  console.log(arr.reduce(reducer, {}));  //{ a: 4, b: 2, c: 2 }
}



{
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'

  //const result = students.map((student) => console.log(student.score))
  //const result = students.map(((student) => student.score)).join() //45,80,90,66,88
  const result = students.map(((student) => student.score)).filter((score) => score >= 50).join() //80,90,66,88
  console.log(result);
}


console.clear();
//🤍 Array.sort((prev,current)=>{}) : return값이 마이너스 면  prev < current 간주되어 정렬되는 메서드 즉, 오름차순정렬
{
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  const result = students.map((student) => student.score).sort((a, b) => a - b).join();
  console.log(result); //45,66,80,88,90 
}

