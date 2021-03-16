var submitBtnEl = document.getElementById("#submit-button");
var cityInputVal = document.querySelector("search-input");
var cityNameText = document.querySelector("#city-name-text");
var temopEl = document.queryselector("#temp");
var dateEl = document.queryselector("#date");
var humidityEl = document.queryselector("#humidity");
var UVIndexEl = document.queryselector("#UVIndex")
var divEl = document.querySelector("forecast")
var appIdVal = ("b0ff6d197a40a5f8e42c9a3871298d52");

submitBtnEl.addEventListenr("click", function () {

  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal.value + "&appid=" + appIdVal
    .then(function (response) {
      return response.jon();
    })
    .then(function (data) {
      console.log(data)
      for (var i = 0; i < data.length; i++) {
        var foree = document.appendElement("h3");
        var tempValue = document.appendElement("p")
        usere
        
        forecastEl.textcontent = data.length[i].name

        resultCard.classList.add('card')
        resultCard.append(h2);

        var resultCard = document.appendElement('p');
        resultBody.classList.add('p');
        resultCard.append(tempterature);

        var humidityEl = document.appendElement('p');
        humidityEl.textContent = resultObj;


        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var humidityValue = data['humidity']
        var forecastValue = data['weather'][0]['forecast' +]

        nameValue.innerHTML = nameValue
      }

      .tch(err => alert("Please enter a city name!"))

   }
});


























// var searchFormEl = document.querySelector("#search-form");



// var searchInputEl = document.querySelector("#search-input");
// var foreCastcardsEl = document.getElementById (".forecastcards");

// var resultListCardEl = document.querySelector("#result-list-text")


// var appIdVal= ("b0ff6d197a40a5f8e42c9a3871298d52");


// function handleSearchFormSubmit(event) {
// event.preventDefault();

//   var searchInputVal = document.querySelector('#search-input').value;
//   var appIdVal = document.querySelector('#search-result-text').value;

//     if (!searchInputVal) {
//     console.log("searchInputVal")
//         return; 
//     } else { 
//     console.error('You need a search input value');
//    }

//   var queryString = "./data/2.5/weather?q=" + searchInputVal + "&appid=" + appIdVal


//   location.assign(queryString);

// }





