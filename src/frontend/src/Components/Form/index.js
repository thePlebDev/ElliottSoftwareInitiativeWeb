import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
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

const Form =({handleSubmit,children})=>{
    return(
        <FormContainer onSubmit={(e)=>handleSubmit(e)}>
            {children}
        </FormContainer>
    )
    

}


export default Form;