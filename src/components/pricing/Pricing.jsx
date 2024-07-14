import React from 'react'
import './pricing.css';
import { gap } from '../../assets';
import PricingBox from './pricingbox/PricingBox';
import {Heading} from '../../components';
const Pricing = () => {
  return (
    <div className="spa__pricing">
        <Heading 
            subtitle="BEST DEALS"
            title="Our Price Table"
        />
        <div className="spa__pricing_info">
            <PricingBox
                planheader="BASIC PLAN"
                header="Relax & Rejuvenate"
                price="$495"
                elements={["Relaxing Message", "Body Polish", "Signature Facial"]}
            />
            <PricingBox
                planheader="BASIC PLAN"
                header="Relax & Rejuvenate"
                price="$495"
                elements={["Relaxing Message", "Body Polish", "Signature Facial"]}
            />
            <PricingBox
                planheader="BASIC PLAN"
                header="Relax & Rejuvenate"
                price="$495"
                elements={["Relaxing Message", "Body Polish", "Signature Facial"]}
            />
        </div>
    </div>
  )
}

export default Pricing