(($) => {
  $(() => {
    WebFont.load({
      custom: {
        families: ['Noto Sans KR'],
        urls: ['//fonts.googleapis.com/earlyaccess/notosanskr.css'],
      },
    });

    let weather;
    const header = $('header');

    $(document).ready(() => {
      const weatherApi = `//api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=${process.env.OPEN_WEATHER_MAP_KEY}`;

      $.getJSON(weatherApi).done((data) => {
        weather = data.weather['0'].icon;
        header.addClass(`weather_${weather}`);
      }).fail(() => {
        console.log('날씨 정보를 불러오지 못했습니다!');
        header.addClass('weather_01d');
      });
    });
  });
})(jQuery);
