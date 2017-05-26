import React, { Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
    renderWeather(cityData) {
        const city = cityData.city;
        const name = cityData.city.name;
        const { lon, lat }  = cityData.city.coord;
        const temps = cityData.list.map(entry => entry.main.temp - 273);
        const humidities = cityData.list.map(entry => entry.main.humidity);
        const pressures = cityData.list.map(entry => entry.main.pressure);

        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td> <Chart units="°C" data={temps} color="red" /> </td>
                <td> <Chart units="hPa" data={pressures} color="green" /> </td>
                <td> <Chart units="%" data={humidities} color="black" /> </td>
            </tr>
        );
    }

    render(){
        return (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Temperature (K)</th>
                  <th>Pressure (°C)</th>
                  <th>Humidity (%)</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.weather.map(this.renderWeather)}
              </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);
