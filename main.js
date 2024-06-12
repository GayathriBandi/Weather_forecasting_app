
async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '7caa2f66047f336e1ec45f88c5de12b7'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            updateWeather(data);
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert('Failed to fetch weather data');
    }
}

function updateWeather(data) {
    document.getElementById('current-temp').textContent = `Current Temperature: ${data.main.temp}°C`;
    document.getElementById('feels-like').textContent = `Feels Like: ${data.main.feels_like}°C`;
    document.getElementById('weather-condition').textContent = `Weather Condition: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').textContent = `Wind: ${data.wind.speed} m/s`;
    document.getElementById('visibility').textContent = `Visibility: ${data.visibility / 1000} km`;
    document.getElementById('pressure').textContent = `Pressure: ${data.main.pressure} hPa`;
}
