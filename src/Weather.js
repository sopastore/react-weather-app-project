import React, { useState } from "react";
import "./Weather.css";
import Search from "./Search";
import ExtraInformation from "./ExtraInformation";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Friday 14:30",
      city: response.data.city,
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="header">Last updated Tuesday 16:56</div>
        <Search />
        <div className="row my-3">
          <div className="col-8">
            <h1>{weatherData.city}</h1>
            <ExtraInformation
              feelslike={weatherData.feelsLike}
              humidity={weatherData.humidity}
              wind={weatherData.wind}
            />
          </div>
          <div className="col-4">
            <div className="d-flex">
              <div className="temp-with-units">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="units">°C | °F</span>
              </div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly Cloudy"
              />
              <h3 className="text-capitalize">{weatherData.description}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "oe00260af9e2etf881406373b51f630c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
