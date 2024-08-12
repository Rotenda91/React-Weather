import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

const WeatherForecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.weatherData]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    console.log(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "f3009e4852fa0a079dab291dabf020c4";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.weatherData.city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast &&
            forecast.map(function (day, index) {
              if (index < 5) {
                return (
                  <div className="col m-0" key={index}>
                    <WeatherForecastDay data={day} />
                  </div>
                );
              } else {
                return null;
              }
            })}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
};

export default WeatherForecast;
