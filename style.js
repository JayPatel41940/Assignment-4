function getData() {
    const weatherApiKey = 'd52514c49c334b6f616ede9fd4a8de2a';
    const apodApiKey = 'J7Xt5GrXbxsxJV2SebLB7i1MEF3CJFKcf4bhbrXS';
    const jokeApiUrl = 'https://api.chucknorris.io/jokes/random';
    const city = document.getElementById('cityInput').value;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`;
    const apodApiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apodApiKey}`;

    // Fetch weather data from OpenWeatherMap
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(weatherData => {
        const weatherInfo = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${weatherData.main.temp}°C</p>
            <p>Description: ${weatherData.weather[0].description}</p>
        `;
        document.getElementById('weatherData').innerHTML = weatherInfo;

        // Fetch APOD from NASA
        return fetch(apodApiUrl);
        })
        .then(response => response.json())
        .then(apodData => {
        const apodInfo = `
            <h2>Astronomy Picture of the Day</h2>
            <img src="${apodData.url}" alt="APOD">
            <p>${apodData.explanation}</p>
        `;
        document.getElementById('apodData').innerHTML = apodInfo;

        // Fetch a Chuck Norris joke
        return fetch(jokeApiUrl);
        })
        .then(response => response.json())
        .then(jokeData => {
        const joke = `<p><strong>Chuck Norris Joke:</strong> ${jokeData.value}</p>`;
        document.getElementById('joke').innerHTML = joke;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}