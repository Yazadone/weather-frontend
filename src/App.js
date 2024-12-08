import SearchBar from "./Components/SearchBar/searchBar";
import { DataProvider } from "./Components/DataProvider/dataProvider";
import WeatherDetails from "./Components/WeatherDetails/weatherdetails";
import HourlyForecast  from './Components/HourlyForecast/hourlyForecast'; 
import AirDetailsComponent from "./Components/AirDetailComponents/AirDetailComponents";
import SunDetailsComponent from "./Components/SunDetailsComponent/SunDetailsComponent";
import image from "./Assets/images/background.jpg";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <DataProvider>
      <img className={styles.background} src={image} alt="Background" />
      <SearchBar />
      <Routes> 
        <Route path="/" element={<WeatherDetails />} />
        <Route path="/hourlyForecast" element={<HourlyForecast />} />
      </Routes>
      <AirDetailsComponent />
      <SunDetailsComponent />
    </DataProvider>
  );
}

export default App;