window.addEventListener('load', () => {
    const apiKey = "9c4ee5c230f15f43a4c1f808dd6d7678";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "D:/codes/ACTIVITY/WeatherApp/clouds.png";
            } 
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "D:/codes/ACTIVITY/WeatherApp/clear.png";
            } 
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "D:/codes/ACTIVITY/WeatherApp/rain.png";
            } 
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "D:/codes/ACTIVITY/WeatherApp/drizzle.png";
            } 
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "D:/codes/ACTIVITY/WeatherApp/mist.png";
            }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    });
});
