import { CityWeatherUrl } from "./api_manipulation";
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
    let sunData = await getCitySun(cityCoords.lat, cityCoords.lon);
    displaySunData(sunData)
    let cityWeatherData = await fetchWeatherData('santa cruz de tenerife');
    displayWeatherData(cityWeatherData)
    setDate();
}

let displaySunData = (data) => {
    sunriseTime.textContent = data.sunrise
    sunsetTime.textContent = data.sunset
}

let displayWeatherData = (data) => {
    cityTitle.textContent = data.name;
    currentTemp.textContent = ` ${Math.round(data.main.temp)} °C`
    weatherDescription.textContent = data.weather[0].description
    feelsLike.textContent = `${Math.round(data.main.feels_like)} °C`;
    dayOneHigh.textContent = Math.round(data.main.temp_max);
}

let fetchWeatherData = async (cityName) => {
    let url = CityWeatherUrl(cityName)
    let response = await fetch(url)
    return await response.json()
};

let setDate = () => {
    todaysDate.textContent = formatDate('day')
    todaysTime.textContent = formatDate('time')
};

let getCityCoords = async (cityName) => {
    let url = CityWeatherUrl(cityName);
    let response = await fetch(url)
    let cityCoords = await response.json()
    return cityCoords.coord
};

let getCitySun = async (lat, lon) => {
    let citySun = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&timezone=EST&date=today`)
    const sunData = await citySun.json();
        return sunData.results
};

export { onLoad, fetchWeatherData, displayWeatherData }
