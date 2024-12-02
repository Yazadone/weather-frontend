import React, {useContext,useState,} from "react";
import { DataContext } from "../DataProvider/dataProvider";


function WeatherDetails() {
  const { searchData,setsearchData,cityName,setselectedCity,cityWeatherData } = useContext(DataContext);
    //This sets fahrenheit to default
    const [unit, setUnit] = useState("imperial");

    //This converts fahrenheit to celsius 
    const celsius = (liveTemp) => ((liveTemp - 32) * 5) / 9;
    const time = (dateTime) => new Date(dateTime * 1000).toLocaleTimeString();

    //allows users to change units
    const changeUnit = () => {
      setUnit(unit === "imperial" ? "metric" : "imperial");
    };

    console.log("Selected City:", selectedCity);
    console.log("City Weather Data:", cityWeatherData);
   
    return (
      <div>
        <h2>
          {selectedCity?.length > 0 ? `Weather information for ${selectedCity[0]?.name || "this location"}` : "No city selected, please search and select a city."}</h2>
        {cityWeatherData?.current ? (
          <div>
            <p>Temperature:{" "} {unit === "imperial" ? `${cityWeatherData.current.temp}°F` : `${celsius(cityWeatherData.current.temp).toFixed(1)}°C`}</p>
            <p>Feels Like:{" "} {unit === "imperial" ? `${cityWeatherData.current.feels_like}°F` : `${celsius(cityWeatherData.current.feels_like).toFixed(1)}°C`}</p>
            <p>Description: {cityWeatherData.current.weather[0]?.description}</p>
            <p>Humidity: {cityWeatherData.current.humidity}%</p>
            <p>Wind Speed: {cityWeatherData.current.wind_speed}{" "} {unit === "imperial" ? "mph" : "m/s"}</p>
            <p>Sunrise: {time(cityWeatherData.current.sunrise)}</p>
            <p>Sunset: {time(cityWeatherData.current.sunset)}</p>
          </div>
        ) : (
          <p>No weather information available. Please select a city or try again.</p>
        )}
        <button onClick={changeUnit}>
          Change to {unit === "imperial" ? "Celsius" : "Fahrenheit"}
        </button>
      </div>
    );
  }
  export default WeatherDetails;


  