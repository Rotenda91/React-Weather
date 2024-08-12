import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

const WeatherInfo = (props) => {
  return (
    <div className="row mt-3">
      <div className="col-4 d-flex justify-content-center align-items-center ">
        <div className="d-inline-block">
          <WeatherIcon code={props.data.icon} size={100} className="Weather" />
        </div>
      </div>
      <div className="col-4">
        <div className="temperature d-flex justify-content-center align-items-center">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <div className="col-4">
        <h1 className="description">{props.data.city}</h1>
        <ul>
          <li className="description text-capitalize">
            {props.data.description}
          </li>
          <li>
            {" "}
            <FormattedDate date={props.data.date} />
          </li>
          <li className="description">Humidity: {props.data.humidity}%</li>
          <li className="description mb-3">Wind: {props.data.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherInfo;
