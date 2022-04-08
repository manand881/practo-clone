import React from 'react'
import styled from 'styled-components'

const ImageDiv = styled.div`
width: 100vw;
height: 100vh;
background-color: #565656;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 50vw;
    height: 50vh;
}
`

export const UnderConstruction = () => {
  return (
    <ImageDiv>
        <img src="./under_construction.png" alt="" />
    </ImageDiv>
  )
}
