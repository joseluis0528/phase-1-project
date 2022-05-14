document.addEventListener('DOMContentLoaded', () => {
    handleClick()
    handleSearchBar()
    getDate()
})

function fetchWeather (city) {
    let apikey = '19782ebac123657462f730bc4024cf5e'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`)
    .then(responce => responce.json())
    .then(data => this.displayWeather(data))
}

function displayWeather(data) {
    const {name} = data
    const {temp, temp_min, temp_max, humidity} = data.main
    const {description, icon} = data.weather[0]
    const {speed} = data.wind
    console.log(name, description, icon, temp, temp_max, temp_min, humidity, speed)

    document.querySelector('.city').innerText = `${name}`
    document.querySelector('.temperature').innerText = Math.round(`${temp}`) + '°F'
    document.querySelector('.highest').innerText ='H: ' + Math.round(`${temp_max}`) + '°'
    document.querySelector('.lowest').innerText = 'L: ' + Math.round(`${temp_min}`) + '°' 
    document.querySelector('.description').innerText = `${description}`
    document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${icon}.png`
    document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
    document.querySelector('.wind').innerText = 'Wind:' + ' ' + Math.round(`${speed}`) + ' ' + 'mph'
}

function citySearch() {
    this.fetchWeather(document.querySelector('.search-bar').value)
    document.querySelector('.search-bar').value = ''
}

function handleClick() {
    document.querySelector('button').addEventListener('click', () => {
        this.citySearch()
    })
}

function handleSearchBar() {
    document.querySelector('.search').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            this.citySearch()
        }
    })
}

function getDate() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    document.querySelector('.date').innerText = `${month}/${day}/${year}`
}