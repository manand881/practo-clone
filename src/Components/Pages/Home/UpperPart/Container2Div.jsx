import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Banner1 } from '../../FixedDiv/Banner1/Banner1';

import style from './Container2Div.module.css';

const ContainerWrapper=styled.div`
background: linear-gradient(105.21deg,#3743ab 2.85%,#141b56 99.41%);
border-radius: 32px;
display:flex;
justify-content: space-between;
margin-top: 40px;
padding: 50px;
position: relative;
&:hover{
  cursor: pointer;
}
@media all  and (max-width: 1110px){
  display: none;
}   
`;
const LeftPart=styled.div`
color: white;
`;
const RightPart=styled.div`
color: white;
`;
export const Container2Div = () => {
  const navigate=useNavigate();
  return (  
    <>
    <ContainerWrapper onClick={()=>{navigate("/care")}}>
      <LeftPart>
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_practo_care.png" alt="" className={style.img1}/>
      <div className={style.text1}>
      Choose the experts in end to end surgical care.
      </div>
      <div className={style.text2}>
      You are in safe hands
      </div>
      <button className={style.know_more}>Know more</button>
      </LeftPart>
      <RightPart>
      <img src="https://www.practostatic.com/consumer-home/practo-care/1631634827/dweb_hero_banner.png" alt="" className={style.img2}/>
      </RightPart>
    </ContainerWrapper>
    <Banner1/>
    </>
  )
}
