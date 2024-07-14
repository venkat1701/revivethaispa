import React, {useState, useEffect} from 'react'
import './navbar.css';
import {logo} from '../../assets';
import {Link as ScrollLink} from 'react-scroll';
import Hamburger from 'hamburger-react';
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 945);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  const hammenu = () => {
    return (<div className="hammenu-links">
        <ul className="hammenu-links-ul">
          <ScrollLink to="about" smooth={true} duration={500}><p>About</p></ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}><p>Services</p></ScrollLink>
          <ScrollLink to="gallery" smooth={true} duration={500}><p>Gallery</p></ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}><p>Testimonials</p></ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={500}><p>Contacts</p></ScrollLink>
        </ul>
    </div>)
  };


  useEffect(() => {
    // Update 'isDesktop' state on window resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 850);
    };

  window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div className="spa__navbar">
        <div className="spa__navbar_section1">
            <img src={logo}/>
            <div className="spa__navbar_section1-name">
                <h3>Revive Thai Spa</h3>
                <p>Reviving your inner self</p>
            </div>
        </div>
        <div className="spa__navbar_links">
        
          <ScrollLink to="about" smooth={true} duration={500}><p>About</p></ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}><p>Services</p></ScrollLink>
          <ScrollLink to="gallery" smooth={true} duration={500}><p>Gallery</p></ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}><p>Testimonials</p></ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={500}><p>Contacts</p></ScrollLink>
        </div>

        {isDesktop ? null : (
          <div>
            <Hamburger color="var(--color-white)" toggle={handleClick} size={30} toggled={isOpen} className="ham"/> 
            <div className="bt_navbar_set-hammenu">
              {isOpen ? hammenu() : null}
            </div>
          </div>
        )}
    </div>
  )
}

export default Navbar