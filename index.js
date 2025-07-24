function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

function describeTemperature(fahrenheit) {
  let celsius = convertToCelsius(fahrenheit);

  if (celsius < 0) {
    return "very cold";
  } else if (celsius < 20) {
    return "cold";
  } else if (celsius < 30) {
    return "warm";
  } else if (celsius < 40) {
    return "hot";
  } else {
    return "very hot";
  }
}

//.        Testing 123
//let result = describeTemperature(100);
//console.log(result)

let input = prompt("🌡️ Enter a temperature in Fahrenheit:");
let fahrenheit = Number(input);

let celsius = convertToCelsius(fahrenheit).toFixed(1);
let descrtiption = describeTemperature(fahrenheit);

let message = `${fahrenheit}°F is ${celsius}°C - that's ${descrtiption}!`;

alert(message);
