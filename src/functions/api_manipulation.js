import { currentData } from "./dom_manipulation";

let CityWeatherUrl = (cityName, units) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=${units}`
};

let fetchForecastUrl = (data) => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${data.lat}&lon=${data.lon}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=${data.units}`
}

let getCitySun = async (lat, lon, timezone) => {
    let citySun = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}&timezone=${timezone}&date=today`)
    const sunData = await citySun.json();
        return sunData.results
};

let getWeatherIcon = async (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`
}

let fetchWeatherData = async (cityName, units) => {
    let url = CityWeatherUrl(cityName, units)
    try {
        let response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log(`Error at line 21... ${error}`)
    }
};

let fetchForecast = async (data) => {
    try {
    let url = fetchForecastUrl(data);
    let response = await fetch(url)
        return await response.json();
    }
    catch (error) {
        console.log(`Error at line 21... ${error}`)
    }
}

let getCityCoords = async (cityName) => {
    try {
    let url = CityWeatherUrl(cityName, currentData.units);
    let response = await fetch(url)
    let cityCoords = await response.json()
        return cityCoords.coord
    } catch (error) {
        console.log(`Error at line 21... ${error}`)
    }
};

export { CityWeatherUrl, getCitySun, getCityCoords, fetchForecast, fetchWeatherData, getWeatherIcon }