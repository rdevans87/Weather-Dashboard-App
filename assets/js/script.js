var requestURL = "https://api.openweathermap.org/data/2.5/forecast?q=cityname&appid=aad15d31269bbce50f48533c38ae913d"

function getApi () {

fetch(requestUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log('Fetch Response \n-------------');
  console.log(data);
});

}

fetch(api.openweathermap.org/data/2.5/weather/958129e0018a145e98089d823b31cabf)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Twitter Public Members: Raw data \n----------');
    console.log(data);
  });










