import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>My Article</h1>
      <p>one</p>
      <p>two</p>
      <p>three</p>
    </article>
  );
}
