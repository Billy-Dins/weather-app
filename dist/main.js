/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let content = document.querySelector('.content')

let createDiv = (newContent) => {
    let newDiv = document.createElement('div');
    newDiv.textContent = newContent;
    content.appendChild(newDiv);
}

let getCityWeather = async () => {
    let cityRequest = 'Toronto'
    let cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityRequest}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=metric`)
    cityWeather.json().then((cityWeather) => {
        console.log(cityWeather)
        createDiv(cityWeather.weather[0].description)
        createDiv(`temperature in ${cityWeather.name} is ${cityWeather.main.temp}°C `)
    })
}
getCityWeather();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVGQUF1RixZQUFZO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxrQkFBa0IsS0FBSyxzQkFBc0I7QUFDakYsS0FBSztBQUNMO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxubGV0IGNyZWF0ZURpdiA9IChuZXdDb250ZW50KSA9PiB7XG4gICAgbGV0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IG5ld0NvbnRlbnQ7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdEaXYpO1xufVxuXG5sZXQgZ2V0Q2l0eVdlYXRoZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgbGV0IGNpdHlSZXF1ZXN0ID0gJ1Rvcm9udG8nXG4gICAgbGV0IGNpdHlXZWF0aGVyID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5UmVxdWVzdH0mYXBwaWQ9MDVmMzhjOTg4ZjQ3YmE2MmI4N2VkMWRlOWI0MTM2ZjQmdW5pdHM9bWV0cmljYClcbiAgICBjaXR5V2VhdGhlci5qc29uKCkudGhlbigoY2l0eVdlYXRoZXIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2l0eVdlYXRoZXIpXG4gICAgICAgIGNyZWF0ZURpdihjaXR5V2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKVxuICAgICAgICBjcmVhdGVEaXYoYHRlbXBlcmF0dXJlIGluICR7Y2l0eVdlYXRoZXIubmFtZX0gaXMgJHtjaXR5V2VhdGhlci5tYWluLnRlbXB9wrBDIGApXG4gICAgfSlcbn1cbmdldENpdHlXZWF0aGVyKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9