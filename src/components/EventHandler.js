import { useState } from "react";
export function EventHandler() {
  const [status, setStatus] = useState("Click the btn");

  function clickBtn(event, num) {
    setStatus(`btn clicked : ${num}`);
  }
  return (
    <div>
      <button
        onClick={(event) => {
          clickBtn(event, 5);
        }}
      >
        5
      </button>
      <p>{status}</p>
    </div>
  );
}
