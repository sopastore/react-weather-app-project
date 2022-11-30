import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div class="header">Last updated Tuesday 16:56</div>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div class="row">
        <div class="col-8">
          <h1>Bahia Blanca</h1>
          <div class="card-group">
            <div class="card card-body">
              <h5 class="card-title">Feels like</h5>
              <p class="card-text">24°C</p>
            </div>
            <div class="card card-body">
              <h5 class="card-title">Humidity</h5>
              <p class="card-text">79%</p>
            </div>
            <div class="card card-body">
              <h5 class="card-title">Wind</h5>
              <p class="card-text">12 km/h</p>
            </div>
            <div class="card card-body">
              <h5 class="card-title">Sunrise</h5>
              <p class="card-text">5:32</p>
            </div>
            <div class="card card-body">
              <h5 class="card-title">Sunset</h5>
              <p class="card-text">19:49</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <h2>23 °C | °F</h2>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Partly Cloudy"
          />
          <h3>Partly cloudy</h3>
        </div>
      </div>
    </div>
  );
}
