import { fetchForecast, CityWeatherUrl, fetchWeatherData, getCityCoords, getCitySun } from "./api_manipulation";
import { formatDate, getTimeZone, getTodaysDate } from "./format";

import { getDay, parseISO, parse } from 'date-fns'

const cityTitle = document.querySelector('.city-title');
const weatherDescription = document.querySelector('.weather-description');
const todaysDate = document.querySelector('.todays-date');
const todaysTime = document.querySelector('.todays-time');
const currentTemp = document.querySelector('.current-temperature');
const weatherIcon = document.querySelector('.weather-icon');
const unitsBtn = document.querySelector('.change-units')

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

let displayForecast = (data) => {
    let units
    if (currentData.units === 'imperial') {
        units = ' °F'
    } else {
        units = ' °C'
    }
    let forecastParent = fiveDayForecast.children
    for (let i = 0; i < forecastParent.length; i++) {
        forecastParent[i].children[0].textContent = getDayOfWeek(getDay(parseISO(data.list[((i+1)*8) -4].dt_txt.split(' ')[0])))
        forecastParent[i].children[2].textContent = `${Math.round(data.list[((i+1)*8) -4].main.temp)} ${units}`;
        forecastParent[i].children[1].textContent = `${Math.round(data.list[i*8].main.temp)} ${units}`;
    }
}

let onLoad = async () => {
    let cityWeatherData = await fetchWeatherData('santa cruz de tenerife', 'metric');
    setWeatherData(cityWeatherData)
    let cityCoords = await getCityCoords('santa cruz de tenerife');
    let sunData = await getCitySun(cityCoords.lat, cityCoords.lon, currentData.timezone);
    displaySunData(sunData)
    setDate();
    displayWeatherData(currentData)
    let forecastData = await fetchForecast(currentData)
    displayForecast(forecastData);
};

let reLoad = async () => {
    let forecastData = await fetchForecast(currentData)
    if (currentData.units === 'imperial') {
        currentData.units = 'metric'
        unitsBtn.textContent = 'Farenheit'
        let cityWeatherData = await fetchWeatherData(currentData.title, 'metric');
        setWeatherData(cityWeatherData)
    } else {
        currentData.units = 'imperial'
        unitsBtn.textContent = 'Celcius'
        let cityWeatherData = await fetchWeatherData(currentData.title, 'imperial')
        console.log(cityWeatherData)
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

export { currentData, onLoad, fetchWeatherData, setWeatherData, displayWeatherData, reLoad, fetchForecast, displayForecast, setDate }
