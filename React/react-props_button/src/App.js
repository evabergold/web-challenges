import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <h1>
      <Button
        color={"lightblue"}
        disabled={false}
        text={"Hier klicken"}
        onClick={handleClick}
      />
    </h1>
  );
}

const Button = ({ color, disabled, text, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color, height: "100px" }}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
