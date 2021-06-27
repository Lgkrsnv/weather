import { WeatherList } from "./WeatherList/WeatherIList";
import { DayInfo } from "./DayInfo/DayInfo";
import { FindCity } from "./FindCity/FindCity";
import { useState } from "react";

const weatherData = [
  {
    id: 1,
    day: "Monday",
    min: 17,
    max: 23,
    city: "Moscow",
  },
  {
    id: 2,
    day: "Tuesday",
    min: 19,
    max: 25,
    city: "Moscow",
  },
  {
    id: 3,
    day: "Wednesday",
    min: 22,
    max: 27,
    city: "Moscow",
  },
  {
    id: 4,
    day: "Thursday",
    min: 23,
    max: 27,
    city: "Moscow",
  },
  {
    id: 5,
    day: "Friday",
    min: 27,
    max: 31,
    city: "Moscow",
  },
  {
    id: 1,
    day: "Monday",
    min: 31,
    max: 33,
    city: "Barcelona",
  },
  {
    id: 2,
    day: "Tuesday",
    min: 30,
    max: 32,
    city: "Barcelona",
  },
  {
    id: 3,
    day: "Wednesday",
    min: 32,
    max: 34,
    city: "Barcelona",
  },
  {
    id: 4,
    day: "Thursday",
    min: 34,
    max: 36,
    city: "Barcelona",
  },
  {
    id: 5,
    day: "Friday",
    min: 31,
    max: 36,
    city: "Barcelona",
  },
];

function App() {
  const [currentDay, setCurrentDay] = useState(weatherData[1]);
  const [currentCity, setCurrentCity] = useState("Moscow");
  let weatherDataCity = weatherData.filter(day => day.city === currentCity);
  if (weatherDataCity.length === 0) weatherDataCity = weatherData.filter(day => day.city === "Moscow");
  return (
    <div className="App">
      <p>{currentCity}</p>
      <FindCity currentCity={currentCity} setCurrentCity={setCurrentCity} />
      <WeatherList weatherDataCity={weatherDataCity} setCurrentDay={setCurrentDay} />
      <DayInfo currentDay={currentDay} />
    </div>
  );
}

export default App;
