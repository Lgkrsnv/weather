import {useState} from 'react'

export const FindCity = (props) => {
  const [input, setInput] = useState(props.currentCity)
  const handleInput = (e) => setInput(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setCurrentCity(input);
    console.log(props.currentCity, 'cur city');
  }
  return (
    <form  onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={input} onChange={(e)=>handleInput(e)}/>
      <button>change city</button>
    </form>
  )
}
