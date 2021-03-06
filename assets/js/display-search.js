var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');
var responseText = document.getElementById('response-text');

function getParams() {

searchApi(query, format);

}
    
    

var requestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={7c311763d4d62a265ed239e3d4ae2f45}"

getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}

getApi(requestUrl);



