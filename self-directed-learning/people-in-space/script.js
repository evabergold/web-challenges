const numberPeople = document.querySelector('[data-js="people-in-space"]');
console.log(numberPeople);
console.log(document);
const url = "http://api.open-notify.org/astros.json";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log("data: ", data);
  console.log(data.number);
  numberPeople.textContent = data.number;
  renderPeople(data.people);
}

fetchData();

const ul = document.createElement("ul");
document.body.append(ul);

function renderPeople(people) {
  people.forEach((person) => {
    const listElement = document.createElement("li");
    listElement.textContent = person.name;
    ul.append(listElement);
  });
}

const buttonAll = createButton("All");
const buttonISS = createButton("ISS");
const buttonTiangong = createButton("Tiangong");

document.body.append(buttonAll);
document.body.append(buttonISS);
document.body.append(buttonTiangong);

function createButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("button");
  button.addEventListener("click", (event) =>
    filterPeople(event.target.textContent)
  );
  //return button;
}

function filterPeople(craft) {
  let filteredPeople;
  if (craft === "All") {
    filteredPeople = data.people;
  } else {
    filteredPeople = data.people.filter((person) => person.craft === craft);
  }
  renderPeople(filteredPeople);
}
