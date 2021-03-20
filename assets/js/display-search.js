var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {

  var searchParamsArr = document.location.search.split('&');
  var query = searchParamsArr[0].split('=').pop();

  getWeather(query);

}

function DisplayWeatherResults(resultObj) {
  console.log(resultObj);
  

}
    var cityNameText = document.createElement("h2");
    cityNameText.textContent("CITY:") 
    

function getWeather(query) {

  var locQueryUrl = "https://api.openweathermap.org/find?q=&appid=";

  if (cityInputVal) {
    locQueryUrl = "https://api.openweathermap.org/" + "data/2.5/forecast?q=" + cityInputVal + "&appid=" + "097dc737a3f579f2c4a7d1902160dc4e";

  }

  locQueryUrl = locQueryUrl + '&q=' + query;
    
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

function findCityOnSubmit(event) {
  event.preventDefault();

  var cityInputVal = document.querySelector('#cityInputVal').value;
  var searchResultText = document.querySelector('#search-result-text').value;

  if (cityInputVal) {
    console.log(searchResultText)
  } else {
    console.error('You need a search input value');
  }

  getWeather(cityInputVal, searchResultText)
}
  

 searchFormEl.addEventListener('submit', findCityOnSubmit);
  
getParams();    
