var searchFormEl = document.querySelector("#search-form");
var resultContentEl = document.querySelector('#result-content');
var cityInputVal = document.querySelector ("search-input");

function findCityOnSubmit(event) {
  event.preventDefault();

  var cityInputVal = document.querySelector('#cityInputVal').value;
  var searchResultText = document.querySelector('#search-result-text').value;

  if (cityInputVal) {
    console.log(searchResultText)
  } else {
    console.error('You need a search input value');
  }

  var queryString ="https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + "097dc737a3f579f2c4a7d1902160dc4e";

  location.assign(queryString);


  
}
  

searchFormEl.addEventListener('submit', findCityOnSubmit);
  
      
