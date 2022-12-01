import React from "react";
import "./ExtraInformation.css";

export default function ExtraInformation() {
  return (
    <div className="ExtraInformation card-group">
      <div className="card card-body">
        <h5 className="card-title">Feels like</h5>
        <p className="card-text">24°C</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title">Humidity</h5>
        <p className="card-text">79%</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title">Wind</h5>
        <p className="card-text">12 km/h</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title">Sunrise</h5>
        <p className="card-text">5:32</p>
      </div>
      <div className="card card-body">
        <h5 className="card-title">Sunset</h5>
        <p className="card-text">19:49</p>
      </div>
    </div>
  );
}
