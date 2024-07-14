import React, {useEffect} from 'react'
import './welcomecard.css';
import AOS from "aos";
import "aos/dist/aos.css";
const WelcomeCard = ({image, heading, paragraph}) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="spa__welcomecard" data-aos="fade-right">
        <img src={image}/>
        <h3>{heading}</h3>
        <p>{paragraph}</p>
    </div>
  )
}

export default WelcomeCard