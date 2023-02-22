import { onLoad } from './src/functions/dom_manipulation';

import styles from './src/styles.css'

const weatherBtn = document.querySelector('.getWeatherBtn');
const cityInput = document.querySelector('.city-input')

weatherBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getCityWeather(cityInput.value)
})

onLoad()