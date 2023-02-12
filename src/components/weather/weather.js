// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=3b9e2d600d35817355340eb90511c9b6

import React, { useEffect, useState } from 'react'
import Weathercard from './weathercard';
import './weather.css'
const Weather = () => {
    const [searchValue , setSearchValue]=useState("Nowshera");
    const [tempInfo , setTempInfo] = useState({});

    const search= async ()=>{
       try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=3b9e2d600d35817355340eb90511c9b6`;

        const res =await fetch(url);
        const data = await res.json();
    //    console.log(data); 
      const { temp,humidity,pressure } = data.main;
      const {main:weathermood}=data.weather[0];
      const {timezone} = data;
      const {name} = data;
      const {speed} = data.wind;
      const {country , sunset} = data.sys;
    
       const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        timezone,
        name,
        speed,
        country,
        sunset
       };
        setTempInfo(myWeatherInfo);

       } catch (error) {
        console.log(error);
       }
    };
    useEffect(()=>{
        search();
    },[]);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={search}>
            Search
          </button>
        </div>
      </div>

      {/* card */}
     < Weathercard tempInfo={tempInfo}/>
     
    </>
  )
}

export default Weather;
