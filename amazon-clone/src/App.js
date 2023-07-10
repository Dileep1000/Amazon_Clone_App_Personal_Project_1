import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    //BEM Convention
    <div className="app">
      {/* Header stuff here */}
      <Header />
      {/* Home stuff here */}
    </div>
  );
}

export default App;
