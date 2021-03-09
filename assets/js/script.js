var submitButtonEl = document.querySelector("submit-button");
var searchFormVal = document.querySelector("#search-form");


        function handleFromSubmit(event) {
           event.preventDefault();
}
              var citySearchInput = document.querySelector('#search-input');

              location.assign(queryString)

              var queryString = "https://openweathermap.org/find?q=" + citySearchInput;


            if (!citySearchInputVal) {
             console.text('Search for a city');
            } else {
              
            window.location.replace = ("https://openweathermap.org/find?q=")

  }             fetch(requesUrl)
             .then(function (response) {
                return response.json();
          })
                .then(function (data) {
             console.log('cityname and weatherforecast \n----------');
            for (var i = 0; i < data.length; i++) {
          console.log(data[i].url);
          console.log(data[i].user.login);
        }
      });

       submitButtonEl.addEventListener("submit-button", handleFormSubmit);