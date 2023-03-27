import { useState, useEffect, useRef } from "react";

export default function Clicker({ increment, keyName, color = "purple" }) {
  const [count, setCount] = useState(parseInt(localStorage.getItem(keyName) ?? 0));
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.style.backgroundColor = 'papayawhip'

    return () => {
      localStorage.removeItem(keyName);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(keyName, count);
  }, [count]);

  const buttonClick = () => {
    setCount((value) => value + 1);
    increment();
  };

  return (
    <div>
      <div style={{ color }}>Click count: {count}</div>
      <button ref={buttonRef} onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
