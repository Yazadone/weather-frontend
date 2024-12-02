import SearchBar from "./Components/SearchBar/searchBar";
import WeatherDetails from "./Components/WeatherDetails/weatherdetails";
import { DataProvider } from "./Components/DataProvider/dataProvider";
import AirDetailsComponent from "./Components/AirDetailComponents/AirDetailComponents";
import SunDetailsComponent from "./Components/SunDetailsComponent/SunDetailsComponent";

function App() {
  return (
    <DataProvider>
<<<<<<< HEAD
      <SearchBar />
      <WeatherDetails/>
=======
      <SearchBar/>
      <AirDetailsComponent/>
      <SunDetailsComponent/>
>>>>>>> cecbe43d2e3fa2f287ae6226382b8570db0f445e
    </DataProvider>
  );
}

export default App;
