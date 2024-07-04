import { useRenderCount } from "@uidotdev/usehooks";
import React from "react";

export default function App() {
  const renderCount = useRenderCount();
  const [count, setCount] = React.useState(0);

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Count: {count}</p>
      <p>Render Count: {renderCount}</p>
    </>
  );
}
