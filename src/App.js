import SearchBar from "./Components/SearchBar/searchBar";
import { DataProvider } from "./Components/DataProvider/dataProvider";


function App() {
  return (
    <DataProvider>
      <SearchBar/>
    </DataProvider>
  );
}

export default App;
