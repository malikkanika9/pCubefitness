/* Second.js */
import React from "react";
import styles from "./trainers.module.css";

import photo1 from "../../assets/PHOTO-2023-07-22-14-10-19 (1).jpg";
import photo2 from "../../assets/IMG_2268 (2).JPG";
import photo3 from "../../assets/IMG_0708 (2).JPG";
import photo4 from "../../assets/IMG_9263.JPG"


const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      {/* Other content here */}
      <div className="trainers_boxes-container">
        <div className={styles.trainers_boxes}>
          <div data-aos="fade-right">
            <img src={photo3} alt="trainer" />
            <div className={styles.info}>
              <div>
                <h4>Pcube Fitness Rohtak </h4>
              </div>
              <h5>13L, Model Town,Rohtak 124001 <br /> <br />Ph: 8950892125 </h5>
            </div>
          </div>
          <div data-aos="fade-right">
            <img src={photo2} alt="trainer" />
            <div className={styles.info}>
              <div>
                <h4>Pcube Fitness Model Town </h4>
              </div>
              <h5>F14/51, Model Town, New Delhi 110009 <br /> <br />Ph: 8059053050</h5>
            </div>
          </div>
          <br />
          <div data-aos="fade-right">
            <img src={photo1} alt="trainer" />
            <div className={styles.info}>
              <div>
                <h4>Turf by Pcube</h4>
              </div>
              <h5>Gk-2 M Block, New Delhi 110048<br /><br /> Ph: 8199981009 </h5>
            </div>
          </div>
          <div data-aos="fade-right">
            <img src={photo4} alt="trainer" />
            <div className={styles.info}>
              <div>
                <h4>Pcube Pitampura</h4>
              </div>
              <h5>B162, Lok Vihar, New Delhi 110034<br /> <br /> Ph: 8014880880</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Other content here */}
    </div>
  );
};

export default Second;
