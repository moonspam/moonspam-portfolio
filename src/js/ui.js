WebFont.load({
  custom: {
    families: ["Noto Sans KR"],
    urls: ["//fonts.googleapis.com/earlyaccess/notosanskr.css"]
  }
});

var weather;
var header = $("header");

$(document).ready(function() {
  "use strict";

  var weatherApi = "//api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=e8337d945c60e268e0795d92f78d7fe3";

  $.getJSON(weatherApi).done(function(data) {
    weather = data.weather["0"].icon;
    header.addClass("weather_" + weather);
  }).fail(function() {
    console.log("날씨 정보를 불러오지 못했습니다!");
    header.addClass("weather_01d");
  });

});
