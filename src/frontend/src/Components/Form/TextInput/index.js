import React,{useState} from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width:80%;
    margin-top:10px;
    margin-bottom:10px;
    padding: 12px 16px;
    border-radius:8px;
    border:none;
    box-shadow:${({state})=>state? "0 0 0 2px red": "0 0 0 1px rgb(0 0 0 / 40%)"};
    font-size: 20px;
    outline:none;
    
    
`

const DisplayText = styled.div`
    position:absolute;
    top:${({state})=>state ? "-5px" : "19px"};
    left:40px;
    font-size:${({state})=>state ? "15px" : "20px"};
    background-color:white;
    padding:5px;
    transition:all 0.25s;
    
`

const Label = styled.label`
    
    display:flex;
    justify-content:center;
    position:relative;
    cursor:text;

`



const TextInput = ({handleChange,value,name,type,errors})=>{
    const [clicked,setClicked] = useState(false);
    return(
        <Label htmlFor={name} onClick={()=>setClicked(true)} >
            <DisplayText state={clicked}>{name}</DisplayText>
            <Input type={type} name={name} id={name} value={value} state={errors} onChange={(e)=>{handleChange(e)}}/>
        </Label>
    )
}



export default TextInput