const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
//console.dir(toDoForm);
//console.dir(toDoInput);
//console.dir(toDoList);

const TODOS_KEY = "todos";
let toDos = [];

/**
 * ❌ 버튼 클릭이벤트 발생 시
 * li태그 삭제 
 * (li를 식별할 수 있는 id값 부여해 삭제)
 */
function removeToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    //toDo.id : 배열에 있는 id값 = number ( - Date.now())
    //li.id : 자바스크립트로 생성한 li태그의 id값 = String
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //true만 새배열로 반환
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
/**
 * li 태그 동적으로 생성해 부착
 */
function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", removeToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

/**
 * toDoForm에 제출이벤트 발생 시 
 * toDos 배열에 id:"랜덤값", text:"value값" 형태로 저장
 * localStorage에 "todos" 이름으로 toDos 배열 전체 저장
 */
function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";//입력값 초기화
    const newTodoObj = {
        id: Date.now(),
        text: newTodo
    };
    console.log(newTodoObj.text);
    console.log(newTodoObj.id);
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);