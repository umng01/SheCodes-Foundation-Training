let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true
};
// JS Challenge 1
// Given an object called paris, log its temperature
console.log(paris.temperature);
// JS Challenge 2
// Create an object called sydney similar to paris and log its temperature (use fake data)
let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 24,
  capitalCity: false
};
console.log(sydney.temperature);
// JS Challenge 3
// Create an array with 3 different Australian city names only and log each name
let australianCities = ["Sydney", "Melbourne", "Canberra"];
for (let i = 0; i < australianCities.length; i++) {
  console.log(australianCities[i]);
}
// JS Challenge 4
// Create an array of 3 cities with the same properties as paris and console log each city temperature

let cities = [
  {
    name: "New York",
    country: "USA",
    language: "English",
    temperature: 15,
    capitalCity: false
  },
  {
    name: "London",
    country: "UK",
    language: "English",
    temperature: 9,
    capitalCity: true
  },
  {
    name: "Cape Town",
    country: "South Africa",
    language: "English",
    temperature: 25,
    capitalCity: true
  }
];
console.log(cities[0].name);
console.log(cities[0].temperature);

console.log(cities[1].name);
console.log(cities[1].temperature);

console.log(cities[2].name);
console.log(cities[2].temperature);
