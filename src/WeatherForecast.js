import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Monday</div>
          <WeatherIcon code="clear-sky-night" width={400} height={400} />
          <div className="WeatherForecast-description text-uppercase">
            Clear Sky
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">35°</span>{" "}
            <span className="WeatherForecast-temperature-min">22°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
