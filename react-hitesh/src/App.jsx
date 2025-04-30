import React from "react";
import { useState } from "react";
import Dev from "./Dev";
import Card from "./Component/Card";
import image1 from "../src/assets/teacher16.png";
import image2 from "../src/assets/teacher17.png";
import image3 from "../src/assets/teacher18.png";
import image4 from "../src/assets/teacher19.png";
const App = () => {
  const [counter, setcounter] = useState(1);
  return (
    <>
      <h1>Jomiloju Diekoloreoluwa {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={() => setcounter((counter) => counter + 1)}>
        Add value
      </button>
      <button onClick={() => setcounter((counter) => counter - 1)}>
        Remove value
      </button>
      <footer>Footer {counter}</footer>

      <Dev />

      <Card role="Frontend" year="2025" image={image1} />
      <Card role="Backend" year="2024" image={image2} />
      <Card role="Figma-Designer" year="2014" image={image3} />
      <Card role="Fullstack" year="2025" image={image4} />
    </>
  );
};

export default App;
