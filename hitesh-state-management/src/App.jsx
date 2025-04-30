import React, { useState } from "react";

const App = () => {
  const [color, setcolor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen" style={{ background: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-32">
          <div className="flex gap-8 items-center">
            <button onClick={() => setcolor("blue")}>Blue</button>
            <button onClick={() => setcolor("red")}>Red</button>
            <button onClick={() => setcolor("green")}>Green</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
