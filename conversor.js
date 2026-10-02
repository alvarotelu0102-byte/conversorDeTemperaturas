const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa la temperatura en Celsius: ', (celsius) => {
  let numero = parseFloat(celsius);

  if (isNaN(numero)) {
    console.log("Error: Debes ingresar un número válido");
   } else {
    let fahrenheit = numero * 9/5 + 32;
    let kelvin = numero + 273.15;

    console.log(`\n--- Conversión ---`);
    console.log(`${numero}°C son ${fahrenheit.toFixed(2)}°F`);
    console.log(`${numero}°C son ${kelvin.toFixed(2)}K`);
  }

  rl.close();
});