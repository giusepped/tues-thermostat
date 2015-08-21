describe('Thermostat feature tests', function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false);
  });

  it('should be 20 degrees by default', function() {
    expect('.temperature').toContainText(20);
  });

  it('shuold be 21 degrees when pressing the up button', function() {
    $('.up').click();
    expect('.temperature').toContainText(21);
  });

  it('shuold be 19 degrees when pressing the up button', function() {
    $('.down').click();
    expect('.temperature').toContainText(19);
  });

  it('shuold go back to 20 degrees when pressing the reset button', function() {
    $('.down').click();
    $('.reset').click();
    expect('.temperature').toContainText(20);
  });

  it('should not go above 25 degrees when power saving mode is on', function() {
    for(var i=0; i<6; i++) { $('.up').click(); };
    expect('.temperature').toContainText(25);
  });

  it('should not go above 32 degrees when power saving mode is on', function() {
    $('.power_save').trigger('click').trigger('change');
    for(var i=0; i<13; i++) { $('.up').click(); };
    expect('.temperature').toContainText(32);
  });

  it('should reset to 25 when turning power saving mode is turned on', function() {
    $('.power_save').trigger('click').trigger('change');
    for(var i=0; i<13; i++) { $('.up').click(); };
    $('.power_save').trigger('click').trigger('change');
    expect('.temperature').toContainText(25);
  });

  it('should not go below 10', function() {
    for(var i=0; i<16; i++) { $('.down').click(); };
    expect('.temperature').toContainText(10);
  });

  it('should display the temperature as yellow at 20 degrees', function() {
    expect('.temperature').toHaveAttr('data-color', 'yellow');
  });

  it('should display the temperature as red at 25 degrees', function() {
    for(var i=0; i<5; i++) { $('.up').click(); };
    expect('.temperature').toHaveAttr('data-color', 'red');
  });

  it('should display the temperature as green below 18 degrees', function() {
    for(var i=0; i<5; i++) { $('.down').click(); };
    expect('.temperature').toHaveAttr('data-color', 'green');
  });

  it("should call weather API", function() {
    spyOn($, "ajax").and.callFake(function(url, callback) {
      show_weather({"list":[{"name":"London","main":{"temp":20.23}}]}
        );
      });
      $(".desired_city").val("London");
      $(".choose_city").click();
      expect($.ajax).toHaveBeenCalled();
      expect(".outside_temperature").toContainText("20 °C");
  });

});