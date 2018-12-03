import React from 'react'
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo'
import {
    CLOUD, CLOUDY, SUN, RAIN, WINDY, SNOW,
} from './../../../constants/weather'
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind} }) => (
    <div className="weather-data-cont">
        <WeatherTemperature 
            temperature={temperature} 
            weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
);

export default WeatherData;