var citySearchFormEl = document.querySelector('#search-form');
 

function handleSearchFormSubmit(event) {
event.preventDefault();

var citySearchInputVal = document.querySelector('#search-input').value;


if (!citySearchInputVal) {
console.error('please enter a city');
return;
}

var queryString = './search-results.html?q=' + citySearchInputVal;

location.assign(queryString);
console.log("this location is assigned to a query")


}

citySearchFormEl.addEventListener('submit', handleSearchFormSubmit);