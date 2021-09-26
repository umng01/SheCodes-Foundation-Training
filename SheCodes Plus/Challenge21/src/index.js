// JS Challenge 1
// Log the current date
let now = new Date();
console.log(now.getDate());

// JS Challenge 2
// Log the number of milliseconds in the current time
console.log(now.getMilliseconds());
// JS Challenge 3
// Log the current day
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log(days[now.getDay()]);
// JS Challenge 4
// Log the current year
console.log(now.getFullYear());

// JS Challenge 5
// Log the current month
console.log(now.getMonth());

// JS Challenge 6
// Display the current date following the following format: Today is Thursday, April 4, 2020
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
console.log(
  `Today is ${days[now.getDay()]}, ${
    months[now.getMonth()]
  } ${now.getDate()}, ${now.getFullYear()}`
);

// JS Challenge 7
// Create a function formatDate which returns a date following this format:
// Thursday, April 4, 2020
// Call this function with the current time
// Log the result such as console.log(formatDate(new Date()));
function formatDate(now) {
  return `${days[now.getDay()]}, ${now.getDate()} ${
    months[now.getMonth()]
  }, ${now.getFullYear()}`;
}
console.log(formatDate(new Date()));
