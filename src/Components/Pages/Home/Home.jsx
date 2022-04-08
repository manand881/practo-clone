import React from 'react'
import style from './Home.module.css';
import {UpperPart} from './UpperPart/UpperPart.jsx';
// import {MiddlePart} from './MiddlePart/MiddlePart.jsx';
import {Footer} from '../../Footer/Footer';
export const Home = () => {
  return (
    <>
    <div className={style.container}>
      <UpperPart/>
      {/* <MiddlePart/> */}
    </div>
    <Footer/>
    </>
  )
}
