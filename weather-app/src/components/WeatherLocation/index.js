import React, {Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import './styles.css';
import {SUN, WINDY} from './../../constants/weather'

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
        console.log("actualizado")
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