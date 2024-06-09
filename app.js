const apiKey = "8781523e8c4370b7a1e4e5659336946e"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchInput = document.querySelector(".search input");
const button = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

const updateWeather = async function (location) {
    try {
        const res = await axios.get(`${apiURL}${location}&appid=${apiKey}`)
        console.log(res.data)
        if (res.status === 404) {
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none"
        } else {
            document.querySelector(".city").textContent = res.data.name;
            document.querySelector(".temp").textContent = Math.round(res.data.main.temp) + "°C";
            document.querySelector(".humidity").textContent = res.data.main.humidity + "%";
            document.querySelector(".wind").textContent = res.data.wind.speed + " km/h";

            let iconSrc;
            switch (res.data.weather[0].main) {
                case "Clouds":
                    iconSrc = "./images/clouds.png"
                    break;
                case "Drizzle":
                    iconSrc = "./images/drizzle.png"
                    break;
                case "Ash":
                    iconSrc = "./images/ash.png"
                    break;
                case "Snow":
                    iconSrc = "./images/snow.png"
                    break;
                case "Thunderstorm":
                    iconSrc = "./images/tstorm.png"
                    break;
                case "Clear":
                    iconSrc = "./images/clear.png"
                    break;
                case "Tornado":
                    iconSrc = "./images/tornado.png"
                    break;
                case "Rain":
                case "Squall":
                    iconSrc = "./images/rain.png"
                    break;
                case "Sand":
                case "Dust":
                    iconSrc = "./images/sand.png"
                    break;
                case "Mist":
                case "Haze":
                case "Fog":
                case "Smoke":
                    iconSrc = "./images/mist.png"
                    break;
            }
            icon.src = iconSrc

            document.querySelector(".error").style.display = "none"
            document.querySelector(".weather").style.display = "block"
            searchInput.value = "";
        }
    } catch (e) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
        console.log(e)
        searchInput.value = "";
    }
}

button.addEventListener("click", function () {
    updateWeather(searchInput.value)
})



// clouds, drizzle, ash, snow, thunderstorm, clear, tornado, (rain, squall), (mist, haze, fog, smoke), (sand,dust)