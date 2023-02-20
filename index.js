import getCityWeather from './src/app.js'

import styles from './src/styles.css'

const weatherBtn = document.querySelector('.getWeatherBtn');

weatherBtn.addEventListener('click', (event) => {
    event.preventDefault();
    getCityWeather();
})

getCityWeather()