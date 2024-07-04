import { useDebounce } from "@uidotdev/usehooks";
import React from "react";

export default function App() {
  const [text, setText] = React.useState("");
  const debouncedText = useDebounce(text, 500);

  return (
    <>
      <input onChange={(e) => setText(e.target.value)} />

      {debouncedText}
    </>
  );
}
