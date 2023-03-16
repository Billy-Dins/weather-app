import { getWeatherIcon, fetchForecast, fetchWeatherData, getCityCoords, getCitySun } from "./api_manipulation";
import { formatDate, getTimeZone } from "./format";

import { getDay, parseISO } from 'date-fns'

const cityTitle = document.querySelector('.city-title');
const weatherDescription = document.querySelector('.weather-description');
const todaysDate = document.querySelector('.todays-date');
const todaysTime = document.querySelector('.todays-time');
const currentTemp = document.querySelector('.current-temperature');
const weatherIcon = document.querySelector('.weather-icon');
const unitsBtn = document.querySelector('.change-units')
const cityInput = document.querySelector('.city-input');
const errorMessage = document.querySelector('.error-message')

const feelsLike = document.querySelector('.feels-like-temp')
const sunriseTime = document.querySelector('.sunrise-time');
const sunsetTime = document.querySelector('.sunset-time')

let fiveDayForecast = document.querySelector('.five-day-forecast')

let currentData = {units: 'metric'}

let getDayOfWeek = (dayOfWeek) => {
    if (dayOfWeek == '0') {
        return 'Sunday'
    } else if (dayOfWeek == '1') {
        return 'Monday'
    } else if (dayOfWeek == '2') {
        return 'Tuesday'
    } else if (dayOfWeek == '3') {
        return 'Wednesday'
    } else if (dayOfWeek == '4') {
        return 'Thursday'
    } else if (dayOfWeek == '5') {
        return 'Friday'
    } else if (dayOfWeek == '6') {
        return 'Saturday'   
    }
}
// Loops through the number of forecast requests (base 5),
// then attaches day, temp high/low & icon that correlates with weather.
// Only 3 hour forecast is available for free so generally mid day is the warmest
// and early morning is coldest, that is where data is retrieved.
let displayForecast = async (data) => {
    try {
    let units
    if (currentData.units === 'imperial') {
        units = ' °F'
    } else {
        units = ' °C'
    }
    let forecastParent = fiveDayForecast.children
    for (let i = 0; i < forecastParent.length; i++) {
        forecastParent[i].children[3].src = await getWeatherIcon(data.list[((i+1)*8) -4].weather[0].icon)
        forecastParent[i].children[0].textContent = getDayOfWeek(getDay(parseISO(data.list[((i+1)*8) -4].dt_txt.split(' ')[0])))
        forecastParent[i].children[2].textContent = `${Math.round(data.list[((i+1)*8) -4].main.temp)} ${units}`;
        forecastParent[i].children[1].textContent = `${Math.round(data.list[i*8].main.temp)} ${units}`;
    } 
        errorMessage.classList.add('hidden')
    } catch (error) {
        errorMessage.classList.remove('hidden')
    }
}
// Takes input/requested city value and currentData object to that city data.
let loadNewCity = async () => {
    let data = await fetchWeatherData(cityInput.value, currentData.units);
    try {
    setWeatherData(data)
    let weatherIcon = await getWeatherIcon(currentData.icon);
    displayWeatherIcon(weatherIcon);
    displayWeatherData()
    cityInput.value = ''
    let forecastData = await fetchForecast(currentData)
    let cityCoords = await getCityCoords(currentData.title);
    let sunData = await getCitySun(cityCoords.lat, cityCoords.lon, currentData.timezone);
    displaySunData(sunData)
    displayForecast(forecastData);
    setDate();
        errorMessage.classList.add('hidden')
    } catch (error) {
        errorMessage.classList.remove('hidden')
    }
}

let displayWeatherIcon = (icon) => {
    weatherIcon.src = icon
}

let onLoad = async () => {
    let cityWeatherData = await fetchWeatherData('santa cruz de tenerife', 'metric');
    setWeatherData(cityWeatherData)
    let weatherIcon = await getWeatherIcon(currentData.icon);
    displayWeatherIcon(weatherIcon);
    let cityCoords = await getCityCoords('santa cruz de tenerife');
    let sunData = await getCitySun(cityCoords.lat, cityCoords.lon, currentData.timezone);
    displaySunData(sunData)
    setDate();
    displayWeatherData(currentData)
    let forecastData = await fetchForecast(currentData)
    displayForecast(forecastData);
};

let reLoad = async () => {
    if (currentData.units === 'imperial') {
        currentData.units = 'metric'
        unitsBtn.textContent = 'Display °F'
        let cityWeatherData = await fetchWeatherData(currentData.title, 'metric');
        setWeatherData(cityWeatherData)
    } else {
        currentData.units = 'imperial'
        unitsBtn.textContent = 'Display °C'
        let cityWeatherData = await fetchWeatherData(currentData.title, 'imperial')
        setWeatherData(cityWeatherData)
    }
    let forecast = await fetchForecast(currentData);
    displayWeatherData()
    displayForecast(forecast)
};

let displaySunData = (data) => {
    sunriseTime.textContent = data.sunrise
    sunsetTime.textContent = data.sunset
};

let displayWeatherData = () => {
    let units
    if (currentData.units === 'imperial') {
        units = ' °F'
    } else {
        units = ' °C'
    }
    cityTitle.textContent = currentData.title;
    currentTemp.textContent = ` ${Math.round(currentData.temp)} ${units}`
    weatherDescription.textContent = currentData.weather
    feelsLike.textContent = `${Math.round(currentData.feelsLike)} ${units}`;
};

let setWeatherData = (data) => {
    currentData.icon = data.weather[0].icon
    currentData.timezone = getTimeZone(data.timezone)
    currentData.lon = data.coord.lon
    currentData.lat = data.coord.lat
    currentData.title = data.name;
    currentData.temp = Math.round(data.main.temp);
    currentData.weather = data.weather[0].description;
    currentData.feelsLike = Math.round(data.main.feels_like);
};

let setDate = () => {
    todaysDate.textContent = formatDate('day', currentData.timezone)
    todaysTime.textContent = formatDate('time', currentData.timezone)
};

export { currentData, onLoad, loadNewCity, fetchWeatherData, setWeatherData, displayWeatherData, reLoad, fetchForecast, displayForecast, setDate, getCityCoords }
