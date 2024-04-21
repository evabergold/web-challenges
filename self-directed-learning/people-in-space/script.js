const numberPeople = document.querySelector('[data-js="people-in-space"]');
console.log(numberPeople);
console.log(document);
const url = "http://api.open-notify.org/astros.json";
let data;

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

  const peopleOnISS = people.filter((person) => {
    if (person.craft === "ISS") {
      return true;
    }
  });

  console.log("People on ISS: ", peopleOnISS);

  const peopleOnTiangong = people.filter((person) => {
    if (person.craft === "Tiangong") {
      return true;
    }
  });

  console.log("People on Tiangong: ", peopleOnTiangong);
}

const buttonAll = document.createElement("button");
buttonAll.textContent = "All";
buttonAll.classList.add("button");
const buttonISS = document.createElement("button");
buttonISS.textContent = "ISS";
buttonISS.classList.add("button");
const buttonTiangong = document.createElement("button");
buttonTiangong.textContent = "Tiangong";
buttonTiangong.classList.add("button");

document.body.append(buttonAll);
document.body.append(buttonISS);
document.body.append(buttonTiangong);

buttonISS.addEventListener("click", () => {
  renderFilteredPeople("ISS");
});

buttonTiangong.addEventListener("click", () => {
  renderFilteredPeople("Tiangong");
});

buttonAll.addEventListener("click", () => {
  renderPeople(data.people);
});

function renderFilteredPeople(craft) {
  const filteredPeople = data.people.filter((person) => person.craft === craft);
  renderPeople(filteredPeople);
}
