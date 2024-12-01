import SearchBar from "./Components/SearchBar/searchBar";
import { DataProvider } from "./Components/DataProvider/dataProvider";
import AirDetailsComponent from "./Components/AirDetailComponents/AirDetailComponents";
import SunDetailsComponent from "./Components/SunDetailsComponent/SunDetailsComponent";

function App() {
  return (
    <DataProvider>
      <SearchBar/>
      <AirDetailsComponent/>
      <SunDetailsComponent/>
    </DataProvider>
  );
}

export default App;
