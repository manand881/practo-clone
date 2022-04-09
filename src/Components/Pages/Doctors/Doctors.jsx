import React from 'react'
import style from './Doctors.module.css';
import {Jumbotron} from './Jumbotron/Jumbotron.jsx';

export const Doctors = () => {
  return (
    <div className={style.container}>
      <Jumbotron/>
    </div>
  )
}
