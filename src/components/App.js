import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <p>Button clicked {counter} times</p>
      <button
        onClick={() => {
          setCounter(counter++);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
