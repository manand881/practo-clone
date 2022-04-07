import React from 'react'
import style from './Home.module.css';
import {UpperPart} from './UpperPart/UpperPart.jsx';
export const Home = () => {
  return (
    <div className={style.container}>
      <UpperPart/>
    </div>
  )
}
