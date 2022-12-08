import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "oe00260af9e2etf881406373b51f630c";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${props.coordinates.latitude}&lon=${props.coordinates.longitude}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast d-flex justify-content-center">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 1) {
              return null;
            } else {
              if (index < 6) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
