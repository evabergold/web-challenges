console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numberA = Number(event.target.numberA.value);
  console.log(numberA);
  const numberB = Number(event.target.numberB.value);
  console.log(numberB);

  const operator = event.target.operator.value;
  console.log(operator);

  if (operator === "addition") {
    result = add(numberA, numberB);
    console.log (result);
  
  } else if (operator === "subtraction") {
    result = subtract(numberA, numberB);
    console.log (result);
  
  }

  else if (operator === "multiplication") {
    result = multiply(numberA, numberB);
    console.log (result);
    
  
  }

  else if (operator === "division") {
    result = divide(numberA, numberB);
    console.log (result);
    
  
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
