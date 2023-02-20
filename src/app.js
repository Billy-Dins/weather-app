const cityTitle = document.querySelector('.city-title');
const weatherDescription = document.querySelector('.weather-description');
const todaysDate = document.querySelector('.todays-date');
const todaysTime = document.querySelector('.todays-time');
const currentTemp = document.querySelector('.current-temperature');
const weatherIcon = document.querySelector('.weather-icon');

const feelsLike = document.querySelector('.feels-like')
const chanceOfRain = document.querySelector('.feels-like-temp')
const sunriseTime = document.querySelector('.sunrise-time');
const sunsetTime = document.querySelector('.sunset-time')

let displayWeatherData = (cityWeather) => {
    cityTitle.textContent = cityWeather.name;
    currentTemp.textContent = ` ${cityWeather.main.temp} °C`
    weatherDescription.textContent = cityWeather.weather[0].description
    feelsLike.textContent = cityWeather.main.feels_like;
};

let lon = '-16.2546'
let lat = '28.4682'

let getFiveDayForecast = async () => {
    let forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=metric`);
    forecast.json().then((forecast) => {
        console.log(forecast.list)
    })
}

let getCityWeather = async () => {
    let cityInput = document.querySelector('.cityInput')
    let cityName = ''
    if (cityInput.value === '') {
        cityName = 'Santa Cruz de Tenerife'
    } else {
        cityName = cityInput.value;
    }
    let cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=metric`)
    cityWeather.json().then((cityWeather) => {
        console.log(cityWeather)
        displayWeatherData(cityWeather);
        lon = cityWeather.coord.lon
        lat = cityWeather.coord.lat
    })
    .then(getCitySun())
    .then(getFiveDayForecast())
};

let getCitySun = async () => {
    let citySun = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&timezone=EST&date=today`)
    citySun.json().then((citySun) => {
        sunriseTime.textContent = citySun.results.sunrise
        sunsetTime.textContent = citySun.results.sunset
    })
}

export default getCityWeather;
