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


function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let displayCity = document.querySelector("#display-city");
  displayCity.innerHTML = `${cityInput.value}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", showCity);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", function (event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = "55";
})