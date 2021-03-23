var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var savedSearchEl = document.getElementById("#list-group-item");
var citySearchList = document.getElementById("#saved-search-list");
var resultListEl = document.getElementById("#result-list");
var resultTextEl = document.querySelector("#result-text");

function getParams() {
  var searchParamsArr = document.location.search.split('&');

  var query = searchParamsArr[0].split('=').pop();
  var key = searchParamsArr[1].split('=').pop();

  getWeather(query, key)

}

// function displayWeatherResults(resultContentEl) {
//   console.log(resultTextEl)

//   resultContentEl = document.getElementById('result-text');
//   resultTextEl.textContent = '<h2>City:</h2>'
//   listGroupItem.textContent.append
//   resultList = document.append(<li>)
//   resultcard.append(resultBody)

//   <strong>Date:</strong>
//   resultListEl = document.querySelector("#result-text")
//   '<strong>Date:</strong>

//   bodyContent.innherHTML =+

//   resultmain.append(resultCard);
//  } resultlist.appendElement //  c
//     (<li>Temperature:</li>)
//            Humidty:
//          Wind Speed:
//            UV Index:
//   resultBody
//   <li>Temperature:</li>)
//           Date:
//           Temp
//           Humidity


// }


        function getWeatherForecast(query) {
        console.log(cityInputVal);

     var apiQueryUrl = "https://api.openweathermap.org/find?q=&appid=";
   
     if (cityInputVal) {
       apiQueryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=097dc737a3f579f2c4a7d1902160dc4e";
   
     }
     var query = document.querySelector('#city-input').value;

     apiQueryUrl = apiQueryUrl +  cityInputVal + '&q=' + query;

       fetch(locQueryUrl)
       .then(function (response) {
         if (!response.ok) {
           throw response.json();
         }
         return response.json();
       })
       .then(function (apiRes) {
   
         resultTextEl.textContent = apiRes.search.query;
   
            console.log(apiRes);
         if (!apiRes.results.length) {
           console.log('No results found!');
           resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
         } else {
           resultContentEl.textContent = '';
        }  for (var i = 0; i < apiRes.results.length; i++) 
             printResults(api.results[i]);
          }  .catch(function (error) {
          } console.error(error)      
            function findCityOnSubmit(event) {
            event.preventDefault();
            }      
        
         var cityInputVal = document.querySelector('#cityInputVal').value;
    
     if (cityInputVal) {
       console.log(searchResultText)
     } else {
       console.error('You need a search input value');
     }

        getWeather(cityInputVal);

    searchFormEl.addEventListener('submit', findCityOnSubmit


    getParams();