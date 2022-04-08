import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import style from './Container3Box.module.css';
const Boxes=styled.div`
width: fit-content;
margin: 15px;
@media all and (max-width: 830px)
{
  margin: 15%;
}
@media all and (max-width: 575px)
{
  margin: 0;
}
`
const BoxWrapper=styled.div`
background-color: ${({color})=>color};
width: 200px;
height: 140px;
border-radius: 21px 21px 0 0;
cursor: pointer;
display: flex;
justify-content: center;
@media all and (max-width: 830px)
{
  width: ${({boxNo})=>boxNo==="c"||boxNo==="d"||boxNo==="e"?"16vw":"30vw"};
  height: ${({boxNo})=>boxNo==="c"||boxNo==="d"||boxNo==="e"?"15vw":"30vw"};
}
`
const TextWrapper=styled.div`
background-color: white;
border-radius:  0 0 21px 21px;
padding: 30px 20px;
cursor: pointer;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 19px 0px;
margin-bottom: 20px;
width: 200px;
height: 150px;
h3{
  margin-bottom: 8px;
}
span{
  color: grey;
}
@media all and (max-width: 830px)
{
  border-radius:  0 0 10px 10px;
  width: ${({boxNo})=>boxNo==="c"||boxNo==="d"||boxNo==="e"?"16vw":"30vw"};
  height: ${({boxNo})=>boxNo==="c"||boxNo==="d"||boxNo==="e"?"15vw":"20vw"};
  padding: 5px;
  font-size: .7rem;
  h3{
    margin-bottom: 4px;
  }
}
@media all and (max-width: 575px)
{
padding: 5px;
font-size: 0.5rem;
}
@media all and (max-width: 376px)
{
padding: 2px;
font-size: 0.35rem;
}
`
export const Container3Box = ({url,heading,desc,color,link,boxNo}) => {
    const navigate=useNavigate();
  return (
      <Boxes onClick={()=>{navigate(`/${link}`)}}>
        <BoxWrapper color={color} boxNo={boxNo}>
            <img src={url} alt="" className={style.img}/>
        </BoxWrapper>
        <TextWrapper boxNo={boxNo}>
                <h3>{heading}</h3>
                <span>{desc}</span>
        </TextWrapper>
      </Boxes>
  )
}
