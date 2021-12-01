import React from 'react';
import styled from 'styled-components';

import TextInput from '../Form/TextInput';
import Form from '../Form'

import useForm from '../../Hooks/useForms';
import validateLogin from '../../Util/validateLogin';


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
    
const {state,handleChange,handleSubmit,errors} = useForm(validateLogin)

    return(
        <Form handleSubmit={(e)=>handleSubmit(e)}>
            <Title>Login in to your account</Title>
            <TextInput handleChange={handleChange} errors={errors.Username} name={"Username"} value={state.Username} type={"text"}/>
            <TextInput handleChange={handleChange} errors={errors.Password} name={"Password"} value={state.Password} type={"password"}/>
            <Button type="submit" value="Login">Login</Button>
        </Form>
    )
}


export default Login