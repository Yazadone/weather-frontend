import React, { useContext } from "react";
import { DataContext } from "../DataProvider/dataProvider";
import styles from "./hourlyforcast.module.css";

function HourlyForecast() {
  //Access the city weather data
  const { cityWeatherData } = useContext(DataContext);
  const celsius = (fahrenheit) => Math.round(((fahrenheit - 32) * 5) / 9);

  // tells the user that hourly format is it available
  if (!cityWeatherData?.hourly || cityWeatherData.hourly.length === 0) {
    return (
      <div className={styles.centerBox}>
        <p>hourly forecast is currently not available. .</p>
      </div>
    );
  }
  // displays the hourly forcast
  return (
    <div className={styles.centerBox}>
      <div className={styles.scrollBox}>
        <h2>Hourly Temperature Forecast</h2>
        {cityWeatherData.hourly.map((hour, index) => (
          <div key={index}>
            <p>
              <strong>Time:</strong>{" "}
              {new Date(hour.dt * 1000).toLocaleTimeString()}
            </p>
            <p>
              <strong>Temperature:</strong> {hour.temp}°F
            </p>
            <p>
              <strong>Temperature (Celsius):</strong> {celsius(hour.temp)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
