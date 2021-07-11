// import { WeatherList } from "./WeatherList/WeatherIList";
import { DayInfo } from "./DayInfo/DayInfo";
import { RealWeatherForecast } from "./RealWeatherForecast/RealWeatherForecast";
import { FindCity } from "./FindCity/FindCity";
import { useState, useEffect } from "react";

// const weatherData = [
//   {
//     id: 1,
//     day: "Monday",
//     min: 17,
//     max: 23,
//     city: "Moscow",
//   },
//   {
//     id: 2,
//     day: "Tuesday",
//     min: 19,
//     max: 25,
//     city: "Moscow",
//   },
//   {
//     id: 3,
//     day: "Wednesday",
//     min: 22,
//     max: 27,
//     city: "Moscow",
//   },
//   {
//     id: 4,
//     day: "Thursday",
//     min: 23,
//     max: 27,
//     city: "Moscow",
//   },
//   {
//     id: 5,
//     day: "Friday",
//     min: 27,
//     max: 31,
//     city: "Moscow",
//   },
//   {
//     id: 1,
//     day: "Monday",
//     min: 31,
//     max: 33,
//     city: "Barcelona",
//   },
//   {
//     id: 2,
//     day: "Tuesday",
//     min: 30,
//     max: 32,
//     city: "Barcelona",
//   },
//   {
//     id: 3,
//     day: "Wednesday",
//     min: 32,
//     max: 34,
//     city: "Barcelona",
//   },
//   {
//     id: 4,
//     day: "Thursday",
//     min: 34,
//     max: 36,
//     city: "Barcelona",
//   },
//   {
//     id: 5,
//     day: "Friday",
//     min: 31,
//     max: 36,
//     city: "Barcelona",
//   },
// ];

function App() {

  const [currentCity, setCurrentCity] = useState("Moscow");
  const [amountData, setAmountData] = useState(3);
  const [currentDay, setCurrentDay] = useState();
  const [realWeather, setRealWeather] = useState();
  
  // let weatherDataCity = weatherData.filter(day => day.city === currentCity);
  // if (weatherDataCity.length === 0) weatherDataCity = weatherData.filter(day => day.city === "Moscow");

  useEffect(() => {
    async function getWeather (){
      const resp = await fetch(`/api/v1/${currentCity}`);
      const result = await resp.json();
      setRealWeather(()=>result)
      setCurrentDay(result.weather.list[0])
    }
    getWeather();
  }, [currentCity])
  console.log(realWeather, '1 use');

  return (
    <div className="App">
      <FindCity currentCity={currentCity} setCurrentCity={setCurrentCity} setAmountData={setAmountData}/>
      {/* <WeatherList weatherDataCity={weatherDataCity} setCurrentDay={setCurrentDay} setAmountData={setAmountData}/> */}
      <DayInfo currentDay={currentDay} />
      <RealWeatherForecast realWeather={realWeather} amountData={amountData} setCurrentDay={setCurrentDay}/>
    </div>
  );
}

export default App;
