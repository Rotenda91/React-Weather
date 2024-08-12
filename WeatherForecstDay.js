import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

const WeatherForecastDay = (props) => {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    debugger;
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div className="container-day rounded-3 p-2">
      <div className="WeatherForecast">{day()}</div>
      <div className="iconForecast">
        <WeatherIcon
          code={props.data.condition.icon}
          size={100}
          className="forecastIcon"
        />
      </div>
      <div className="WeatherForecastTemperature">
        <span className="WeatherForecastTemperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecastTemperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
