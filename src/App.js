import SearchBar from "./Components/SearchBar/searchBar";
import WeatherDetails from "./Components/WeatherDetails/weatherdetails";
import { DataProvider } from "./Components/DataProvider/dataProvider";


function App() {
  return (
    <DataProvider>
      <SearchBar />
      <WeatherDetails/>
    </DataProvider>
  );
}

export default App;
