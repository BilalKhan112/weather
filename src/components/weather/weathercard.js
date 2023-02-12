import React, { useEffect, useState } from 'react'

const Weathercard = ({tempInfo}) => {
const [weatherState, setWeatherState] = useState("");
   const {
        temp,
        humidity,
        pressure,
        weathermood,
        timezone,
        name,
        speed,
        country,
        sunset,
       } = tempInfo;
    //    change the mood of weather means change the icons according to the weather if it clouds than change the icon to clouds and if it is sunny than change it to the sunny icon and so on.
    useEffect(()=>{
     if(weathermood){
        switch(weathermood){
            case "Clouds" : setWeatherState("wi-cloudy");
            break;
            case "Sunny" : setWeatherState("wi-day-sunny");
            break;
            case "Haze" : setWeatherState("wi-day-haze");
            break;
            case "Rain" : setWeatherState("wi-rain");
            break;
            case "Clear": setWeatherState("wi-night-clear");
            break;
            case "Smoke": setWeatherState("wi-night-fog");
            break;
            default:
                setWeatherState("wi-day-sunny")
        }
     }
    },[weathermood])
    
    //    convert sunset into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let time = `${date.getHours()}:${date.getMinutes()}`;
    // now we successfuly convert the sunset id to time now we will replace the sunset with time
  return (
    <>
       <article className='widget'>
        <div className='weatherIcon'>
         <i className={`wi ${weatherState}`}></i>
        </div>

        <div className='weatherInfo'>
            <div className='temperature'>
                <span>{temp}&deg;</span>
            </div>
            <div className='description'>
                <div className='weatherCondition'>{weathermood}</div>
                <div className='place'>{name}, {country}</div>
            </div>
        </div>
        {/* <div className='date'>{ new Date().toLocaleString()}</div> */}
        <div className='date'>{ timezone}</div>
        {/* 4 cols section */}
        <div className='extra-temp'>
            <div className='temp-info-minmax'>
                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-sunset'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    {time} <br />
                     Sunset 
                    </p>
                </div>

                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-humidity'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                           {humidity} <br />
                           Humidity
                    </p>
                </div>  
            </div>
            <div className='weather-extra-info'>
            <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-rain'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    {pressure} <br />
                    Pressure   
                    </p>
                </div>  

                <div className='two-sided-section'>
                    <p>
                        <i className={'wi wi-strong-wind'}></i>
                    </p>
                    <p className='extra-info-leftside'>
                    {speed} <br />
                          Speed
                    </p>
                </div>  
            </div>
        </div>
      </article>
    </>
  )
}

export default Weathercard
