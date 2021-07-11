import {useState} from 'react'
import styled from "styled-components";

const Form = styled.form`
  margin-top: 30px;
`;

const Input = styled.input`
background: #E8DAEF;
color: #5B2C6F;
margin-right: 20px;
border-radius: 4px;
min-height: 30px;
&:focus {
  background-color: #F7DC6F;
}
&:active {
  background-color: #F7DC6F;
}
`;
const Select = styled.select`
background: #E8DAEF;
color: #5B2C6F;
margin-right: 20px;
border-radius: 4px;
min-height: 35px;
min-width: 100px;
&:active {
  background-color: #F7DC6F;
}
`;
const Button = styled.button`
background: #E8DAEF;
color: #5B2C6F;
margin-right: 20px;
border-radius: 4px;
min-height: 35px;
min-width: 100px;
&:hover {
  border-color: purple;
}
&:active {
  background-color: #F7DC6F;
}
`;
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
    <Form  onSubmit={(e) => handleSubmit(e)}>
      <Input type="text" value={input} onChange={(e)=>handleInput(e)}/>
      <Select onChange={(e) => handleSelect(e)}>
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </Select>
      <Button>ACCEPT</Button>
    </Form>
  )
}
