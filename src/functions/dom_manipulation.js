import { fetchForecast, CityWeatherUrl, fetchWeatherData, getCityCoords, getCitySun } from "./api_manipulation";
import { formatDate } from "./format";

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
const dayOneHigh = document.querySelector('.day-one-high')
const dayOneLow = document.querySelector('.day-one-low');

const dayTwoHigh = document.querySelector('.day-two-high')
const dayTwoLow = document.querySelector('.day-two-low')
const dayThree = document.querySelector('.day-three')
const dayFour = document.querySelector('.day-four')
const dayFive = document.querySelector('.day-five')

let currentData = {units: 'metric'}

let displayForecast = (data) => {
    let units
    if (currentData.units === 'imperial') {
        units = ' °F'
    } else {
        units = ' °C'
    }
    let forecastParent = fiveDayForecast.children
    console.log(data)
    for (let i = 0; i < forecastParent.length; i++) {
        forecastParent[i].children[0].textContent = data.list[((i+1)*8) -4].dt_txt.split(' ')[0]
        forecastParent[i].children[1].textContent = `${Math.round(data.list[((i+1)*8) -4].main.temp)} ${units}`;
        forecastParent[i].children[2].textContent = `${Math.round(data.list[i*8].main.temp)} ${units}`;
    }
}

let onLoad = async () => {
    let cityCoords = await getCityCoords('santa cruz de tenerife');
    let sunData = await getCitySun(cityCoords.lat, cityCoords.lon);
    displaySunData(sunData)
    let cityWeatherData = await fetchWeatherData('santa cruz de tenerife', 'metric');
    setDate();
    setWeatherData(cityWeatherData)
    displayWeatherData(currentData)
    let forecastData = await fetchForecast(currentData)
    displayForecast(forecastData);
};

let reLoad = async () => {
    let forecastData = await fetchForecast(currentData)
    if (currentData.units === 'metric' || !currentData.units) {
        currentData.units = 'imperial'
        unitsBtn.textContent = 'Celcius'
        let cityWeatherData = await fetchWeatherData(currentData.title, 'imperial')
        setWeatherData(cityWeatherData)
    } else {
        let cityWeatherData = await fetchWeatherData(currentData.title, 'metric');
        setWeatherData(cityWeatherData)
        currentData.units = 'metric'
        unitsBtn.textContent = 'Farenheit'
    }
    displayWeatherData()
    displayForecast(forecastData)
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
    currentData.lon = data.coord.lon
    currentData.lat = data.coord.lat
    currentData.title = data.name;
    currentData.temp = Math.round(data.main.temp);
    currentData.weather = data.weather[0].description;
    currentData.feelsLike = Math.round(data.main.feels_like);
};

let setDate = () => {
    todaysDate.textContent = formatDate('day')
    todaysTime.textContent = formatDate('time')
};

export { currentData, onLoad, fetchWeatherData, setWeatherData, displayWeatherData, reLoad, fetchForecast, displayForecast }
