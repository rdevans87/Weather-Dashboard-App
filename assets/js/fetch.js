var tableBody = document.getElementById('repo-table')
var fetchButton = document.getElementById('fetch-button');

function getApi() {
 
  var requestUrl = ("https://api.openweathermap.org/data/2.5/weather?q=cleveland&appid=43ad492565709c83ac85701e73c6ef38")


  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
 
      for (var i = 0; i < data.length; i++) {
      
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');


        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);


