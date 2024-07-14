import React from 'react'
import './pricingbox.css';
const PricingBox = ({planheader, header, price, elements}) => {
  return (
    <div className="spa__pricingbox">
        <p>{planheader}</p>
        <h3>{header}</h3>
        <h1>{price}</h1>
        <hr></hr>
        <div className="spa__pricingbox-list">
        {          
            elements.map((texts, index) => (
                <li key={index}>{texts}</li>
            ))
        }
        </div>

        <div className="button">
          <p>BUY IT!</p>
        </div>
    </div>
  )
}

export default PricingBox