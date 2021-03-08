var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var citySearchFormEl = document.querySelector('#search-form');
var searchResultText = document.getElementById('#search-result-text');
var citySearchInputVal = document.querySelector('#search-input')
var resultsList = document.querySelector('#ul');
var citySearchFormEl = document.getElementById("#search-form");
var cityInputVal = document.querySelector("#city-input");


function getParams() {
    
    var searchParamsArr = document.location.search.split('&');
 
    var query = searchParamsArr[0].split('=').pop();
    var format = searchParamsArr[1].split('=').pop();
  
    searchApi(query, format);
  }

function printResults(resultObj) {
    console.log(resultObj);

}
  
unction searchApi(query, format) {
    var locQueryUrl = 'https://openweathermap.org/current'
  
    if (format) {
      locQueryUrl = 'ttps://openweathermap.org: + format + '/?fo=json'
    
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
