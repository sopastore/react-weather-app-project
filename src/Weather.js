import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
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
        <FormattedDate date={weatherData.date} />
        <form className="mb-4">
          <div className="d-flex flex-row">
            <input type="submit" className="btn" id="search-icon" value="🔍" />
            <input
              type="text"
              placeholder="Search for a city..."
              autoComplete="off"
              autoFocus="on"
              class="form-control"
              id="city-input"
            />
            <input
              type="submit"
              id="current-location"
              value="Current location"
            />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    const apiKey = "oe00260af9e2etf881406373b51f630c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
