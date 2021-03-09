var searchFormEl = document.querySelector('#search-form')

function getApi ()

var requestURL = 'https://api.openweathermap.org/data/2.5/weather/

fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log('Fetch Response \n-------------');
  console.log(data);
});



searchFormEl.addEventListener('submit', handleSearchFormSubmit);
