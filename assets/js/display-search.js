var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#waether-search-form');
var responseText = document.getElementById('response-text');

function getParams() {

var searchParamsArr = document.location.search.split('&');

searchApi(query, format);

var query = searchParamsArr[0].split('=').pop();
var format = searchParamsArr[1].split('=').pop()

}
    
    

var requestUrl = 
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



