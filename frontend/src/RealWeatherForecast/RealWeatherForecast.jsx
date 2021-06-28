export const RealWeatherForecast = ({realWeather, amountData}) => {
  const weatherArr = realWeather?.weather.list.slice(0, amountData)
  return (
    <>
    <p>{realWeather?.weather.city.name}</p>
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {console.log(weatherArr)}
    {weatherArr && weatherArr.map(item => {
      console.log(item.main.temp);
      return <div style={{marginRight: '30px'}}>
        <p>Humidity: {item.dt_txt}</p>
        <p>Tempreture: {item.main.temp}</p>
        <p>Feels like: {item.main.feels_like}</p>
        <p>Humidity: {item.main.humidity}</p>
        <p>Humidity: {item.wind.speed}</p>
        <hr />
        </div> })}
    
    </div>
    </>
  )
} 
