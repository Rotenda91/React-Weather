import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function search() {
    const apiKey = "d9fbo5b5d249ea3302dd0t9b088ab5f6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row d-flex justify-content-around align-items-center ">
          <div className="col-8">
            <form className="search mt-2" onSubmit={handleSubmit}>
              <div className="row  d-flex justify-content-center align-items-center">
                <div className="col-2">
                  <button type="submit" className="btn btn-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#ff7e67"
                      className="bi bi-search text-center"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
                <div className="col-10">
                  <input
                    type="search"
                    id="search-text"
                    className="form control border bg-light h5 p-2 rounded-5"
                    placeholder="  Enter a city..."
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-4"></div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast weatherData={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading a city...";
  }
};

export default Weather;
