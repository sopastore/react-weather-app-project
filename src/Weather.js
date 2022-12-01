import React from "react";
import "./Weather.css";
import Search from "./Search";
import ExtraInformation from "./ExtraInformation";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="header">Last updated Tuesday 16:56</div>
      <Search />
      <div className="row my-3">
        <div className="col-8">
          <h1>Bahia Blanca</h1>
          <ExtraInformation />
        </div>
        <div className="col-4">
          <div className="d-flex">
            <div className="temp-with-units">
              <span className="temperature">23</span>{" "}
              <span className="units">°C | °F</span>
            </div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
            />
            <h3>Partly cloudy</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
