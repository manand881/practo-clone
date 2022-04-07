import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Form } from './Form'
export const LoginNav=styled.div`
    color:#14bef0;
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    width: 60vw;
    margin: auto;
    border-bottom: 2px solid #f0f0f5;
    height: 74px;
    `
    export const StyledLink=styled(Link)`
    text-decoration: none;
    color: black;
    &:hover{
        text-decoration: underline;
    }
    `
    export const StyledSpan = styled.span`
    border-bottom: 2px solid #14bef0;
    padding-top: 32px;
    padding-bottom: 20px;
    @media all and (max-width: 500px)
    {
      padding-top: 36px;
    }
`

export const BottomContainer=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
// background-color: yellow;
width: 80vw;
margin: auto;
`
export const LeftBox=styled.div`
align-items: center;

img{
  width: 394px;
}
@media all  and (max-width: 1110px){
  display:none;
}
`
export const RightBox=styled.div`
width: fit-content;
// background-color:red;
margin-top:70px;
` 
export const Login = () => {
  return (
      <>
        <LoginNav>
            <StyledSpan>Login</StyledSpan>
            <StyledLink to="/account/register">Register</StyledLink>
        </LoginNav>
        <>
      <BottomContainer>
      <LeftBox>
        <img src="https://accounts.practo.com/static/images/illustration.png" alt="" />
      </LeftBox>
      <RightBox>
        <Form  formtype="login"/>
      </RightBox>
      </BottomContainer>
    </>
      </>
  )
}