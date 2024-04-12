console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosSuccess = document.querySelector('[data-js="success"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideTosSuccess() {
  tosSuccess.setAttribute("hidden", "");
}

function showTosSuccess() {
  tosSuccess.removeAttribute("hidden");
}

hideTosSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  console.log(event.target.tos.checked);

  if (event.target.tos.checked){

    alert("Form submitted");
    showTosSuccess();
  }

  else{

  
    hideTosSuccess();
  }


  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  
});

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  
  } else {
    showTosError();
    
  }
});
