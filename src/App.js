import React, { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  function minus() {
    setProgress(progress - 1);
  }
  function plus() {
    setProgress(progress + 1);
  }
  return (
    <div>
      <div style={{ height: 15, width: 100, border: "1px solid black" }}>
        <div
          style={{
            height: "100%",
            width: `${(progress * 5) % 101}%`,
            background: "blue"
          }}
        />
      </div>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
    </div>
  );
}

export default App;
