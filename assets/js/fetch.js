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

// });





