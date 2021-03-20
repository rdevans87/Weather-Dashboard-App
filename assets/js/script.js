
function getParams() {

  var searchParamsArr = document.location.search.split("?");

  var query = searchParamsArr[0].split('q').pop();
  var object = searchParamsArr[1].split('=').pop();

  searchApi(query, object);
}

Function getWeather (query, cityInPut) {
  var locQueryUrl = "https://wwww.api.openweathermap.org/find?q=&appid=";
  if (searchInputVal) {
  locQueryUrl = "https://api.openweathermap.org/" + "data/2.5/weather?q=" + searchInputVal + "&appid=" + appIdVal;  

  }
  
  locQueryUrl = locQueryUrl + '?q=' + query
  fetch(locQueryUrl)
    .then(function (response) {
      if (!response.ok) 
      return response.json();
    })
    .then(function (locRes) {
    resultTextEl.textContent = locRes.search.query;
    console.log(locRes);

function findCityOnSubmit()(event) {
  event.preventDefault();
  
    var cityInputVal = document.querySelector('#search-input').value;
    var appIdVal = document.querySelector('#search-result-text').value;
  
      if (cityInputVal) {
        console.log("searchInputVal")
          return;
      } else { 
      console.error('You need a search input value');


 }
      
  var queryString = "./data/2.5/weather?q=" + searchInputVal + "&appid=" + appIdVal


 queryString ="https://api.openweathermap.org/data/2.5/forecast?q=" + CityInputVal + "&appid=" + appIdKey,


  fetch("http://api.openweathermap.org/data/2.5/forecast??q=" + CityInput + "&appid=74a15e51334b346d7b36d2511a654776b0ff6d197a40a5f8e42c9a3871298d52")

  searchFormEl.addEventListener('submit', handleSearchFormSubmit);


getParams(); 