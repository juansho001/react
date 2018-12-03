import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD, CLOUDY, SUN, RAIN, WINDY, SNOW,
} from './../../../constants/weather'
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
}

const getWeatherIcon = weatherState =>{
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size ={sizeIcon} /> 
    else
        return <WeatherIcons className="wicon" name={"fog-sunny"} size ={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) =>  (
    <div className="weather-temperature-cont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature" >{`${temperature}`}</span>
        <span className="temperature-type" >{`Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;