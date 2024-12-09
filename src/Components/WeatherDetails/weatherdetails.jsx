import React, { useContext, useState } from "react";
import { DataContext } from "../DataProvider/dataProvider";
import { Link } from "react-router";
import styles from "./weatherdetails.module.css";

function WeatherDetails() {
  const { selectedCity, cityWeatherData } = useContext(DataContext);
  // This sets fahrenheit to default
  const [unit, setUnit] = useState("imperial");

  // This converts fahrenheit to celsius
  const celsius = (liveTemp) => Math.round(((liveTemp - 32) * 5) / 9);
  const time = (dateTime) => new Date(dateTime * 1000).toLocaleTimeString();

  // Allows users to change units
  const changeUnit = () => {
    setUnit(unit === "imperial" ? "metric" : "imperial");
  };
  //Displays weather details
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>
          {selectedCity?.length > 0
            ? `Weather information for ${
                selectedCity[0]?.name || "this location"
              }`
            : "No city selected, please search and select a city."}
        </h2>
      </div>
      {cityWeatherData?.current && (
        <Link to="/hourlyForecast" className={styles.clickCard}>
          <div className={styles.tempCard}>
            <p>
              Temperature:{" "}
              {unit === "imperial"
                ? `${Math.round(cityWeatherData.current.temp)}°F`
                : `${celsius(cityWeatherData.current.temp)}°C`}
            </p>
            <p>
              Feels Like:{" "}
              {unit === "imperial"
                ? `${Math.round(cityWeatherData.current.feels_like)}°F`
                : `${celsius(cityWeatherData.current.feels_like)}°C`}
            </p>
            <p>
              Description: {cityWeatherData.current.weather[0]?.description}
            </p>
            <p>Humidity: {cityWeatherData.current.humidity}%</p>
            <p>
              Wind Speed: {cityWeatherData.current.wind_speed}{" "}
              {unit === "imperial" ? "mph" : "m/s"}
            </p>
            <p>Sunrise: {time(cityWeatherData.current.sunrise)}</p>
            <p>Sunset: {time(cityWeatherData.current.sunset)}</p>
          </div>
        </Link>
      )}
      <button onClick={changeUnit} className={styles.convertButton}>
        Change to {unit === "imperial" ? "Celsius" : "Fahrenheit"}
      </button>
    </div>
  );
}

export default WeatherDetails;
