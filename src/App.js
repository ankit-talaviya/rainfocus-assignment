import React, { useState } from "react";

import ColorList from "./ColorList";
import "./styles.css";

const App = () => {
  const [count, setCount] = useState([
    {
      id: 1,
      color: "red",
      counter: 0
    },
    {
      id: 2,
      color: "yellow",
      counter: 0
    },
    {
      id: 3,
      color: "green",
      counter: 0
    },
    {
      id: 4,
      color: "blue",
      counter: 0
    }
  ]);

  // Counter Increment
  const updateCounter = (id) => {
    count.find((i) => id === i.id).counter += 1;
    setCount([...count]);
  };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <ul>
        {count.map((i) => (
          <ColorList
            key={i.id}
            colorName={i.color}
            counter={i.counter}
            increment={() => updateCounter(i.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
