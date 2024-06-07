const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const apiKey = "8781523e8c4370b7a1e4e5659336946e";
const icon = document.querySelector(".weather-icon");
const input = document.querySelector(".search input");
const button = document.querySelector(".search button");

const checkWeather = async function (location) {
    try {
        const res = await axios.get(apiURL + location + `&appid=${apiKey}`)

        if (res.status === 404) {
            document.querySelector(".error").style.display = "block"
            document.querySelector(".weather").style.display = "none";
        } else {
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

            document.querySelector(".city").innerHTML = res.data.name;
            document.querySelector(".temp").innerHTML = Math.round(res.data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = res.data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = res.data.wind.speed + "km/h";
            console.log(res.data)

            if (res.data.weather[0].main === "Clouds") {
                icon.src = "./images/clouds.png"
            } else if (res.data.weather[0].main === "Drizzle") {
                icon.src = "./images/drizzle.png"
            } else if (res.data.weather[0].main === "Ash") {
                icon.src = "./images/ash.png"
            } else if (res.data.weather[0].main === "Snow") {
                icon.src = "./images/snow.png"
            } else if (res.data.weather[0].main === "Thunderstorm") {
                icon.src = "./images/tstorm.png"
            } else if (res.data.weather[0].main === "Clear") {
                icon.src = "./images/clear.png"
            } else if (res.data.weather[0].main === "Tornado") {
                icon.src = "./images/tornado.png"
            } else if (res.data.weather[0].main === "Rain" || res.data.weather[0].main === "Squall") {
                icon.src = "./images/rain.png"
            } else if (res.data.weather[0].main === "Mist" || res.data.weather[0].main === "Haze" || res.data.weather[0].main === "Fog" || res.data.weather[0].main === "Smoke") {
                icon.src = "./images/mist.png"
            } else if (res.data.weather[0].main === "Sand" || res.data.weather[0].main === "Dust") {
                icon.src = "./images/sand.png"
            }

            input.value = "";

        }
    } catch (e) {
        console.error(e)
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none";
    }
}

button.addEventListener("click", function () {
    checkWeather(input.value)
})

// (rain,squall) (Haze Mist Fog Smoke) (Sand Dust)
//Clouds Drizzle Ash Snow Thunderstorm Clear Tornado

// https://api.openweathermap.org/data/2.5/weather?q=balanga&appid=8781523e8c4370b7a1e4e5659336946e&units=metric


