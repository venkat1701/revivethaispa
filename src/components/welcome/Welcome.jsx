import React, {useEffect} from 'react'
import './welcome.css';
import WelcomeCard from './welcomecard/WelcomeCard';
import {Heading} from '../../components';
import {gap, logo, spa1, spa2, spa3, comingsoon} from '../../assets';
import AOS from "aos";
import "aos/dist/aos.css";
const Welcome = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);
  return (
        <div className="spa__welcome" id="about" data-aos="fade-right">
            <Heading subtitle="WELCOME" title="Reach To Us Here"/>
            <div className="spa__welcome_subheadings">
                <p>We at Revive Thai Spa provide various kind of thai spa massages to our clients. Tell us how you would like to spend your time and prepare yourself for relaxation.</p>
            </div>
            <div className="spa__welcome_information">
                <WelcomeCard 
                    image = {spa1}
                    heading = "Aston Road"
                    paragraph = "5A, Aston Rd, near Aston Hotel, Jadubabur Bazar, Bhowanipore, Kolkata, West Bengal 700020"
                    data-aos="fade-right"
                />
                
                <WelcomeCard 
                    image = {spa2}
                    heading = "Elgin Road"
                    paragraph = "3RD FLOOR, 6B ELGIN ROAD, 20, near LENSKART SHOWROOM, Bhowanipore, Kolkata, West Bengal 700020"
                    data-aos="fade-right"
                />

                <WelcomeCard 
                    image = {comingsoon}
                    heading = "Hungerford Street"
                    paragraph = "Coming Soon"
                    data-aos="fade-right"
                />

                <WelcomeCard 
                    image = {comingsoon}
                    heading = "Sarat Bose Road"
                    paragraph = "Coming Soon"
                    data-aos="fade-right"
                />
            </div>
        </div>
    )
}

export default Welcome