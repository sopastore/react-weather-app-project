import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search mb-4">
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
        <input type="submit" id="current-location" value="Current location" />
      </div>
    </form>
  );
}
