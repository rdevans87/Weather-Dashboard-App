var tableBody = document.getElementById('repo-table')
var fetchButton = document.getElementById('fetch-button');


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

fetchButton.addEventListener('click', getApi);


var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');



function getApi() {

  var requestUrl = 'https://api.github.com/orgs/openweathermap/repos';

fetch(requestUrl)
  .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
       