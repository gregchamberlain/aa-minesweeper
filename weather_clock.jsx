import React, { Component } from 'react';
import Weather from './weather';
import moment from 'moment';

class WeatherClock extends Component {
  constructor () {
    super();
    this.state = {
      time: new Date(),
      weather: {main:{}}
     };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((resp) => {
      let xhr = new XMLHttpRequest();
      let lat = resp.coords.latitude;
      let lon = resp.coords.longitude;
      xhr.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=645c5d39c7603f17e23fcaffcea1a3c1&units=imperial`, true);
      xhr.onload = () => {
        this.setState({ weather: JSON.parse(xhr.response) });
      };

      xhr.send();
    });

    this.interval = setInterval(() => {
      this.setState({time: new Date()});
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const { time } = this.state;

    let formattedDate = moment(time).format('ddd MMMM Do YYYY');
    let formattedTime = moment(time).format('h:mm:ss a');

    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <div>Time: {formattedTime}</div>
          <div>Date: {formattedDate}</div>
        </div>
        <h1>Weather</h1>
        <Weather weather={this.state.weather}/>
      </div>
    );
  }
}

export default WeatherClock;
