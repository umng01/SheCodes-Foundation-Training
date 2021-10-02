let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let date = document.querySelector("#date");
date.innerHTML = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;

function displayWeatherCondition(response) {
  document.querySelector("#display-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}
function searchCity(city) {
  let apiKey = 'ac209dae1f283fb332a5bb7f50b0f468';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  console.log(apiUrl);
}
function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
  
}

function searchLocation(position) {
  let apiKey = 'ac209dae1f283fb332a5bb7f50b0f468';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeatherCondition);
  // 
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", showCity);


let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

//ac209dae1f283fb332a5bb7f50b0f468

searchCity("delhi");