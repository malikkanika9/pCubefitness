import styles from "./home.module.css";

import photo1 from "../../assets/motivation.jpg";
import photo2 from "../../assets/motivation (2).jpg";
import photo3 from "../../assets/Screenshot 2023-08-07 185037.png";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.fourth} container sections-padding`}>
      <div
        className={styles.text}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <span className="paragraph" >About Us</span>
        
        <p>
        At P Cube, we believe in respecting your body because it's the only one you get. Our mission is to empower you to achieve your fitness goals while fostering a positive and supportive environment for your well-being. Together, we'll embark on a journey of self-improvement and celebrate the strength and capabilities of your unique body.
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Motivation</h3>
            <p>
            At P Cube, motivation is at the core of what we do. Our dedicated team of expert trainers is committed to providing constant support, personalized guidance, and a motivating atmosphere to keep you focused and determined.
            </p>
          </div>
          <img src={photo1} alt="Photo one" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Photo two" />
          <div>
            <h3>Inspire</h3>
            <p> At P Cube, we are driven by the power of inspiration.From our passionate trainers to our vibrant community, we strive to create an environment that ignites motivation, fosters growth, and empowers you to reach new heights in your fitness journey.  </p>
          </div>
        </div>
      </div>
      <div
        className={styles.fourth_image_container}
        data-aos="fade-up"
        data-aos-duration="3000">
        <img src={photo3} alt="Man Exercise" />
      
      </div>
    </div>
  );
};

export default FourthSection;
