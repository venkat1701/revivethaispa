import React, {useEffect} from 'react'
import './services.css';
import {Heading} from '../';
import Massage from './massage/Massage';
import { msg1 } from '../../assets';
import "aos/dist/aos.css";
import AOS from 'aos';
const Services = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="spa__services" id="services" data-aos="fade-up">
        <Heading subtitle="SERVICES" title="Massage Services"/>
        <div className="spa__services-massageservice">
            <Massage title="THAI DRY" paragraph="A traditional dry massage which helps to relax stiffness and stress from the body." image={msg1} duration="60 to 90 mins" cost="2500 to 3000"/>
            <Massage title="AROMA THERAPY" paragraph="A light pressure therpeutic holistic combining the power of essential oils with the best indian and western massage techniques which balances the body fluid and improve skin texture." image={msg1} duration="60 to 90 mins" cost="2800 to 3500"/>
            <Massage title="SWEDISH MASSAGE" paragraph="A medium pressure therapy work on tissue and muscles invigorate senses and increases energy flow." image={msg1} duration="60 to 90 mins" cost="2800 to 3500"/>
            <Massage title="DEEP TISSUE THERAPY" paragraph="A distress deep pressure therapy focuses on the deep layer of the muscles and tissues through slow strokes and deep strong finger pressures relieves the tension from the body." image={msg1} duration="60 to 90 mins" cost="3500 to 4000"/>
            <Massage title="BALINESE" paragraph="A combination of dry and oil massage focuses on stress nodes, relaxes your muscles with Balineses way and gives a positive gush of energy. This massage helps to balance the energy centre to improve energy flow and relieves muscles tension." image={msg1} duration="60 to 90 mins" cost="3000 to 3500"/>
            <Massage title="ROMANTIC INDULGENCE" paragraph="Romantic Indulgence in a luxurious and intimate experience with our Romantic Indulgence package at our Thai spa. Designed for couples, this package features side-by-side massages, soothing aromatherapy, and exclusive access to a private suite. Enjoy a rejuvenating body scrub, a relaxing facial, and unwind together in a private jacuzzi." image={msg1} duration="60 mins" cost="6000"/>
        </div>
    </div>
  )
}

export default Services