import React from "react";
import Dashboard from "./Dashboard";
import "./App.css";
import { CurrencyProvider } from "./Context/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <div className="App">
        <Dashboard />
      </div>
    </CurrencyProvider>
  );
}

export default App;
