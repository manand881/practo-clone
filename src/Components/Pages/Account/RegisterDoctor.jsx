import React from 'react';
import { LoginNav,StyledLink,StyledSpan,BottomContainer,LeftBox,RightBox } from './Login';
import { Form } from './Form';
export const RegisterDoctor = () => {
  return (
    <>
    <LoginNav>
      <StyledLink to="/account/login">Login</StyledLink>
      <StyledSpan>Register</StyledSpan>
    </LoginNav>
    <BottomContainer>
      <LeftBox>
        <img src="https://accounts.practo.com/static/images/illustration.png" alt="" />
      </LeftBox>
      <RightBox>
        <Form formtype={"register_doctor"}/>
      </RightBox>
      </BottomContainer>
    </>
  )
}
