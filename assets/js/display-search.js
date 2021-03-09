
function getParams() {

  var searchParamsArr = document.location.search.split("?");

  var query = searchParamsArr[0].split('q').pop();
  var format = searchParamsArr[1].split('=').pop();
  v

  searchApi (query, search);
}

 function appendCard(resultObj) {
  console.log(resultObj);

  var resultCard = document.createElement('div');
  resultCard.classList.add('card')
  resultCard.append(h2);
 
}  


  
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

      function handleSearchFormSubmit(event) {
      event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var searchInputVal = document.querySelector('#format-input').value;

}
  
  if (!searchInputVal) {
    console.error('You need a search input value');
    return;

  }
    var  queryString = './search-results.html?q=' + searchInputVal + '&appid= ' 

      location.assign(queryString)

       citySearchFormEl.addEventListener('submit', handleSearchFormSubmit);


        window.replace("https://openweathermap.org/find?q=");


        getParams()




