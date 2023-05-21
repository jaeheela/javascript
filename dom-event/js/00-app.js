'use strict';
//const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
//console.dir(loginForm);
//console.dir(loginInput);
//console.dir(loginButton);

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     //유효성검사
//     if (username === "") {
//         alert("Please write your name.");
//     } else if (username.length > 15) {
//         alert("Your name is too long.");
//     }
// }

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");


//event객체 : 이벤트 발생 시 생성되는 여러 정보들이 담겨 있음
function onLoginSubmit(event) {
    event.preventDefault();
    //console.log(event);

}
function handleLinkClick(event) {
    //event.preventDefault();
    console.dir(event);
    console.log(event);
    alert(event);

}
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick)