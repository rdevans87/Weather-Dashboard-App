var submitBtnEl = document.querySelector("#submitBtnEl")
var ListGroupUl= document.getElementById("list-group")
var resultListtext = document.querySelector("#result-list-text")
var forecastOneEl = document.querySelector ("#forecast1")
var forecastTwoEl = document.querySelector("#forecast2")
var  forecastThreeEl = document.querySelector ("#forecast3")
var forecastFourEl = document.querySelector ("#forecast4")
var forecastFiveEl = document.querySelector ("#forecast5")

forecastOneEl = document.querySelector ()

function getParams() {

  var searchParamsArr = document.location.search.split("?");

  var query = searchParamsArr[0].split('q').pop();
  var object = searchParamsArr[1].split('=').pop();

  searchApi(query, object);
}
function displayResults(resultObj) {
  console.log(resultobj);

  var resultCard = document.createElement('h2');
  resultCard.classList.add('card')
  resultCard.append(h2);
  
  var resultCard = document.createElement('p');
  resultBody.classList.add('p');
  resultCard.append(tempterature);

  var humidityEl = document.createElement('p');
    humidityEl.textContent = resultObj;

  
    function searchApi(query, searchIn) {
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
    
});

  function handleSearchFormSubmit(event) {
  event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    var appIdVal = document.querySelector('#search-result-text').value;
  
      if (!searchInputVal) {
      console.log("searchInputVal")
          return;
      } else { 
      console.error('You need a search input value');
     }
      
var queryString = "./data/2.5/weather?q=" + searchInputVal + "&appid=" + appIdVal
  
 location.assign(queryString);

  searchFormEl.addEventListener('submit', handleSearchFormSubmit);

    
    <input type="text" id="q" name="q" placeholder="Weather in your city"></input>

