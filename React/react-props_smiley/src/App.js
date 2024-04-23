import React from "react";
import "./styles.css";

export default function App() {
  const isHappy = true;
  return (
    <h1>
      <Smily isHappy={isHappy} />
    </h1>
  );
}

function Smily({ isHappy }) {
  return <>{isHappy ? <div>:-)</div> : <div>:-(</div>}</>;
}
