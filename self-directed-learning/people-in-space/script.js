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
