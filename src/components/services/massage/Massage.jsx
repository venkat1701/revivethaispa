import React, {useState, useEffect} from 'react'
import './massage.css';
import AOS from 'aos';
import "aos/dist/aos.css";
const Massage = ({title, paragraph, image, duration, cost}) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="spa__massage" onClick={() => setEnabled(!enabled)} data-aos="fade-up">
        <div className="spa__massage-header">
          <h1>{title}</h1>
          {
            (enabled)? <p>🡤</p> : <p>🡣</p>
          }
        </div>
        {
            (enabled)? <div className="spa__massage-details">
                <img src={image}/>
                <div className="spa__massage-details-info">
                  <p>{paragraph}</p>
                  <p>Duration: {duration}</p>
                  <p>Cost: {cost}</p>
                </div>
            </div> : <p></p>
        }
        
    </div>
  )
}

export default Massage