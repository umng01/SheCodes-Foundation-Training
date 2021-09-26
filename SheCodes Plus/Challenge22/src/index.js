// Challenge 1
// Log li with id special
let pt = document.querySelector("li#specil");
console.log(pt);

// Challenge 2
// Log all li with class of country
let countries = document.querySelectorAll("li.country");
console.log(countries);

// Challenge 3
// Add class special to the li with id special
pt.classList.add("specil");

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
pt.innerHTML = "India";
