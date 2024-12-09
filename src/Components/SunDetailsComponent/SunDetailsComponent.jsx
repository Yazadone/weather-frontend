import React, { useContext } from "react";
import { DataContext } from "../DataProvider/dataProvider";
import styles from "./sunDetailsComponent.module.css";

const SunDetailsComponent = () => {
  const { cityWeatherData } = useContext(DataContext);

  if (!cityWeatherData) return null;

  const { sunrise, sunset } = cityWeatherData.current;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className={styles.container}>
      <h3>Sun Details</h3>
      <p>Sunrise: {formatTime(sunrise)}</p>
      <p>Sunset: {formatTime(sunset)}</p>
    </div>
  );
};

export default SunDetailsComponent;
