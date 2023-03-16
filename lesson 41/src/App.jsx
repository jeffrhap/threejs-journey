import { useState } from "react";
import Clicker from "./Clicker";

export default function App() {
  const [hasClicker, setHasClicker] = useState(true);

  return (
    <>
      <button onClick={() => setHasClicker((value) => !value)}> {hasClicker ? "Hide" : "Show"} Clicker</button>
      {hasClicker && (
        <>
          <Clicker keyName="countA" color="red" />
          <Clicker keyName="countB" color="green" />
          <Clicker keyName="countC" color="blue" />
        </>
      )}
    </>
  );
}
