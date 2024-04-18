console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.error("Fehler oben: ", Error);
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try{
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
    }catch(error){

      console.error ("Fehler: ", error);
    
      
    }


})
);
