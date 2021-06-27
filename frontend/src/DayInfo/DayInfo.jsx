export const DayInfo = ({currentDay}) => {
  console.log(currentDay);
  return (
    <div style={{backgroundColor: 'lavender'}}>
      <p>{currentDay.day}</p>
      <p>{currentDay.min}</p>
      <p>{currentDay.max}</p>
    </div>
  )
}
