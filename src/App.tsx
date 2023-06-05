import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent name={5} />
      </header>
    </div>
  );
}

export default App;
