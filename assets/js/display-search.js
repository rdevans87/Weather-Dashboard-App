var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#waether-search-form');
var responseText = document.getElementById('response-text');

function getParams() {

var searchParamsArr = document.location.search.split('&')

searchApi(query, city);

var query = searchParamsArr[0].split('=').pop();
var city = searchParamsArr[1].split('=').pop()

}

function printResults(resultObj) {
    console.log(resultObj);

    var resultCard = document.createElement('div');
  resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

  var resultBody = document.createElement('div');
  resultBody.classList.add('card-body');
  resultCard.append(resultBody);

  var titleEl = document.createElement('h3');
  titleEl.textContent = resultObj.title;

  var bodyContentEl = document.createElement('p');
  bodyContentEl.innerHTML =
    '<strong>Date:</strong> ' + resultObj.date + '<br/>';
    
    

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



