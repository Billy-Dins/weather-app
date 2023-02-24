import { currentData, onLoad, fetchWeatherData, displayWeatherData, reLoad, setWeatherData, fetchForecast, displayForecast, setDate } from './src/functions/dom_manipulation';

import styles from './src/styles.css'

const weatherBtn = document.querySelector('.getWeatherBtn');
const cityInput = document.querySelector('.city-input');
const unitBtn = document.querySelector('.change-units');

weatherBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    let data = await fetchWeatherData(cityInput.value, currentData.units);
    setWeatherData(data)
    displayWeatherData()
    cityInput.value = ''
    let forecastData = await fetchForecast(currentData)
    displayForecast(forecastData);
    setDate();
})

unitBtn.addEventListener('click', () => {
    reLoad();
})

onLoad()