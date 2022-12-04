import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Buenos aires" />
        <footer>
          This proyect was coded by{" "}
          <a
            href="https://phenomenal-alpaca-b8ef22.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sofia Pastore
          </a>
          , and it is{" "}
          <a
            href="https://github.com/sopastore/react-weather-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source
          </a>
        </footer>
      </div>
    </div>
  );
}
