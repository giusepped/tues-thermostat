// JQUERY APP


$( document ).ready(function() {

  ajax_call = function(city) { $.ajax({
      url: "http://api.openweathermap.org/data/2.5/find?q="+city+"&units=metric",
      dataType: 'json',
      success: function(data) {
        $('.outside_temperature').html(Math.round(data.list[0].main.temp));
      }
    })
  };

  hide_input_elements = function() {
    $(".desired_city").fadeOut(300);
    $(".choose_city").fadeOut(300);
  };

  $('.choose_city').click(function() {
    var city = $('.desired_city').val();
    ajax_call(city);
    $('.desired_city').val("");
    hide_input_elements();
  });

  $(document).on("keyup", function(e) {
    if(e.which == 13 && ($('.desired_city').is(":visible"))) {
      // event.preventDefault();
      var city = $('.desired_city').val();
      ajax_call(city);
      $('.desired_city').val("");
      hide_input_elements();
    } else if(e.which == 13) {
      $(".desired_city").fadeIn(500);
      $(".choose_city").fadeIn(500);
    }
  });

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
