import React, { useContext } from "react"
import styles from "./searchBar.module.css"
import { DataContext } from '../DataProvider/dataProvider';

const SearchBar = () => {
    const { searchData,setsearchData,cityName,setselectedCity } = useContext(DataContext);
    return(
        <div className={styles.container}>
            <div className={styles.search_container}>
                <input 
                value={searchData} 
                type="text" 
                name="searchbar"
                onChange={(e) => {setsearchData(e.target.value)}}
                placeholder="City Search"
                /> 
                 {searchData?.trim() !== "" && cityName.length > 0 && (
                    <ul className={styles.cityList}>
                        {cityName.map((city) => (
                            <li onClick={() => {setselectedCity([city])}}key={city.id}>{city.name}</li> 
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SearchBar;