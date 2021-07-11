import styled from 'styled-components'

const ChosenDay = styled.div`
  min-width: 500px;
  margin-top: 30px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
`;

export const DayInfo = ({currentDay}) => {
  return (
    currentDay ? (<ChosenDay style={{backgroundColor: 'lavender'}}>
                <p>Humidity: {currentDay.dt_txt}</p> 
                <p>Tempreture: {currentDay.main.temp}</p>
                <p>Feels like: {currentDay.main.feels_like}</p>
                <p>Humidity: {currentDay.main.humidity}</p>
                <p>Wind: {currentDay.wind.speed}</p>
                <p>Visibility: {currentDay.visibility}</p>
                <p>Pressure: {currentDay.main.pressure}</p>
    </ChosenDay>) : 'loading...'
  )
}
