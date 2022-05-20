import React from "react";

const Weather = ({ cityWeather }) => {
  const { name } = cityWeather || {};
  const { country } = cityWeather?.sys || {};
  const { main, icon } = cityWeather?.weather[0] || {};
  const { temp, humidity } = cityWeather?.main || {};
  const { speed } = cityWeather?.wind || {};

//   console.log(cityWeather);

  return (
    <>
      <div className="weather loading">
        <div className="location">
          <h1 className="location-city">Weather in {name}, {country}</h1>
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt=""
            className="icon"
          />
        </div>
        <div className="temperature">
          <div className="degree-section">
            <h2 className="temperature-degree">
              {temp}
              <span>°C</span>
            </h2>
          </div>
          <div className="temperature-des">{main}</div>
          <div className="humidity">Humidity: {humidity}%</div>
          <div className="wind">Wind: {speed}km/hr</div>
        </div>
      </div>
    </>
  );
};

export default Weather;
