console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;

  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});



pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain (diameter1, diameter2){

  let area1 = Math.PI * (diameter1 /2) **2;
  console.log(area1);
  let area2 = Math.PI * (diameter2 /2) **2;
  console.log(area2);

  let pizzaGain = (area2-area1)/area1*100;

  console.log ("Pizza gain= " + pizzaGain);
  output.textContent= Math.round(pizzaGain);

}

calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);


// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {

  let newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}



// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2){

  if (pizzaGain >0){

    outputSection.style.backgroundColor = "var(green)";
  
  }

    else {
      outputSection.style.backgroundColor = "var(red)";

    }
  }




