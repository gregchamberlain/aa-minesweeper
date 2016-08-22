import React from 'react';

const Weather = ({weather}) => (
  <div className="weather">
    <div>{weather.name}</div>
    <div>{weather.main.temp}</div>
  </div>
);

export default Weather;
