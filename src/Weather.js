import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      coordinates: response.data.coordinates,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      temperature: response.data.temperature.current,
      feelsLike: response.data.temperature.feels_like,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "oe00260af9e2etf881406373b51f630c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "oe00260af9e2etf881406373b51f630c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    console.log(navigator.geolocation.getCurrentPosition(searchLocation));
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <FormattedDate date={weatherData.date} />
        <form className="mb-4" onSubmit={handleSubmit}>
          <div className="d-flex flex-row">
            <input type="submit" className="btn" id="search-icon" value="????" />
            <input
              type="text"
              placeholder="Search for a city..."
              autoComplete="off"
              autoFocus="on"
              className="form-control"
              id="city-input"
              onChange={handleCityChange}
            />
            <button
              className="current-location-btn"
              type="submit"
              id="current-location"
              onClick={getCurrentLocation}
            >
              <FontAwesomeIcon icon={solid("location-dot")} size="2x" beat />
            </button>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
