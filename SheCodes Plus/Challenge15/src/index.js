// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
weekDays.forEach(function (day) {
  console.log(day);
});
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0]);
console.log(weekDays[6]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[6] = "Funday";
weekDays.forEach(function (day) {
  console.log(day);
});

// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays.shift();
weekDays.shift();
weekDays.forEach(function (day) {
  console.log(day);
});

// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

weekDays.forEach(function (days) {
  console.log(`Temperature on ${days} is ${Math.random() + 10} degrees`);
});
