var cardEl = document.getElementById('r')
var fetchButton = document.getElementById('fetch-button');


function getApi() {
  var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);


// var cityInputVal = document.querySelector("#search-input");
// var cityNameText = document.querySelector("#city-name-text");
// var cardEl = document.getElementById("#temp");
// var searchFormEl = document.getElementById("#search-form");
// var currentListGroup = document.querySelector("ul");
// var searchButtonEl = document.querySelector("#search-button");
// var appIdVal = "b0ff6d197a40a5f8e42c9a3871298d52";

// searchButtonEl.addEventListener("click", function () {

//   fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + appIdVal)
//     .then(function (response) {
//       return response.jon();
//     })
//     .then(function (data) {
//       console.log(data);
//       for (var i = 0; i < data.length; i++) {
//         var listItem = document.appendElement("li");
//         listItem = textContent.data[i].main;
//         currentListGroup.appendChild(listItem)
//       };
//       console.log("done")

//     });

  //     console.log("weather-temp").text
  //         searchInPutVal 
  //       got i = 0 <
  //     $("list-group-item:first")
  // }var logDiv = $( "#log" );
 
// });

//     $element.prop("onclick", null);
// console.log("onclick property: ", $element[0].onclick);

//     //   $("#search-input").each(function ( "li") {
//     //     var elem = $(el);
//     //     elem.val(elem.val() + "%");

//   //   }); console.log(el, "")
//     // localStorage.setItem.


// ////////
// 





        // $(".card").each(function(){
// }
  
//     $element.prop("onclick", null);
// console.log("onclick property: ", $element[0].onclick);

//     //   $("#search-input").each(function ( "li") {
//     //     var elem = $(el);
//     //     elem.val(elem.val() + "%");

//   //   }); console.log(el, "")
//     // localStorage.setItem.


// ////////var submitBtnEl = document.querySelector("#submitBtnEl")
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

    document.querySelector("#weather-widget > div.grey-container > div > div > div.search-block > div.search > div")
    function getCookie(name) {
     const value = `; ${document.cookie}`;
     const parts = value.split(`; ${name}=`);
     if (parts.length === 2) return parts.pop().split(';').shift();
     document.querySelector("#weather-widget > div.grey-container > div > div > div.search-block > div.search > div")
   }document.querySelector("#weather-widget > div.grey-container > div > div > div.search-block > div.search > div")
   function setCookie (name, value) {
       var expires = new Date()
       expires.setTime(expires.getTime() + (5 * 1000 * 60 * 60 * 24))
       document.cookie = name + '=' + escape(value) + '; expires=' + expires.toGMTString() + '; path=/'
     }

     queryString ="https://api.openweathermap.org/data/2.5/forecast?q=" + CityInputVal + "&appid=" + appIdKey,
    
    
      fetch("http://api.openweathermap.org/data/2.5/forecast??q=" + CityInput + "&appid=74a15e51334b346d7b36d2511a654776b0ff6d197a40a5f8e42c9a3871298d52")
    