import React from "react";
import "./WeatherInfo.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
            <WeatherTemperature celsius={props.data.temperature} />
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <h3 className="text-capitalize">{props.data.description}</h3>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
