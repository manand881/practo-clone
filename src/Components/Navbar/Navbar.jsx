import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import style from './Navbar.module.css';
import { useDispatch } from 'react-redux';
import { isLogin } from '../../Redux/Login/action';
const NavWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    border-bottom: 1px solid #f0f0f5;
    height: 74px;
    @media all and (max-width: 1110px)
    {
        width: 110vw;
    }
`
const WrapperLink = styled(Link)`
text-decoration: none;
color: black;
margin: 10px;
font-size: 1rem;
line-height: 20px;
font-weight: 500;
letter-spacing: -.3px;
`
const ExtraLink = styled(Link)`
text-decoration: none;
color: black;
margin: 10px;
font-size: 0.9rem;
line-height: 20px;
font-weight: 400;
letter-spacing: -.3px;
    @media all  and (max-width: 1240px){
        display:${({label})=>label==="provider"?"none":"inline-block"};
    }
    @media all  and (max-width: 1110px){
        display:${({label})=>label==="provider"?"inline-block":""};
    }
`
const LoginDiv = styled.button`
    display:${({isLoginStatus})=>isLoginStatus?"none":"inline-block"};
    background-color: white;
    font-size: 13px;
    line-height: 13px;
    color: #787887;
    border-radius: 4px;
    border: 1px solid #d3d3d3;
    padding: 8px 10px;
    margin-right: 5px;

    &:hover{
    border: 1px solid #14bef0;
    color: #14bef0;
    cursor: pointer;
    }
`
const LoggedInWrapper=styled.div`
color: black;
display:${({isLoginStatus})=>isLoginStatus?"inline-block":"none"};
cursor: pointer;
margin: 10px;
font-size: 0.9rem;
line-height: 20px;
font-weight: 400;
div{
    display: none;
}
&:hover{
    span{
        display: none;
    }
    div{
        display: inline-block;
    }
`
const Burger=styled.div`
    display: none;

    @media all  and (max-width: 1110px){
        display: flex;
        flex-direction: column;
        gap: 3px;
        hr{
            width: 20px;
            background-color: black;
            border: 1px solid #787887;
            margin-right: 5vw;
        }
        &:hover{
            cursor:pointer;
            gap: 5px;
            transition: gap .3s; 
        }
    }
`

export const Navbar = () => {
    const navigate = useNavigate();
    const {isLoginStatus,loggedinuser} = useSelector((state)=>state.loginReducer);
    const dispatch=useDispatch();
    const [show,setShow]=useState(false);
  return (
      <NavWrapper>     
          <Burger>
              <hr />
              <hr />
              <hr />
          </Burger>
            <div className={style.nav_logo}>
                <img className={style.logo} src="https://www.practo.com/nav/9.5.12/consumer/images/practo.svg" alt="" onClick={()=>{navigate("/")}}/>
            </div>
            <div className={style.nav_routes}>
                <WrapperLink to="/doctors">Find Doctors</WrapperLink>
                <WrapperLink to="/consult">Video Consult</WrapperLink>
                <WrapperLink to="/medicines">Medicines</WrapperLink>
                <WrapperLink to="/tests">Lab Tests</WrapperLink>
                <WrapperLink to="/care">Surgeries</WrapperLink>
            </div>
            <div className={style.nav_extra}>
                <ExtraLink to="/medicines"><span>NEW</span> For Corporates</ExtraLink>
                <ExtraLink to="/tests" label="provider">For Providers ↓</ExtraLink>
                <ExtraLink to="/care">Security&Help ↓</ExtraLink>
            </div>
            <LoginDiv onClick={()=>{navigate("/account/login")}} isLoginStatus={isLoginStatus}>
                <span>Login / Signup</span>
            </LoginDiv>
            <LoggedInWrapper isLoginStatus={isLoginStatus}>
                <span>{loggedinuser}</span>
                <div onClick={()=>{navigate("/");dispatch(isLogin(false))}}>Logout</div>
            </LoggedInWrapper>
    </NavWrapper>
  )
}
