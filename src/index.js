let content = document.querySelector('.content')

let createDiv = (newContent) => {
    let newDiv = document.createElement('div');
    newDiv.textContent = newContent;
    content.appendChild(newDiv);
}

let getCityWeather = async () => {
    let cityRequest = 'Toronto'
    let cityWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityRequest}&appid=05f38c988f47ba62b87ed1de9b4136f4&units=metric`)
    cityWeather.json().then((cityWeather) => {
        console.log(cityWeather)
        createDiv(cityWeather.weather[0].description)
        createDiv(`temperature in ${cityWeather.name} is ${cityWeather.main.temp}°C `)
    })
}
getCityWeather();