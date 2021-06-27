import { WeatherItem } from "../WheaterItem/WeatherItem";
// import styled from "styled-components";

export const WeatherList = ({ weatherDataCity, setCurrentDay }) => {
  return (
    <div>
      <ul style={{ display: "flex"}}>
        {weatherDataCity?.length > 0 &&
          weatherDataCity.map((item) => (
            <li key={item.id} style={{ display: "flex", marginRight: '20px' }} onClick={() => setCurrentDay(item)}><WeatherItem  item={item} /></li>
          ))}
      </ul>
    </div>
  );
};
