import React, {useEffect} from 'react'
import './home.css';
import {Navbar} from '../../components'
import { Link as ScrollLink} from 'react-scroll';
import AOS from "aos";
import { Link } from 'react-router-dom';
import { whatsapp } from '../../assets';
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="spa__home" id="home" >
        <Navbar/>
        <div className="spa__home_box" data-aos="fade-up">
            <h4>REVIVE THAI SPA</h4>
            <h2>Sessions of Relaxation</h2>
            <p>Make an appointment in just a click!</p>
            <div className="button">
                <ScrollLink to="contacts"><p>BOOK NOW</p></ScrollLink>
            </div>
        </div> 

        <div className="spa__home_whatsapp">
          <Link to=""><img src={whatsapp}/></Link>
        </div>
    </div>
  )
}

export default Home