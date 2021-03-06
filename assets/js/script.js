var searchFormEl = document.querySelector('#weather-search-form');

function handleSearchFormSubmit(event) {
event.preventDefault();

var searchInputVal = document.querySelector('#search-input').value;
var formatInputVal = document.querySelector("#format-input").value;

if (!searchInputVal) {
console.error('please enter a ciy');
return;
}

var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  ocation.assign(queryString);
}


searchFormEl.addEventListener('submit', handleSearchFormSubmit);

