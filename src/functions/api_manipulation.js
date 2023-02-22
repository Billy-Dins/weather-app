let CityWeatherUrl = (cityName, units) => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=${units}`
};

export { CityWeatherUrl }