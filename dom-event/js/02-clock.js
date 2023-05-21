const clock = document.querySelector("h2#clock");
//console.dir(clock);

//setInterval(() => console.log("hi"), 1000);
getClock();//즉시실행
setInterval(getClock, 1000);

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, 0);
    const minutes = String(date.getMinutes()).padStart(2, 0);
    const seconds = String(date.getSeconds()).padStart(2, 0);
    //console.log(`${hours} : ${minutes} : ${seconds}`);
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}