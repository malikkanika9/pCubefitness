import { useNavigate } from "react-router";
import styles from "./about.module.css";

const Four = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.four}>
      <div className={styles.four_image}></div>
      <div className={`${styles.four_content} sections-padding`}>
        <div className={`${styles.values} container`}>
          <div>
          
            <h2>WHY US?</h2>
          </div>
          {/* <button onClick={() => navigate("/contact")}>Book a Class</button> */}
        </div>
        <div className={`${styles.four_boxes} container`}>
          <div data-aos="fade-right">
            <i className="fa-regular fa-newspaper"></i>
            <h3>Certified trainer</h3>
            <p>
          We have Certified Trainers with at least 10+ years of experience.
            </p>
          </div>
          <div data-aos="fade-right">
            <i className="fa-solid fa-apple-whole"></i>
            <h3>Nutrition & diet</h3>
            <p>
            Achieve your fitness goals with personalized nutrition plans from certified experts.
            </p>
          </div>
          <div data-aos="fade-right">
            <i className="fa-solid fa-person"></i>
            <h3>Years of experience</h3>
            <p>
             Trust in our 3+ years of experience to guide you towards your fitness journey.
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.numbers} container`}>
        <div>
          <h3>3+</h3>
          <p>Year of Experience</p>
        </div>
        <div>
          <h3>5000+</h3>
          <p>Happy Clients</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Expert Trainers</p>
        </div>
        <div>
          <h3>25000+</h3>
          <p>Sq. Ft. Workout Space</p>
        </div>
      </div>
    </div>
  );
};

export default Four;
