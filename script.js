var requestUrl = 'http://bulk.openweathermap.org/snapshot/{weather_14.json.gz}?appid={958129e0018a145e98089d823b31cabf}'


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


  api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

location.assign(queryString);

}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

