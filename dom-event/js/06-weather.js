const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "b1683453e53e15e4879c1ea14205ab0a";
// 참고 MDN : https://developer.mozilla.org/ko/docs/Web/API/GeolocationPosition
// 참고 OPEN API : https://openweathermap.org/current
function onGeoOk(position) {
    //console.log(position);
    //console.log(position.coords);
    //console.log(position.timestamp);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat} ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
}
function onGeoError(params) {
    alert("Can't find you. No weather for you.");
}


//getCurrentPosition(success콜백함수,error콜백함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
