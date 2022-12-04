import React from "react";
import "./WeatherIcon.css";

const weatherIcons = require.context(`./images/icons`, true);

export default function WeatherIcon(props) {
  return (
    <div className="WeatherIcon">
      <img src={weatherIcons(`./${props.code}.svg`)} alt={props.description} />
    </div>
  );
}
