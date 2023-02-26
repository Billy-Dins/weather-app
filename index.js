import { onLoad, loadNewCity, reLoad, } from './src/functions/dom_manipulation';

import styles from './src/styles.css'

import thermometer from './src/assets/thermometer.png'
import sunrise from './src/assets/sunrise.png'
import sunset from './src/assets/sunset.png'

const weatherBtn = document.querySelector('.getWeatherBtn');
const unitBtn = document.querySelector('.change-units');

onLoad()

weatherBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    loadNewCity();
});

unitBtn.addEventListener('click', () => {
    reLoad();
});