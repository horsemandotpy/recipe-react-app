import React from "react";
import Counter from "./components/Counter";
import CounterHook from "./CounterHook";

export default function App() {
  return (
    <>
      Class COunter
      <Counter initialCount={0} />; Counter
      <CounterHook initialCount={0} />
    </>
  );
}
