var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {

var searchParamsArr = document.location.search.split('&');
var query = searchParamsArr[0].split('=').pop();
vart  = searchParamsArr[1].split('=').pop();

  getCityWeather(query);

}
function displayWeatherResults(resultObj) {
 console.log(resultObj);
    
}
//  weatherElement.innerHTML= '<img src="assets/images/weatherAppimgSml.png"/>'

//  var cityNameText = document.createElement("div");
//  cityNameText.textContent = "This is some weather data";

// }

function getCityWeather(query) {

  var locQueryUrl = "https://api.openweathermap.orgdata/2.5/forecast?q=&appid="
  
  var appidKey = "097dc737a3f579f2c4a7d1902160dc4e"

  if (cityInput) {
    locQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + appidKey ;

  } 


  locQueryUrl = locQueryUrl + '&q=' + query ;
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
          displayWeatherResults(locRes.results[i]);
        }
      }
    })
    .catch(function (error) {
      console.error(error);
    });
}

function findCityOnSubmit(event) {
  event.preventDefault();

  var appidKey = "097dc737a3f579f2c4a7d1902160dc4e"
  var cityInputVal = document.querySelector('#cityInputVal').value;
  

  if (cityInputVal) {
    console.log("city input successful")
  } else {
    console.error('You need a search input value');
    return;
  }

  getWeather(cityInputVal)
}
  
 searchFormEl.addEventListener('submit', findCityOnSubmit);
  
getParams();