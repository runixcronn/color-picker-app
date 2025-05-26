import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [color, setColor] = useState("#ffffff");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div 
      className="flex justify-center flex-col items-center h-screen" 
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col items-center justify-center rounded-lg p-5 w-96 h-96 shadow-lg bg-amber-100">
        <h2 className="text-2xl font-bold">Color Picker App</h2>
        <p>Current Color: {color} </p>
        <input type="color" value={color} onChange={handleColorChange} className="mt-10 w-24 h-24 rounded-3xl" />
      </div>
    </div>
  );
};

export default App;
