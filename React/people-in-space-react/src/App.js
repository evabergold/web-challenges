import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [numberInSpace, setNumberInSpace] = useState(0);

  async function fetchPeopleInSpace() {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    setNumberInSpace(data.number);
  }

  fetchPeopleInSpace();

  return (
    <main>
      <h1>People in Space: {numberInSpace}</h1>
    </main>
  );
}
