import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState({ loaded: false });

  function handleResponse(response) {
    setForecast({
      loaded: true,
      data: response.data.daily,
    });
  }

  if (forecast.loaded) {
    console.log(forecast.data[0]);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.data.map(function(dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
          <div className="col"></div>
        </div>
      </div>
    );
  } else {
    console.log(props.city);
    const apiKey = "oe00260af9e2etf881406373b51f630c";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
