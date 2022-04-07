import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import style from './Container1Search.module.css';
const CompleteContainer=styled.div`
display: flex;
justify-content: space-between;
width: 80vw;
@media all  and (max-width: 1110px){
    width: 100vw;
    justify-content: start;
} 
`
const LeftContainer=styled.div`
display: flex;
@media all  and (max-width: 500px){
  flex-direction: column;
  gap: 10px;
} 
`

const Wrapper1 = styled.div`
border: 1px solid #d3d3d3;
// background-color: blue;
display: flex;
// width: 100px;
padding-left: 15px;
@media all  and (max-width: 1110px){
  input[type="text"]
  {
    width: 22vw;
    
  }
  padding-left: 0px;
} 
@media all  and (max-width: 500px){
  input[type="text"]
  {
    width: 69vw;
    border-radius: 10%;
  }
  padding-left: 0px;
}
`
const Wrapper2 = styled.div`
border: 1px solid #d3d3d3;
display: flex;
width: fit-content;
padding-left: 15px;
@media all  and (max-width: 1110px){
  input[type="text"]
  {
    width: 50vw;
  }
  padding-left: 0px;
} 
@media all  and (max-width: 500px){
  input[type="text"]
  {
    width: 69vw;
  }
  padding-left: 0px;
} 
`
const Wrapper3 = styled.img`
height: 40px;
&:hover{
  cursor: pointer;
}
@media all  and (max-width: 1110px){
  display: none;
} 
`
export const Container1Search = () => {
  const navigate=useNavigate();
  return (
    <CompleteContainer>
    <LeftContainer>
    <Wrapper1>
      <img src="./locationIcon.png" alt=""  className={style.locationlogo}/>
      <input type="text" className={style.locationInput} placeholder="Search Location"/>
    </Wrapper1>
    <Wrapper2>
      <img src="./searchIcon.png" alt=""  className={style.locationlogo}/>
      <input type="text" className={style.searchInput} placeholder="Search doctors, clinics, hospitals, etc."/>
    </Wrapper2>
    </LeftContainer>
    <Wrapper3 src="https://www.practostatic.com/subscriptions/images/plus-tag.png" alt="" onClick={()=>{navigate("/plus")}}/>
    </CompleteContainer>
  )
}
