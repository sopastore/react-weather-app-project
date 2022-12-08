import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="mb-2" id="forecast-day">
        {day()}
      </div>
      <WeatherIcon code={props.data.condition.icon} />
      <div className="text-uppercase" id="forecast-description">
        {props.data.condition.description}
      </div>
      <div className="WeatherForecastDay-temperatures">
        <span id="forecast-max-temperature">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span id="forecast-min-temperature">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
