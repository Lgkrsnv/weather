export const DayInfo = ({currentDay}) => {
  return (
    currentDay ? (<div style={{backgroundColor: 'lavender'}}>
                <p>Humidity: {currentDay.dt_txt}</p> 
                <p>Tempreture: {currentDay.main.temp}</p>
                <p>Feels like: {currentDay.main.feels_like}</p>
                <p>Humidity: {currentDay.main.humidity}</p>
                <p>Wind: {currentDay.wind.speed}</p>
                <p>Visibility: {currentDay.visibility}</p>
                <p>Pressure: {currentDay.main.pressure}</p>
    </div>) : 'loading... click the day below to find out details'
  )
}
