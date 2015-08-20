// JAVASCRIPT APP

thermostat = new Thermostat();

var temperature = document.getElementsByTagName('span')[0];
ShowTemperature = function() {
  temperature.innerHTML = thermostat.temperature;
};
TemperatureColour = function() {
  temperature.style.color = thermostat.colourUpdate();
};

TemperatureColour = function() {

};
ShowTemperature();
TemperatureColour();


var upButton = document.getElementsByTagName('button')[0];
upButton.onclick = function() {thermostat.raise();
                               ShowTemperature();
                               TemperatureColour();
                              };

var downButton = document.getElementsByTagName('button')[1];
downButton.onclick = function() {thermostat.lower();
                                ShowTemperature();
                                TemperatureColour();
                                };

var resetButton = document.getElementsByTagName('button')[2];
resetButton.onclick = function() {thermostat.resetTemperature();
                                  ShowTemperature();
                                  TemperatureColour();
                                  };

var PowerCheckBox = document.getElementsByTagName('input')[0];
PowerCheckBox.onclick = function() {
                                  if(this.checked) {
                                    thermostat.powerSaveSwitchOn();
                                  } else {
                                    thermostat.powerSaveSwitchOff();
                                  };
                                  ShowTemperature();
                                  TemperatureColour();
                                };
