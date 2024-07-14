import React from 'react'
import './heading.css';
import { gap } from '../../assets';
const Heading = ({subtitle, title}) => {
  return (
    <div className="spa__heading">
        <p>{subtitle}</p>
        <h1>{title}</h1>
        <img src={gap}/>
    </div>
  )
}

export default Heading