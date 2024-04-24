import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// export default function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   return (
//     <>
//       <h1>React</h1>
//       <button
//         type="button"
//         onClick={() => {
//           setLoggedIn(!loggedIn);
//         }}
//         style={{ height: "40px" }}
//       >
//         {loggedIn ? "logout" : "login"}
//       </button>
//     </>
//   );
// }

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        +1
      </button>
    </>
  );
}
