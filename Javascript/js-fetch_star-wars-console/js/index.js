console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {

    const response= await fetch ("https://swapi.dev/api/people");
    console.log (response);
    const data = await response.json();
    console.log(data);
    
}

const data = await fetchData();
