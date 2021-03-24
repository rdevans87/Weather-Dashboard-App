var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var savedSearchEl = document.getElementById("#list-group-item");
var citySearchList = document.getElementById("#saved-search-list");
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");

// function getParams() {
//   var searchParamsArr = document.location.search.split('&');

//   var query = searchParamsArr[0].split('=').pop();
//   var key = searchParamsArr[1].split('=').pop();


// }

    function displayWeatherResults(resultObj) {
    console.log(resultobj);

     resultTextEl.document.getElementById('result-text');
     resultListEl.textContent = '<h2>City:</h2>'

    listGroupItem.textContent.append
    resultList = document.append
    textContent(resultBody);


}

    function getWeatherForecast () {

    var cityInputVal = document.querySelector('#city-input').value;

    var  openWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + "74a15e51334b346d7b36d2511a654776";

    fetch(openWeatherApi)
  
    .then(function (response) {
      if (!response.ok) {
        throw response.json();
      }
      return response.json();
   })
     .then(function (apiRes) {
       resultTextEl.textContent = apiRes;
       console.log(apiRes);
     });
}    
  
        function findCityOnSubmit(event) {
          event.preventDefault()
      
          var cityInputVal = document.querySelector('#city-input').value;
        
         
          if (cityInputVal) {
            console.log("city input successful")
          } else {      
            console.log('You need a search input value');     
            return;  
          }       

            getWeatherForecast(cityInputVal);
        }
            
          searchFormEl.addEventListener('submit', findCityOnSubmit);

          // getParams();