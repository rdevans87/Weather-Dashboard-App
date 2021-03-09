      var submitButtonEl = document.querySelector("submit-button");
  

    function handleFromSubmit(event) {
      event.preventDefault();

      var citySearchInput = document.querySelector('#search-input');  
      var searchFormInput = document.querySelector("#search-form")''

      location.assign(queryString)     
    
     var queryString = "https://openweathermap.org/find?q=" + citySearchInput; 

        if (!citySearchInputVal) {
      console.text('Search for a city');
      return;
  }

      window.location.replace = ("https://openweathermap.org/find?q=") 
    
}

    submitButtonEl.addEventListener("submit-button", handleFormSubmit); 

    