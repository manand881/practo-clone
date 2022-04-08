import React, { useState } from 'react'
import styled from 'styled-components'
import {v4} from 'uuid';
const HeadingDiv = styled.div`
 background-color: #f8f8fb;
 display: flex;
 justify-content: space-between;
 border: none;
 border-radius: 5px;
 border-bottom-left-radius: ${({show})=>show?"0":"5px"};
 border-bottom-right-radius: ${({show})=>show?"0":"5px"};
 padding: 15px;
 font-size: 17px;
 font-weight: 600;
 width: 90vw;
 margin: 3px  auto 0 auto;
 p{
     margin-left: 20px;
    }
span{
        margin-right: 30px;
        transform: ${({show})=>show?"rotate(135deg)":"rotate(0)"};
        transition: ${({show})=>show?"transform .5s":"transform .5s"};
    }
&:hover{
    cursor: pointer;
}
`
const SubHeadingDiv = styled.div`
    display: ${({show})=>show?"flex":"none"}};
    flex-direction: column;
    gap: 20px;
    background-color: #f8f8fb;
    border: none;
    padding-left: 50px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 90vw;
    margin: auto;
    margin-bottom: 5px;
    font-weight: 400;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`
export const ResponsiveFooter = ({mainTitle,subHeading}) => {
    const [show,setShow] = useState(false);
  return (
    <>
        <HeadingDiv onClick={()=>{setShow(!show)}} show={show}>
            <p>{mainTitle}</p>
            <span>+</span>
        </HeadingDiv>
        <SubHeadingDiv show={show}>
            {subHeading.map((item)=>{
                return  <div key={v4()}>{item}</div>
            })}
        </SubHeadingDiv>
    </>
    
  )
}
