import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      {" "}
      <Article />
    </div>
  );
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title"> React</h2>
      <label htmlFor="inputField">
        Hier suchen, um mehr über React zu lesen:
      </label>
      <input type="text" id="inputField" />
      <a href="https://de.wikipedia.org/wiki/React" className="article__link">
        Wikipedia Link
      </a>
    </article>
  );
}
