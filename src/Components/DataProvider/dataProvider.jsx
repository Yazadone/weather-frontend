import { createContext, useState, useEffect } from 'react';


const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [searchData, setsearchData] = useState("")
    const [cityName, setcityName] = useState([])
    const [selectedCity, setselectedCity] = useState([])
    const [cityWeatherData, setcityWeatherData] = useState()
    
    // Fetching cities using useEffect
    useEffect(() => {
        if (searchData?.trim() != "") {
            fetchData()
        } else {
            setcityName([])
        }
    },[searchData])

    // Fetching city weather data
    useEffect(() => {
        if (selectedCity?.length > 0) {
            fetchWeatherData()
        } 
    },[selectedCity])

    // Function to fetch weather data
    const fetchWeatherData = async() => {
        try {
            const res = await fetch(`http://localhost:5000/api/weather?lat=${selectedCity[0]?.latitude}&lon=${selectedCity[0]?.longitude}`)
            const weatherData = await res.json()
            setcityWeatherData(weatherData)
            console.log(cityWeatherData)

        } catch(e){
            console.log(e.error)
        } 
    }

    // Function to fetch cities name
    const fetchData = async() => {
        try {
            const res = await fetch(`http://localhost:5000/api/geo?city=${searchData}`)
            const data = await res.json()
            console.log("Data",data)
            const cities = data?.map((item, index) => {   //Saving the city object from data into cities variable
                return {
                    id: index,
                    name: `${item?.name}, ${item?.state}, ${item?.country}`,
                    latitude: item?.lat,
                    longitude: item?.lon
                };
            });

            setcityName(cities);
        } catch(e){
            console.log(e.error)
        }   
    }

    return (
        <DataContext.Provider value={{ searchData,setsearchData,cityName,setselectedCity,selectedCity, cityWeatherData }}>
            {children}
        </DataContext.Provider>
    );
};

export { DataContext, DataProvider };