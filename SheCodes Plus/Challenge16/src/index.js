// JS Challenge 1
// Create an object weather and console log it
// JS Challenge 2
// Create an object weather with properties of temp and humidity and console log the object
let weather = {
  temp: 14,
  humidity: 3
};
console.log(weather);
// JS Challenge 3
// console log the humidity and the temperature
console.log(weather.temp);
console.log(weather.humidity);
// JS Challenge 4
// Add a property windSpeed and console log it
weather.windSpeed = "low";
console.log(weather);

// JS Challenge 5
// Console log the wind speed, the temperature and the humidity using the square brackets syntax
console.log(weather["windSpeed"]);
console.log(weather["temp"]);
console.log(weather["humidity"]);
// JS Challenge 6
// Create an object or an array of objects called `forecast` with each day’s temperature, and console log it
let forecast = [
  {
    day: "Monday",
    temp: 15
  },
  {
    day: "Tuesday",
    temp: 16
  },
  {
    day: "Wednesday",
    temp: 20
  },
  {
    day: "Thursday",
    temp: 14
  },
  {
    day: "Friday",
    temp: 22
  },
  {
    day: "Saturday",
    temp: 26
  },
  {
    day: "Sunday",
    temp: 18
  }
];
console.log(forecast);
