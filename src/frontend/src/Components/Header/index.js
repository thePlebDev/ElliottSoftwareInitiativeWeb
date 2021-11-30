import React from 'react';
import styled from 'styled-components';

import Logo from '../../resources/mainLogo.png'

const HeaderContainer = styled.header`
    
`

const Nav = styled.nav`
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 
    0 2px 2px rgb(0 0 0 / 6%), 
    0 0 2px rgb(0 0 0 / 7%);
    height:100px;
    display:flex;
    flex-direction:row;
    align-items:center;
`

const LogoImage = styled.img`
    height:100px;
    width:100px;
`
const Title = styled.div`
    text-transform:uppercase;
    font-size:2rem;
    color:#00a862;
    font-weight:700;
    letter-spacing:1.5px;


`


const Header = ()=>{
    return(
        <HeaderContainer>
            <Nav>
                <LogoImage src={Logo}/>   
                <Title>Elliott software initiative</Title>
            </Nav>
        </HeaderContainer>
    )
}


export default Header;