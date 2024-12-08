import SearchBar from "./Components/SearchBar/searchBar";
import { DataProvider } from "./Components/DataProvider/dataProvider";
import WeatherDetails from "./Components/WeatherDetails/weatherdetails";
import HourlyForecast  from './Components/HourlyForecast/hourlyForecast'; 
import AirDetailsComponent from "./Components/AirDetailComponents/AirDetailComponents";
import SunDetailsComponent from "./Components/SunDetailsComponent/SunDetailsComponent";
import image from "./Assets/images/background.jpg";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router"; 

function App() {
  return (
    <DataProvider>
      <img className={styles.background} src={image} alt="Background" />
      <SearchBar />
      <div className={styles.row_container}>
      <div className={styles.left}>
      <Routes> 
        <Route path="/" element={<WeatherDetails />} />
        <Route path="/hourlyForecast" element={<HourlyForecast />} />
      </Routes>
      </div>
      <div className={styles.right}>
      <AirDetailsComponent />
      <SunDetailsComponent />
      </div>
      </div>
    </DataProvider>
  );
}

export default App;