var cardEl = document.getElementById('r')
var fetchButton = document.getElementById('fetch-button');


function getApi() {
  // replace `octocat` with anyone else's GitHub username
  var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=b0ff6d197a40a5f8e42c9a3871298d52';

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

