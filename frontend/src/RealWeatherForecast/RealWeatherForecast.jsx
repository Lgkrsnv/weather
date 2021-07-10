export const RealWeatherForecast = ({ realWeather, amountData, setCurrentDay }) => {

  const weatherArr = realWeather?.weather.list?.slice(0, amountData);
  return (
    <>
      <p>Weather in {realWeather?.weather.city.name}</p>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {weatherArr &&
          weatherArr.map((item) => {
            return (
              <div style={{ marginRight: "30px" }} onClick={()=>setCurrentDay(item)}>
                <p>Humidity: {item.dt_txt}</p>
                <p>Tempreture: {item.main.temp}</p>
                <p>Feels like: {item.main.feels_like}</p>
                <p>Humidity: {item.main.humidity}</p>
                <p>Wind: {item.wind.speed}</p>
                <hr />
              </div>
            );
          })}
      </div>
    </>
  );
};
