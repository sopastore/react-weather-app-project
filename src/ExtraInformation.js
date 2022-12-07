import React from "react";
import "./ExtraInformation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ExtraInformation(props) {
  return (
    <div className="ExtraInformation card-group">
      <div className="card card-body">
        <h5 className="card-title">Feels like</h5>
        <FontAwesomeIcon icon={solid("temperature-half")} inverse size="2x" />
        <p className="card-text">{Math.round(props.feelslike)} °C</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title">Humidity</h5>
        <FontAwesomeIcon icon={solid("droplet")} inverse size="2x" />
        <p className="card-text">{props.humidity} %</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title">Wind</h5>
        <FontAwesomeIcon icon={solid("wind")} inverse size="2x" />
        <p className="card-text">{Math.round(props.wind)} km/h</p>
      </div>
    </div>
  );
}
