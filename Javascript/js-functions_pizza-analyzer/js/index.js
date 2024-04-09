console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain (diameter){

  const currentValue1 = pizzaInput1.value;
  const radius1 = currentValue1/2;
  const radius1_2 = radius1**2
  const area1 = radius1_2 * Math.PI;
  console.log ("Diameter Pizza 1 = " + currentValue1);
  console.log ("Radius Pizza 1 = " + radius1);
  console.log("Area Pizza 1 = " + area1);

  const currentValue2 = pizzaInput2.value;
  const radius2 = currentValue2/2;
  const radius2_2 = radius2**2;
  const area2 = radius2_2 * Math.PI;
  console.log ("Diameter Pizza 2 = " + currentValue2);
  console.log ("Radius Pizza 2 = " + radius2);
  console.log("Area Pizza 2= " + area2);

  const pizzaGain = (area2-area1)/area1*100;
  console.log ("Pizza gain= " + pizzaGain);
  output.textContent= Math.round(pizzaGain);

}

calculatePizzaGain(pizzaInput1.value);
calculatePizzaGain(pizzaInput2.value);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
