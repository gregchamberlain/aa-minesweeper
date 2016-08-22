import React from 'react';
import { render } from 'react-dom';
import Tabs from './tabs';
import WeatherClock from './weather_clock';
import AutoComplete from './auto_complete';

const data = [
  { title: "Title 1", content: "This is the first page"},
  { title: "Title 2", content: "This is the second page"},
  { title: "Title 3", content: "This is the third page"},
  { title: "Title 4", content: "This is the fourth page"},
];

const names = ["Jangmi", "Greg", "Daniel", "Matt", "Kevin"];

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  render(
    <div>
      <WeatherClock />
      <Tabs data={data}/>
      <AutoComplete names={names}/>
    </div>
    ,
    root);
});
