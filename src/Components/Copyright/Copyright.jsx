import React from 'react'
import styled from 'styled-components'

const ImageDiv = styled.div`
background-color: white;
width: 90vw;
margin:auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 30px;
img{
    width: 100px;
    height: 50px;
}
`
const StyledSpan = styled.div`
color: #b8bbd9;
width: 90vw;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
background-color: #f8f8fb;
display: flex;
justify-content: center;
margin: 0 auto;
font-size: 0.7rem;
padding-top: 20px;
padding-bottom: 20px;
`

export const Copyright = () => {
  return (
    <>
        <ImageDiv>
        <img src="https://www.practo.com/nav/9.5.12/consumer/images/practo.svg" alt="" />
        </ImageDiv>
        <StyledSpan>
        <span>Copyright © 2017, Practo. All rights reserved.</span>
        </StyledSpan>
    </>
  )
}
