import React, { useState } from "react";
import Top from "./Components/Top";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <Top name={name} />
    </div>
  );
}

export default App;
