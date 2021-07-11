import {useState} from 'react'

export const FindCity = (props) => {
  const [input, setInput] = useState(props.currentCity);
  const [select, setSelect] = useState(3);
  const handleInput = (e) => setInput(e.target.value);
  const handleSelect = (e) => {
    setSelect(e.target.value)
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCurrentCity(input);
    props.setAmountData(Number(select))
  };
  
  return (
    <form  onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={input} onChange={(e)=>handleInput(e)}/>
      <select onChange={(e) => handleSelect(e)}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>
      <button>change city</button>
    </form>
  )
}
