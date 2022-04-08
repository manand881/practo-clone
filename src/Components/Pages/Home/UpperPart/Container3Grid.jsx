import React from 'react'
import {Container3Box} from './Container3Box';
import styled from 'styled-components';
const url1="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png";
const url2="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png";
const url3="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png";
const url4="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png";
const url5="https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png";
const GridWrapper=styled.div`
margin-top: 50px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
background-color: white;
@media all and (max-width: 830px)
{
  justify-content: space-around;
  gap: 20px;
}
`
export const Container3Grid = () => {
  
  return (
    <GridWrapper>
      <div className="a">
      <Container3Box url={url1} heading="Instant Video Consultantion" desc="Connect within 60secs" color="#AFCFED" link="consult"/>
      </div>
      <div className='b'>
      <Container3Box url={url2} heading="Find Doctors Near You" desc="Confirmed appointments" color="#98CBD6" link="doctors"/>
      </div>
      <div className='c'>
      <Container3Box url={url3} heading="Medicines" desc="Essentials at your doorsteps" color="#CCD0DB" link="medicines" boxNo="c"/>
      </div>
      <div className='d'>
      <Container3Box url={url4} heading="Lab Tests" desc="Sample pickup at your home" color="#AFCFED" link="tests" boxNo="d"/>
      </div>
      <div className='e'>
      <Container3Box url={url5} heading="Surgeries" desc="Safe and trusted surgery centers" color="#D5D8FC" link="care" boxNo="e"/>
      </div>
    </GridWrapper>
  )
}
