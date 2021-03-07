var citySearchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
event.preventDefault();

var citySearchInputVal = document.querySelector('#search-input').value;
var cityInputVal = document.querySelector("#city-input").value;

if (!citySearchInputVal) {
console.error('please enter a ciy');
return;
}

var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

location.assign(queryString);


searchFormEl.addEventListener('submit', handleSearchFormSubmit);



api.openweathermap.org/data/2.5/weather?id=2172797&appid=