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

let fetchWeatherData = async (cityName, units) => {
    let url = CityWeatherUrl(cityName, units)
    let response = await fetch(url)
        return await response.json()
};

let fetchForecast = async (data) => {
    let url = fetchForecastUrl(data);
    let response = await fetch(url)
        return await response.json();
}

let getCityCoords = async (cityName) => {
    let url = CityWeatherUrl(cityName);
    let response = await fetch(url)
    let cityCoords = await response.json()
        return cityCoords.coord
};

export { CityWeatherUrl, getCitySun, getCityCoords, fetchForecast, fetchWeatherData }