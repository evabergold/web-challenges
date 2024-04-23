import "./styles.css";

export default function App() {
  return (
    <h1>
      <Greeting name="Eva" />
    </h1>
  );
}

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
