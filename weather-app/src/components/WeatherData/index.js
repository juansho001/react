import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import {
    CLOUD, CLOUDY, SUN, RAIN, WINDY, SNOW,
} from './../../constants/weather'

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20} 
            weatherState={SUN} />
        <WeatherExtraInfo humidity={100} wind={"10 m/s"} />
    </div>
);

export default WeatherData;