import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import {PropTypes} from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import Location from './Location'
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';

class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        }

        console.log("constructor");
    }

    componentDidMount = () => {
        this.handleUpdateClick();
    };
    
    componentDidUpdate = (prevProps, prevState) => {
    };
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch (api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log();
            this.setState({
                data: newWeather,
            });
        });
    }
    
    render(){
        const {city, data} = this.state;
       return (
            <div className="weather-location-cont">
               <Location city={city} />
               {data ? <WeatherData  data={data} /> : <CircularProgress size={50} />}
            </div>
        )
    }
};

WeatherLocation.protoTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;