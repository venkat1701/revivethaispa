import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
import { logo, link } from '../../assets';
import {Link as ScrollLink } from 'react-scroll';
const Footer = () => {
  return (
    <div className="spa__footer">
        <div className="spa__footer_section1">
          <div className="spa__footer_section1-contactus">
              <h2>Book a call</h2>
              <p className='lookforward'>We are looking forward to your call and booking at our centre for a relaxing and calming spa therapy and massage.</p>
              <div className="spa__footer_section1-form">
                <div className="spa__footer_section1-form-namemail">
                    <input type="text" placeholder='Full Name' required/>
                    <input type="text" placeholder="Email Address" required/>
                </div>
                <input type="textarea" placeholder="Leave a message" required/>
                <div className="button">
                  <p>Book a Call</p>
                </div>
              </div>
          </div>
          <div className="spa__footer_section1-links">
            <div className="spa__footer_section1-linksection1">
              <h4>Quick Links</h4>
              <ul>
                <ScrollLink to="about" smooth={true} duration={500}><li>About</li></ScrollLink>
                <ScrollLink to="testimonials" smooth={true} duration={500}><li>Testimonials</li></ScrollLink>
                <ScrollLink to="home" smooth={true} duration={500}><li>Home</li></ScrollLink>
                <ScrollLink to="services" smooth={true} duration={500}><li>Services</li></ScrollLink>
                <ScrollLink to="gallery" smooth={true} duration={500}><li>Gallery</li></ScrollLink>
              </ul>
            </div>
            <div className="spa__footer_section1-linksection2">
              <h4>Get in Touch</h4>
              <ul>
                <li>cocothaispa08@gmail</li>
                <li>7439593057</li>
                <li>Dadra West Nagar, Howrah - 711106</li>
              </ul>
            </div>
            <div className="spa__footer_section1-linksection2">
              <h4 style={{color: "var(--color-highlight)"}}>Vynapse</h4>
              <ul>
                <li>vynapse@gmail.com</li>
                <li>+91 74395 93057</li>
                <li>Reach out to us to get your business noticed online!</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="spa__footer_section2" style={{textAlign: "center"}}>
          <p>Copyright ©️ 2024. Revive Thai Spa All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer