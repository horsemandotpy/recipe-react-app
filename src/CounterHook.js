import React, { useState } from "react";

export default function CounterHook(props) {
  const [count, setCount] = useState(props.initialCount);
  return (
    <div>
      <button onClick={() => setCount((pevCount) => pevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount((pevCount) => pevCount + 1)}>+</button>
    </div>
  );
}
