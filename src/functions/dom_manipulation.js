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

let onLoad = async () => {
    let cityCoords = await getCityCoords('santa cruz de tenerife');
    getCitySun(cityCoords.lat, cityCoords.lon)
    displayWeatherData('santa cruz de tenerife')
}

let displayWeatherData = async (cityName) => {
    let url = fetchCityWeather(cityName)
    let response = await fetch(url)
    let cityWeather = await response.json()
    cityTitle.textContent = cityWeather.name;
    currentTemp.textContent = ` ${Math.round(cityWeather.main.temp)} °C`
    weatherDescription.textContent = cityWeather.weather[0].description
    feelsLike.textContent = Math.round(cityWeather.main.feels_like);
    dayOneHigh.textContent = Math.round(cityWeather.main.temp_max);
};

let setDate = () => {
    todaysDate.textContent = formatDate('day')
    todaysTime.textContent = formatDate('time')
};

let getCityCoords = async (cityName) => {
    let url = fetchCityWeather(cityName);
    let response = await fetch(url)
    let cityCoords = await response.json()
    return cityCoords.coord
};

let getCitySun = async (lat, lon) => {
    let citySun = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&timezone=EST&date=today`)
    const sunData = await citySun.json();
        sunriseTime.textContent = sunData.results.sunrise
        sunsetTime.textContent = sunData.results.sunset
};

export { onLoad }
