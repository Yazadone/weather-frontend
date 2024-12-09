import React, { useContext } from "react";
import styles from "./searchBar.module.css";
import { DataContext } from "../DataProvider/dataProvider";

const SearchBar = () => {
  //Using variables from DataContext useContext hook
  const { searchData, setsearchData, cityName, setselectedCity } =
    useContext(DataContext);
  return (
    <div className={styles.container}>
      <div>
        <h1>Weather Dashboard</h1>
      </div>
      <div className={styles.search_container}>
        <input
          className={styles.searchbar_input}
          value={searchData}
          type="text"
          name="searchbar"
          onChange={(e) => {
            setsearchData(e.target.value);
          }} //Assigning the user input value into setsearchData
          placeholder="City Search"
        />
        {searchData?.trim() !== "" &&
          cityName.length > 0 && ( //Listing of cities fetching from API
            <ul className={styles.cityList}>
              {cityName.map((city) => (
                <li
                  onClick={() => {
                    setselectedCity([city]);
                  }}
                  key={city.id}
                >
                  {city.name}
                </li>
              ))}
            </ul>
          )}
      </div>
    </div>
  );
};

export default SearchBar;
