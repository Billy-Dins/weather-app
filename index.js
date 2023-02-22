import { onLoad, fetchWeatherData, displayWeatherData } from './src/functions/dom_manipulation';
import { CityWeatherUrl } from './src/functions/api_manipulation';

import styles from './src/styles.css'

const weatherBtn = document.querySelector('.getWeatherBtn');
const cityInput = document.querySelector('.city-input')

weatherBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    let data = await fetchWeatherData(cityInput.value);
    displayWeatherData(data)
})

onLoad()