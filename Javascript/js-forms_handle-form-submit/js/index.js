console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted form");

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);

  const firstName = event.target.firstName.value;
  let age = event.target.age.value;
let  badness = event.target.badness.value;

age = Number(age);
badness = Number(badness);

  console.log ("first name is " + firstName);
  console.log ("age is " + age);
  console.log ("badness is " + badness); 

  const ageBadnessSum = age + badness;

  console.log("The age-badness-sum of " + firstName + " is " + ageBadnessSum);

  event.target.reset();
  event.target.elements.firstName.focus();
});
