let country = "Guinea Bissau";
let city = " Sydney   ";
let place = "School";
let attraction = "Opera House";

country = country.replace(" ", "-");
console.log(country);

city = city.trim();
console.log(city);

attraction = attraction.toLowerCase();
console.log(attraction);

place = place.toUpperCase();
console.log(place);

console.log(`I went to visit the ${attraction} in ${city}, right next to my school. Now, I'm getting ready for my trip to ${country}!`);
