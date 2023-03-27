import { useMemo, useRef, useState } from "react";
import Clicker from "./Clicker";
import People from "./People";

export default function App({ children, clickerCount }) {
  const [hasClicker, setHasClicker] = useState(true);
  const [count, setCount] = useState(0);

  const toggleClickerClick = () => {
    setHasClicker(!hasClicker);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const colors = useMemo(() => {
    const colors = [];

    for (let i = 0; i < clickerCount; i++) colors.push(`hsl(${Math.random() * 360}deg, 100%, 70%)`);

    return colors;
  }, [clickerCount]);

  return (
    <>
      {children}

      <div>Total count: {count}</div>

      <button onClick={toggleClickerClick}> {hasClicker ? "Hide" : "Show"} Clicker</button>
      {hasClicker && (
        <>
          {[...Array(clickerCount)].map((value, index) => (
            <Clicker key={index} increment={increment} keyName={`count${index}`} color={colors[index]} />
          ))}
        </>
      )}

      <People />
    </>
  );
}
