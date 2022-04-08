import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import style from './Banner1.module.css';

const ContainerWrapper=styled.div`

&:hover{
  cursor: pointer;
} 
display: none;
@media all and (max-width:1110px){
  // display: none;
  width: 78vw;
  height: fit-content;
  background: linear-gradient(105.21deg,#3743ab 2.85%,#141b56 99.41%);
  border-radius: 32px;
  display:flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 7%;
  position: relative;
}

`;
const LeftPart=styled.div`
color: white;
`;
const RightPart=styled.div`
color: white;
`;
export const Banner1 = () => {
  const navigate=useNavigate();
  return (  
    <ContainerWrapper onClick={()=>{navigate("/care")}}>
      <LeftPart>
      <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_practo_care.png" alt="" className={style.img1}/>
      <div className={style.text2}>
      Free Consultation
      </div>
      <div className={style.text1}>
      at clinic with Practo Care Surgeon
      </div>
      <button className={style.know_more}>Know more</button>
      </LeftPart>
      <RightPart>
      <img src="https://www.practostatic.com/practo-care/dravid_sm_110122.png" alt="" className={style.img2}/>
      </RightPart>
    </ContainerWrapper>
  )
}