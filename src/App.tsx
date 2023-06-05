import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import UserList from "./UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent name={"andrew"} />
        <UserList />
      </header>
    </div>
  );
}

export default App;
