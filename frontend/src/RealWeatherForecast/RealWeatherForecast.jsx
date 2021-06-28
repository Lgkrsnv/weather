export const RealWeatherForecast = ({realWeather}) => {

  return (
    <>
    <p>{realWeather?.weather.city.name}</p>

    {realWeather?.weather.list.map(item => {
      console.log(item.main.temp);
      return <div>
        <p>Humidity: {item.dt_txt}</p>
        <p>Tempreture: {item.main.temp}</p>
        <p>Feels like: {item.main.feels_like}</p>
        <p>Humidity: {item.main.humidity}</p>
        <p>Humidity: {item.wind.speed}</p>
        <hr />
        </div> })}
    
    </>
  )
} 
