import React, {useEffect} from 'react'
import './testimonialbox.css';
import AOS from "aos";
import "aos/dist/aos.css";
const TestimonialBox = ({review, image, name, designation}) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="spa__testimonialbox" data-aos="flip-up">
        <div className="spa__testimonialbox_review">
            <h1>❝</h1>
            <p>{review}</p>
        </div>
        <div className="spa__testimonialbox_author">
            <img src={image} />
            <div className="spa__testimonialbox_author-name">
                <h4>{name}</h4>
                <p>{designation}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialBox