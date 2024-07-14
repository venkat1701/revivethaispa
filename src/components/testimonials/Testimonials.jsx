import React, {useEffect} from 'react'
import './testimonials.css';
import { gap, reviewer1 } from '../../assets';
import TestimonialBox from './testimonialbox/TestimonialBox';
import {Heading} from '../../components';
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="spa__testimonials" id="testimonials" data-aos="fade-left">
        <Heading subtitle="TESTIMONIALS" title="What Our Clients Say About Us"/>
        <div className="spa__testimonials-reviews">
          <TestimonialBox 
            review="Getting a regular lymph drainage massage is one the most important things I can do for my health. I didn’t realize my lymph system had become overburdened until I started taking better care of it. This is one of the most pleasant treatments I've ever received. It's like being touched by angel hands."
            image={reviewer1}
            name="Anuj Agarwal"
            designation="Aroma Therapy"
          />

          <TestimonialBox 
            review="Best place to relax and get a massage!!! No seriously! Like the BEST! My boyfriend and I love this place so much. It has become our favorite spot to come to and we refuse to go anywhere else lol!!"
            image={reviewer1}
            name="Priyanka Raj"
            designation="Swedish Massage"
          />

          <TestimonialBox 
            review="I'll get right down to the nuts and bolts. I found this old city spa an oasis amongst the Philly cityscape to be a welcome stop. As I entered, I was instantly overcome by a sense of calm. I was greeted courteously and professionally. The experience was charming, invigorating and best of all, tranquil"
            image={reviewer1}
            name="Nitu Singh"
            designation="Thai Massage"
          />
        </div>
        <p>and many more have had wonderful experiences</p>
    </div>
  )
}

export default Testimonials