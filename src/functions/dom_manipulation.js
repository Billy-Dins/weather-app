import { fetchCityWeather } from "./api_manipulation";
import { formatDate } from "./format";

const cityTitle = document.querySelector('.city-title');
const weatherDescription = document.querySelector('.weather-description');
const todaysDate = document.querySelector('.todays-date');
const todaysTime = document.querySelector('.todays-time');
const currentTemp = document.querySelector('.current-temperature');
const weatherIcon = document.querySelector('.weather-icon');

const feelsLike = document.querySelector('.feels-like-temp')
const sunriseTime = document.querySelector('.sunrise-time');
const sunsetTime = document.querySelector('.sunset-time')

const dayOneHigh = document.querySelector('.day-one-high')
const dayOneLow = document.querySelector('.day-one-low');
const dayTwoHigh = document.querySelector('.day-two-high')
const dayTwoLow = document.querySelector('.day-two-low')
const dayThree = document.querySelector('.day-three')
const dayFour = document.querySelector('.day-four')
const dayFive = document.querySelector('.day-five')

let displayWeatherData = (cityWeather) => {
    cityTitle.textContent = cityWeather.name;
    currentTemp.textContent = ` ${Math.round(cityWeather.main.temp)} °C`
    weatherDescription.textContent = cityWeather.weather[0].description
    feelsLike.textContent = Math.round(cityWeather.main.feels_like);
    dayOneHigh.textContent = Math.round(cityWeather.main.temp_max);
};

let lon = '-16.2546'
let lat = '28.4682'

let setDate = () => {
    todaysDate.textContent = formatDate('day')
    todaysTime.textContent = formatDate('time')
}

let getCityWeather = async (cityName) => {
    let url = fetchCityWeather(cityName);
    let cityWeather = await fetch(url)
    cityWeather.json().then((cityWeather) => {
        displayWeatherData(cityWeather);
        lon = cityWeather.coord.lon
        lat = cityWeather.coord.lat
    })
    .then (getCitySun());
}

/* /let getCityWeather = async () => {
    console.log(Date)
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
    await getCitySun()
    await getFiveDayForecast()
}; */

let getCitySun = async () => {
    let citySun = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&timezone=EST&date=today`)
    citySun.json().then((citySun) => {
        sunriseTime.textContent = citySun.results.sunrise
        sunsetTime.textContent = citySun.results.sunset
    })
}

export { getCityWeather, setDate }
