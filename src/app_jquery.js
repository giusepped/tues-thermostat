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

  $('.up').click(function() {
    thermostat.raise();
    ShowTemperature();
    TemperatureColour();
  });

  $('.down').click(function() {
    thermostat.lower();
    ShowTemperature();
    TemperatureColour();
  });

  $('.reset').click(function() {
    thermostat.resetTemperature();
    ShowTemperature();
    TemperatureColour();
  });

  $('.power_save').change(function() {
    if(this.checked) {
      thermostat.powerSaveSwitchOn();
    } else {
      thermostat.powerSaveSwitchOff();
    };
    ShowTemperature();
    TemperatureColour();
  });
});
