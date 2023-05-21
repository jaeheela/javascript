const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logoutBtn");
//console.dir(loginForm);
//console.dir(loginInput);
//console.dir(greeting);

const USERNAME_KEY = "username";
const NONE_CLASSNAME = "none";

/**
 * loginForm에 submit 이벤트 발생 시 
 * ( =이름 작성해(유효성 검사) 로그인 성공 시) >> loginForm 요소 숨기기 >> localStorage에 이름 저장 >> greeting 함수 호출
*/
function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;

    //loginForm.style.display = "none";
    loginForm.classList.add(NONE_CLASSNAME);

    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

/**
 * 로그인 후 보일 화면
 * greeting 요소에 text 삽입 >> greeting  요소 보이기 >> loginForm 요소 숨기기
 */
function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(NONE_CLASSNAME);
    loginForm.classList.add(NONE_CLASSNAME);
}

/**
 * 이벤트 리스너 등록 + localStorage 이용(로그인 시 상태 유지하기 위해)
 * localStorage : 개발자도구 >> application TAB
 * 만약 localStorage에 이름이 없다면 >> onLoginSubmit 이벤트 함수 발생 
 * 만약 localStorage에 이름이 있다면 >> paintGreetings 이벤트 함수 발생
*/
const savedUsername = localStorage.getItem(USERNAME_KEY); //localStorage에 저장된 이름
if (savedUsername == null) {
    loginForm.classList.remove(NONE_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
logoutBtn.addEventListener("click", onLogout);


/**
 * logoutBtn에 click 이벤트 발생 시 
 * localStorage에 이름 삭제 >> greeting 요소 숨기기 >> loginForm 요소 보이기
 */
function onLogout(event) {
    event.preventDefault();
    localStorage.removeItem(USERNAME_KEY);
    greeting.classList.add(NONE_CLASSNAME);
    loginForm.classList.remove(NONE_CLASSNAME);
}


