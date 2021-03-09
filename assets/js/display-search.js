
function getParams() {

  var searchParamsArr = document.location.search.split("?");

  var query = searchParamsArr[0].split('q').pop();
  var request = searchParamsArr[1].split('=').pop();
  var appid = searchParamsArr[1].split('=').pop();

  searchApi(query) =  ("weather", "current", "humidity", "temperature", "forecast", "date", "windspeed")

}

 function appendCard(resultObj) {
  console.log(resultCard);

  var resultCard = document.createElement('div');
  resultCard.classList.add('card')
  resultCard.append(h2);
  
  var resultcard = document.createElement('p');
  resultBody.classList.add('p');
  resultCard.append(tempterature);

  var humidityEl = document.createElement('p');
    humidityEl.textContent = resultObj;

  function searchApi(query, find) {
    var locQueryUrl = "https://openweathermap.org/find?q=";

      if (find) {
    locQueryUrl = "https://openweathermap.org" + city/ + 
      }

    locQueryUrl = locQueryUrl + 'q=' + query
    fetch(locQueryUrl)
      .then(function (response) {
        if (!response.ok) 
        return response.json();
      })
      .then(function (locRes) {
      resultTextEl.textContent = locRes.search.query;
      console.log(locRes);

      }

     


        getParams()




