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
      <div className="WeatherForecastDay-day">{day()}</div>
      <WeatherIcon code={props.data.condition.icon} />
      <div className="WeatherForecastDay-description text-uppercase">
        {props.data.condition.description}
      </div>
      <div className="WeatherForecastDay-temperatures">
        <span className="WeatherForecastDay-temperature-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="WeatherForecastDay-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
