import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Sum valueA={3} valueB={4} />
    </h1>
  );
}

const Sum = ({ valueA, valueB }) => {
  const sum = Number(valueA) + Number(valueB);

  return (
    <>
      {valueA} + {valueB} = {sum}
    </>
  );
};
