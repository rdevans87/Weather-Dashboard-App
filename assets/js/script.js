var citySearchFormEl = document.querySelector('#search-form');
var 

function handleSearchFormSubmit(event) {
event.preventDefault();

var citySearchInputVal = document.querySelector('#search-input').value;
var cityInputVal = document.querySelector("#city-input").value;

if (!citySearchInputVal) {
console.error('please enter a city');
return;
}

var queryString = './search-results.html?q=' + cityInputVal + '&format=' + formatInputVal;

location.assign(queryString);


}

citySearchFormEl.addEventListener('submit', handleSearchFormSubmit);