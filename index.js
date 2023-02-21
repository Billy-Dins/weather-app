import { getCityWeather, setDate } from './src/functions/dom_manipulation';

import styles from './src/styles.css'

const weatherBtn = document.querySelector('.getWeatherBtn');
const cityInput = document.querySelector('.city-input')

setDate();

weatherBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getCityWeather(cityInput.value)
})

getCityWeather('toronto');