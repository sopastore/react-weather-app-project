import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This proyect was coded by{" "}
          <a
            href="https://phenomenal-alpaca-b8ef22.netlify.app/"
            target="_blank"
          >
            Sofia Pastore
          </a>
          , and it is{" "}
          <a
            href="https://github.com/sopastore/react-weather-app-project"
            target="_blank"
          >
            open-source
          </a>
        </footer>
      </div>
    </div>
  );
}
