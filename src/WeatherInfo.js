import React from "react";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import ExtraInformation from "./ExtraInformation";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row my-3">
        <div className="col-8">
          <h1>{props.data.city}</h1>
          <ExtraInformation
            feelslike={props.data.feelsLike}
            humidity={props.data.humidity}
            wind={props.data.wind}
          />
        </div>
        <div className="col-4">
          <div className="d-flex">
            <div className="temp-with-units">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>{" "}
              <span className="units">°C | °F</span>
            </div>
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <h3 className="text-capitalize">{props.data.description}</h3>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
