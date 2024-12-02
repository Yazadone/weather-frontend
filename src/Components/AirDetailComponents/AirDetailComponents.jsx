import React, { useContext } from 'react';
import { DataContext } from '../DataProvider/dataProvider';
import styles from './airDetailsComponent.module.css';

const AirDetailsComponent = () => {
  const { cityWeatherData } = useContext(DataContext);

  if (!cityWeatherData) return null;

  const { humidity, wind_speed } = cityWeatherData.current;

  return (
    <div className={styles.container}>
      <h3>Air Details</h3>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {wind_speed} m/s</p>
    </div>
  );
};

export default AirDetailsComponent;
