fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log('Fetch Response \n-------------');
  console.log(data);
});

var searchFormEl = document.querySelector('#search-form');

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

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);


function getApi () {

  var requestURL = 'https://api.openweathermap.org/data/2.5/weather'
  
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });
  
  
  
  }
  
  

