import React from "react";
import "./WeatherExtraInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function WeatherExtraInfo(props) {
  return (
    <div className="WeatherExtraInfo card-group">
      <div className="card card-body">
        <h5 className="card-title mb-2">Feels like</h5>
        <FontAwesomeIcon icon={solid("temperature-half")} inverse size="2x" />
        <p className="card-text mt-1">{Math.round(props.feelslike)} °C</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title mb-2">Humidity</h5>
        <FontAwesomeIcon icon={solid("droplet")} inverse size="2x" />
        <p className="card-text mt-1">{props.humidity} %</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title mb-2">Wind</h5>
        <FontAwesomeIcon icon={solid("wind")} inverse size="2x" />
        <p className="card-text mt-1">{Math.round(props.wind)} km/h</p>
      </div>
    </div>
  );
}
