import React, { useState } from "react";

const Dev = () => {
  const [increase, setincrease] = useState(0);
  // console.log(reduce);

  return (
    <>
      <h1>Welcome to state practice</h1>
      <h2>Counting in 2s: {increase}</h2>
      <button onClick={() => setincrease((increase) => increase + 2)}>
        Increase num
      </button>
      <button onClick={() => setincrease((increase) => increase + 2)}>
        Increase num
      </button>
      <button onClick={() => setincrease((increase) => increase + 2)}>
        Increase num
      </button>
      <button onClick={() => setincrease((increase) => increase + 2)}>
        Increase num
      </button>
      <button onClick={() => setincrease(() => increase - 2)}>
        Reduce num
      </button>
    </>
  );
};

export default Dev;
