// JQUERY APP


$( document ).ready(function() {

  // $('.choosecity').click(function() {
  //   $.ajax({
  //     url: "api.openweathermap.org/data/2.5/find?q=London&units=metric",
  //     dataType: 'xml'
  //   }).done(function(data){
  //     var weather = $('.weather');
  //     weather.innerHTML = data;
  //   }).fail(function(){
  //     var weather = $('.weather');
  //     weather.innerHTML = 'there was an error';
  //   })
  // })

  thermostat = new Thermostat();

  var current_temp = $('span')[0];
  ShowTemperature = function() {
    $('.temperature').html(thermostat.temperature);
  };

  TemperatureColour = function() {
    $('.temperature').attr('data-color', thermostat.colourUpdate());
  };

  $('.temperature').show(function() {
    ShowTemperature();
    TemperatureColour();
  });

  $('button').eq(0).click(function() {
    thermostat.raise();
    ShowTemperature();
    TemperatureColour();
  });

  $('button').eq(1).click(function() {
    thermostat.lower();
    ShowTemperature();
    TemperatureColour();
  });

  $('button').eq(2).click(function() {
    thermostat.resetTemperature();
    ShowTemperature();
    TemperatureColour();
  });

  $('input').eq(0).change(function() {
    if(this.checked) {
      thermostat.powerSaveSwitchOn();
    } else {
      thermostat.powerSaveSwitchOff();
    };
    ShowTemperature();
    TemperatureColour();
  });
});
