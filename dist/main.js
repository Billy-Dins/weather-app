/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const content = document.querySelector('.content')
const weatherBtn = document.querySelector('.getWeatherBtn'); 

let createDiv = (newContent) => {
    let newDiv = document.createElement('div');
    newDiv.textContent = newContent;
    content.appendChild(newDiv);
};

let displayWeatherData = (cityWeather) => {
    createDiv(cityWeather.weather[0].description)
    createDiv(`temperature in ${cityWeather.name} is ${cityWeather.main.temp}°C `)
    createDiv(`windspeed in ${cityWeather.name} is ${cityWeather.wind.speed} km/h`)
};

let getCityWeather = async () => {
    let cityName = ''
    let cityInput = document.querySelector('.cityInput')
    if (cityInput.value === '') {
        cityName = 'Santa Cruz de Tenerife'
    } else {
        cityName = cityInput.value;
    }
    let cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=metric`)
    cityWeather.json().then((cityWeather) => {
        console.log(cityWeather)
        displayWeatherData(cityWeather);
    })
};

let getCitySun = async () => {
    let citySun = await fetch(`https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=EST&date=today`)
    citySun.json().then((citySun) => {
        console.log(citySun.results.sunrise)
    })
} 
weatherBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getCityWeather();
})

getCityWeather();
getCitySun();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGtCQUFrQixLQUFLLHNCQUFzQjtBQUM3RSw4QkFBOEIsa0JBQWtCLEtBQUssd0JBQXdCO0FBQzdFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLHVGQUF1RixTQUFTO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbmNvbnN0IHdlYXRoZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0V2VhdGhlckJ0bicpOyBcblxubGV0IGNyZWF0ZURpdiA9IChuZXdDb250ZW50KSA9PiB7XG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IG5ld0NvbnRlbnQ7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xufTtcblxubGV0IGRpc3BsYXlXZWF0aGVyRGF0YSA9IChjaXR5V2VhdGhlcikgPT4ge1xuICAgIGNyZWF0ZURpdihjaXR5V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKVxuICAgIGNyZWF0ZURpdihgdGVtcGVyYXR1cmUgaW4gJHtjaXR5V2VhdGhlci5uYW1lfSBpcyAke2NpdHlXZWF0aGVyLm1haW4udGVtcH3CsEMgYClcbiAgICBjcmVhdGVEaXYoYHdpbmRzcGVlZCBpbiAke2NpdHlXZWF0aGVyLm5hbWV9IGlzICR7Y2l0eVdlYXRoZXIud2luZC5zcGVlZH0ga20vaGApXG59O1xuXG5sZXQgZ2V0Q2l0eVdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNpdHlOYW1lID0gJydcbiAgICBsZXQgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHlJbnB1dCcpXG4gICAgaWYgKGNpdHlJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgY2l0eU5hbWUgPSAnU2FudGEgQ3J1eiBkZSBUZW5lcmlmZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaXR5TmFtZSA9IGNpdHlJbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgbGV0IGNpdHlXZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9MDVmMzhjOTg4ZjQ3YmE2MmI4N2VkMWRlOWI0MTM2ZjQmdW5pdHM9bWV0cmljYClcbiAgICBjaXR5V2VhdGhlci5qc29uKCkudGhlbigoY2l0eVdlYXRoZXIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2l0eVdlYXRoZXIpXG4gICAgICAgIGRpc3BsYXlXZWF0aGVyRGF0YShjaXR5V2VhdGhlcik7XG4gICAgfSlcbn07XG5cbmxldCBnZXRDaXR5U3VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBjaXR5U3VuID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnN1bnJpc2VzdW5zZXQuaW8vanNvbj9sYXQ9MzguOTA3MTkyJmxuZz0tNzcuMDM2ODczJnRpbWV6b25lPUVTVCZkYXRlPXRvZGF5YClcbiAgICBjaXR5U3VuLmpzb24oKS50aGVuKChjaXR5U3VuKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHlTdW4ucmVzdWx0cy5zdW5yaXNlKVxuICAgIH0pXG59IFxud2VhdGhlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ2V0Q2l0eVdlYXRoZXIoKTtcbn0pXG5cbmdldENpdHlXZWF0aGVyKCk7XG5nZXRDaXR5U3VuKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9