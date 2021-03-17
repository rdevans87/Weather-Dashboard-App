$(document).ready(function () {
  console.log("ready!");
})

var searchInputVal = $("search-input").val();

cityInput = []

appId = "aad15d31269bbce50f48533c38ae913d";

$.ajax({
  url: "https://api.openweathermap.org/data/2.5/forecast?q=" + CityInputVal + "&appid=" + appId,
  data: {
    zipcode: 44319
  },

  success:function(result) {
    $("#weather-temp").html("<strong>" + result + "</strong> degrees");

    for (var i = 0; i < 9; i++) {
      $("list-group-item").eq(i).on("click", {value: i}, function (event) {
        var msgs = [
          "button = " + $(this).index(),
          "event.data.value = " + event.data.value,
          "i = " + i
        ];
        logDiv.append(msgs.join(", ") + "<br>");
   });

};

$("search-form").submit(function (){ 
  console.log(input.val())  
});

$(".card").each(function(){
  
//     $element.prop("onclick", null);
// console.log("onclick property: ", $element[0].onclick);

//     //   $("#search-input").each(function ( "li") {
//     //     var elem = $(el);
//     //     elem.val(elem.val() + "%");

//   //   }); console.log(el, "")
//     // localStorage.setItem.


// ////////
// 