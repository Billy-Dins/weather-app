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