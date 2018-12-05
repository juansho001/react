import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import './styles.css';
import {SUN, WINDY} from './../../constants/weather'

const location = 'Bogota,co';
const api_key = 'bd7fc4076bb98b8363191a671a273427';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}

const data2 = {
    temperature: 7,
    weatherState: WINDY,
    humidity: 20,
    wind: '15 m/s',

}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Buenos ",
            data: data,
        }
    }
    
    handleUpdateClick = () => {
        fetch (api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data)
            debugger;
        });
        
        this.setState({
            data: data2,
        });
    }
    
    render(){
        const {city, data} = this.state;
       return (
            <div className="weather-location-cont">
               <Location city={city} />
               <WeatherData data={data} />
               <button onClick={this.handleUpdateClick}>Update</button>
            </div>
        )
    }
};

export default WeatherLocation;