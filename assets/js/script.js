var searchFormEl = document.querySelector("#search-form"); 

function findCityOnSubmit(event) {
  event.preventDefault();
  
  var appidKey = "097dc737a3f579f2c4a7d1902160dc4e"
  var cityInputVal = document.querySelector("#city-input").value;

  if (cityInputVal) {
    console.log("city input successful")
  } else {
    console.error('You need a search input value');
  }

  var queryString ="https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal + "&appid=" + appidKey;

  location.assign(queryString);
}
  
searchFormEl.addEventListener('submit', findCityOnSubmit);
  
      
