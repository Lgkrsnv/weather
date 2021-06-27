// import styled from "styled-components";


export const WeatherItem = ({item}) => {

  return (
    <div>
        <p>{item.day}</p>
        <p>{item.min}</p>
        <p>{item.max}</p>
    </div>
  )
}
