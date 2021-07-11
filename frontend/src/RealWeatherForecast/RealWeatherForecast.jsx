import { useState } from "react";
import styled from "styled-components";

const Day = styled.div`
  min-width: 150px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  &:nth-child(2) {
    margin-left: 20px;
}
`;

const Days = styled.div`
  min-width: 150px;
  margin: 20px;

`;
const Button = styled.button`
background: ${props => props.right ? "palevioletred" : "white"};
color: ${props => props.right ? "white" : "palevioletred"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
export const RealWeatherForecast = ({
  realWeather,
  amountData,
  setCurrentDay,
}) => {
  const [from, setFrom] = useState(0);
  console.log(amountData, "amountData");

  let weatherArr = realWeather
    ? realWeather.weather.list.slice(from, amountData + from)
    : null;

  return (
    <>
      <Days style={{ display: "flex", flexWrap: "wrap" }}>
        <Button
          onClick={() => {
            if (realWeather?.weather.list[from - amountData])
              setFrom(from - amountData);
          }}
        >
          {"<"}--
        </Button>

        {weatherArr &&
          weatherArr.map((item) => {
            return (
              <Day
                style={{ marginRight: "30px" }}
                onClick={() => setCurrentDay(item)}
              >
                <p>Humidity: {item.dt_txt}</p>
                <p>Tempreture: {item.main.temp}</p>
                <p>Feels like: {item.main.feels_like}</p>
                <p>Humidity: {item.main.humidity}</p>
                <p>Wind: {item.wind.speed}</p>
              </Day>
            );
          })}
        <Button
        right
          onClick={() => {
            if (realWeather?.weather.list[from + amountData]) {
              setFrom(from + amountData);
            }
          }}
        >
          <span>---{">"}</span>
        </ Button>
      </Days>
    </>
  );
};
