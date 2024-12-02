import SearchBar from "./Components/SearchBar/searchBar";
import { DataProvider } from "./Components/DataProvider/dataProvider";
import AirDetailsComponent from "./Components/AirDetailComponents/AirDetailComponents";
import SunDetailsComponent from "./Components/SunDetailsComponent/SunDetailsComponent";
import image from "./Assets/images/background.jpg"
import styles from "./App.module.css"

function App() {
  return (
    <DataProvider>
      <img className={styles.background} src={image}></img>
      <SearchBar/>
      <AirDetailsComponent/>
      <SunDetailsComponent/>
    </DataProvider>
  );
}

export default App;