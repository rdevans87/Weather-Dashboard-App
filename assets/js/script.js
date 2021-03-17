// $( document ).ready(function() {
//   console.log( "ready!" );
// });

var city = []

appId = "aad15d31269bbce50f48533c38ae913d";


$.ajax({
  url:"https://api.openweathermap.org/data/2.5/forecast?q=" + cityInputVal +  "&appid=" + appId;
  ",
  data: {
    zipcode: 44319
  },
  success: function (result) {
    $("#weather-temp").html("<strong>" + result + "</strong> degrees");
  }

});

$( "#search-input" ).each( function( "li") {
  var elem = $( el );
  elem.val( elem.val() + "%" );
}); console.log(el, "")
localStorage.setItem.


