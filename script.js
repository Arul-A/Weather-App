const apiKey = "3e1a78eccf209189441f4e6637fb1828 ";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

let cityName = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        
        cityName.textContent = "Invalid city";
        temp.textContent = "0°C";
        humidity.textContent = "0%";
        wind.textContent = "0 km/h";

    }
    else {
        var data = await response.json();
        
        cityName.textContent = data.name;
        temp.textContent = Math.round(data.main.temp) + "°C";
        humidity.textContent = data.main.humidity + "%";
        wind.textContent = data.wind.speed + "km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector('.error').style.display = 'none';
    }


}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})



