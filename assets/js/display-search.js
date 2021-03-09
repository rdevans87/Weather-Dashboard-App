var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var citySearchFormEl = document.querySelector('#search-form');
var searchResultText = document.getElementById('#search-result-text');
var citySearchInputVal = document.querySelector('#search-input')
var resultsList = document.querySelector('#ul');
var citySearchFormEl = document.getElementById("#search-form")
var resultListtextEl = document.getElementById("#result-list-text")

 
function getParams() {
    
    var searchParamsArr = document.location.search.split('&');
 
    var query = searchParamsArr[0].split('=').pop();
    var format = searchParamsArr[1].split('=').pop();
  
    searchApi(query, city);
  }

function printResults(resultObj) {
    console.log(resultObj);
    console.text("logging result in obj");

}

  
function searchApi(query, city) {
    var locQueryUrl = 'api.openweathermap.org/data/2.5/weather?q=cityname&appid=958129e0018a145e98089d823b31cabf'
    '
  
    if (city) {
      locQueryUrl = 'https://openweathermap.org:" +  + "/?fo=json"';
    
    }

  
    locQueryUrl = locQueryUrl + '&q=' + query
    fetch(locQueryUrl)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
  
        return response.json();
      })
      .then(function (locRes) {

        resultTextEl.textContent = locRes.search.query;

      console.log(locRes);

      if (!locRes.results.length) {
        console.log('No results found!');
        resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
      } else {
        resultContentEl.textContent = '';
        for (var i = 0; i < locRes.results.length; i++) {
          printResults(locRes.results[i]);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var citySearchInputVal = document.querySelector('#search-input').value;
  

  if (!citySearchInputVal) {
    console.error('You need to enter a city');
    return;
  }
  
  var queryString = './search-results.html?q=' + citySearchInputVal;
    
    location.assign(queryString);
    console.log("this location is assigned to a query");

  searchApi(citySearchInputVal);
}

citySearchFormEl.addEventListener('submit', handleSearchFormSubmit);

getParams();



