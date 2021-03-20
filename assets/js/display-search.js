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

  
    function searchApi(query, searchInputVal) {
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
  
 getParams(); 
<div class="col-sm-12" web-data-spector="wnode_spector_61">
              <form class="form-inline text-center first-child" onsubmit="FindCity(); return false" role="form" id="searchform" action="#" method="get" web-data-spector="wnode_spector_62">
                <div class="form-group" web-data-spector="wnode_spector_63">
                  <label class="sr-only" for="help-search" web-data-spector="wnode_spector_64">Search</label>
                  
                  <input class="form-control border-color col-sm-12" id="search_str" name="q" value="cleveland" onfocus="this.value = (this.value=='London, UK')? '' : this.value;" web-data-spector="wnode_spector_65">
                    
                </div>
                <button type="submit" class="btn btn-color" web-data-spector="wnode_spector_66"><i class="fa fa-question-circle" web-data-spector="wnode_spector_67"></i> Search</button>
              </form>
            </div>
 <form class="form-inline text-center first-child" onsubmit="FindCity(); return false" role="form" id="searchform" action="#" method="get" web-data-spector="wnode_spector_62">
                <div class="form-group" web-data-spector="wnode_spector_63">
                  <label class="sr-only" for="help-search" web-data-spector="wnode_spector_64">Search</label>
                  
                  <input class="form-control border-color col-sm-12" id="search_str" name="q" value="cleveland" onfocus="this.value = (this.value=='London, UK')? '' : this.value;" web-data-spector="wnode_spector_65">
                    
                </div>
                <button type="submit" class="btn btn-color" web-data-spector="wnode_spector_66"><i class="fa fa-question-circle" web-data-spector="wnode_spector_67"></i> Search</button>
              </form>

 <input data-v-7bcb5258="" type="text" placeholder="Search city" class=""></input>


 <form class="form-inline text-center first-child" onsubmit="FindCity(); return false" role="form" id="searchform" action="#" method="get" web-data-spector="wnode_spector_62">
                <div class="form-group" web-data-spector="wnode_spector_63">
                  <label class="sr-only" for="help-search" web-data-spector="wnode_spector_64">Search</label    
                  <input class="form-control border-color col-sm-12" id="search_str" name="q" value="cleveland" onfocus="this.value = (this.value=='London, UK')? '' : this.value;" web-data-spector="wnode_spector_65">
                    
                </div>
                <button type="submit" class="btn btn-color" web-data-spector="wnode_spector_66"><i class="fa fa-question-circle" web-data-spector="wnode_spector_67"></i> Search</button>
              </form>
 Not found. To make search more precise put the city's name, comma, 2-letter country code (ISO3166).
<button data-v-7bcb5258="" type="submit" class="button-round dark">Search</button>
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
  
function bannerClose() {
    document.getElementById("banner_android").style.display = "none";
    setCookie("owm_banner_android_closed", true)
}

document.onload = function() {
   if ((document.cookie.indexOf("owm_banner_android_closed") === -1)  && /Android/i.test(window.navigator.userAgent)) {
       document.getElementById("banner_android").style.display = 'flex';
    } 
}()


