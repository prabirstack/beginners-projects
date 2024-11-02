import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1 className="number">{count}</h1>
      <div className="btn-container">
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="increment"
        >
          +
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="increment"
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
