import React, {useEffect} from 'react'
import './gallery.css';
import {pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10} from '../../assets';
import {Heading} from '../../components';
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
    useEffect(() => {
        AOS.init({
          disable: "phone",
          duration: 1000,
          easing: "ease-out-cubic",
        });
      }, []);
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10];  
  return (
    <div className="spa__gallery" id="gallery" data-aos="fade-right">
        <Heading subtitle="LOOKS" title="Gallery"/>
        <div className="spa__gallery-pics">
            {
                images.map((image, index) => {
                    return (
                        <img src={image} data-aos="fade-up"/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Gallery