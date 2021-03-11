var searchFormEl = document.querySelector("#search-form");
var citySearchInput = document.querySelector("#search-input");






function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#input').value;

  if (!searchInputVal) {
    console.error('You need a search input value');
    return;
  }
  
var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

location.assign(queryString);




