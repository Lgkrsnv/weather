import { useState } from "react";

export const RealWeatherForecast = ({
  realWeather,
  amountData,
  setCurrentDay,
}) => {
  const [from, setFrom] = useState(0);
  console.log(amountData, 'amountData');
  // const [weatherArr, setWeatherArr] = useState(() => {
  //   // return
  //   return realWeather?.weather.list.slice(from, amountData + from)

  // });
  let weatherArr = realWeather
    ? realWeather.weather.list.slice(from, amountData + from)
    : null;
    console.log(realWeather?.weather.list.slice(from, amountData + from), from, amountData, amountData + from);
  console.log(weatherArr, "000");

  // const handleDaysToShow = () => {
  //   if (realWeather?.weather.list[from + amountData]) {
  //     setFrom(()=>from + amountData)
  //     // setWeatherArr(()=>realWeather?.weather.list?.slice(from, amountData+from))
  //   }
  // }
  return (
    <>
      <p>Weather in {realWeather?.weather.city.name}</p>
      {console.log(amountData, 'amountData return')}
 
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <button onClick={()=>{
          if (realWeather?.weather.list[from - amountData])
          setFrom(from-amountData)}}>{"<"}--</button>
        {console.log(weatherArr, "unde wArr")}
        {weatherArr &&
          weatherArr.map((item) => {
            return (
              <div
                style={{ marginRight: "30px" }}
                onClick={() => setCurrentDay(item)}
              >
                <p>Humidity: {item.dt_txt}</p>
                <p>Tempreture: {item.main.temp}</p>
                <p>Feels like: {item.main.feels_like}</p>
                <p>Humidity: {item.main.humidity}</p>
                <p>Wind: {item.wind.speed}</p>
                <hr />
              </div>
            );
          })}
        <button
         
         onClick={()=> {
           if (realWeather?.weather.list[from + amountData]) {
             setFrom(from+amountData )}}
           }
        >
          <span>---{">"}</span>
        </button>
      </div>
    </>
  );
};
