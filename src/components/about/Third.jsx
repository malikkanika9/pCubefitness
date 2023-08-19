import styles from "./about.module.css";
import photo2 from "../../assets/about5.png";

const Third = () => {
  return (
    <div
      className={`${styles.third} container sections-padding`}
      data-aos="fade-right">
      <div className={styles.third_one}>
        <div className={styles.one_content}>
          <span className="paragraph">Welcome</span>
          
          <p>
          P Cube Fitness is a concept that emphasizes the importance of three key components of fitness: Physical, Physiological, and Psychological. It aims to create awareness about the need to focus on all three aspects in order to achieve overall fitness and well-being.
          </p>
        </div>
        <div className={styles.one_content2}>
{/*           
          <p>
          P Cube Fitness emphasizes the importance of balancing all three components. It recognizes that having a good mindset, healthy internal body (organs), and the ability to perform physical activities are all essential for true fitness. It suggests that simply focusing on physical appearance or physical fitness alone is not enough. Instead, a holistic approach that considers physical, physiological, and psychological well-being is necessary for achieving optimal fitness and overall wellness.
          </p> */}
          <img src={photo2} alt="" />
        </div>
      </div>
      <div className={styles.third_two}>
        <div className={styles.two_content}>
          <h3>Our Mission</h3>
          <p>
          Our mission is to empower individuals to transform their lives through fitness. We provide the guidance, support, and resources necessary to help you achieve your health and wellness goals.
          </p> 
        </div>
        <div className={styles.two_content2}>
          <h3>Our Values</h3>
          <p>
          We are dedicated to promoting a healthy and balanced lifestyle among our members. Our goal is to inspire and support you in achieving your fitness objectives and overall well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
