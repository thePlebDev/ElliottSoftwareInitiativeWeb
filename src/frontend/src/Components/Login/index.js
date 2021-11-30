import React,{useState} from 'react';
import styled from 'styled-components';

const Form = styled.form`
    max-width:500px;
    margin:0 auto;
    margin-top:100px;
    display:flex;
    flex-direction:column;
    @media only screen and (min-width: 800px) {
        border-radius: 12px;
        box-shadow: 0 2px 4px rgb(0 0 0 / 7%), 0 4px 5px rgb(0 0 0 / 6%), 0 1px 10px rgb(0 0 0 / 10%);
    }
    
`

const Label = styled.label`
    
    display:flex;
    justify-content:center;
    position:relative;
    cursor:text;

`
const Input = styled.input`
    width:80%;
    margin-top:10px;
    margin-bottom:10px;
    padding: 12px 16px;
    border-radius:8px;
    border:none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 40%);
    font-size: 20px;
    
    
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

const Title = styled.div`
margin-bottom:20px;
font-weight: 700;
font-size:1.5rem;
text-align:center;
margin-top:15px;
letter-spacing:0.5px;

`

const Button = styled.button`
background: #00a862;
    border-radius: 8px;
    box-shadow: 0 0 6px rgb(0 0 0 / 24%), 0 8px 12px rgb(0 0 0 / 14%);
    font-weight: 700;
    line-height: 1.2;
    overflow: hidden;
    padding: 10px 20px;
    color:white;
    font-size:25px;
    width:40%;
    margin-bottom:20px;
    margin-top:20px;
    cursor:pointer;

    border:none;
    align-self:center;
    transition:all 0.25s;

    &:hover{
        transform:scale(1.1);
    }


`






const Login = ()=>{
    const [clicked,setClicked] = useState(false);
    return(
        <Form>
            <Title>Login in to your account</Title>
            <Label for="username" onClick={()=>setClicked(true)}>
                <DisplayText state={clicked}>Username</DisplayText>
                <Input type="text" name="username" id="username"/>
            </Label>
            <Label for="password" onClick={()=>setClicked(true)}>
                <DisplayText state={clicked}>Password</DisplayText>
                <Input type="password" name="password" id="password"/>
            </Label>
            <Button type="submit" value="Login">Login</Button>
        </Form>
    )
}


export default Login