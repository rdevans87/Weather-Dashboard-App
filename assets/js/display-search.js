var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var citySearchFormEl = document.querySelector('#search-form');
var searchResultText = document.getElementById('#search-result-text');
var cityListGroupEl=document.getElementbyId("#search-input")

var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApionClick {

  var requestUrl = "api.openweathermap.org/data/2.5/weather?q=cleveland&appid={958129e0018a145e98089d823b31cabf";
     
 
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
        console.log("this child was appended")
      }
    });
}

fetchButton.addEventListener('click', getApionClick);

getApi(requestUrl);
 



