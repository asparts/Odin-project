const convertToCelsius = function(fahrenheit) {
  var f = Math.round((fahrenheit -32) * (5/9) * 10) / 10;

  return f;
};

const convertToFahrenheit = function(celsius) {

  var c = Math.round((celsius * (9/5) + 32) * 10) / 10;

  return c;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
