/* Second.js */
import React from "react";
import styles from "./trainers.module.css";

import photo1 from "../../assets/PHOTO-2023-07-22-14-10-19 (1).jpg";
import photo2 from "../../assets/IMG_2268 (2).JPG";
import photo3 from "../../assets/IMG_0708 (2).JPG";
import photo4 from "../../assets/IMG_1574.JPG";


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
                <h4>pCube Fitness Rohtak </h4>
              </div>
              <h5>13L, Model Town,Rohtak 124001 </h5>
            </div>
          </div>
          <div data-aos="fade-right">
            <img src={photo2} alt="trainer" />
            <div className={styles.info}>
              <div>
                <h4>pCube Fitness Delhi</h4>
              </div>
              <h5>F14/51, Model Town, New Delhi 110009</h5>
            </div>
          </div>
          <br />
          <div data-aos="fade-right">
            <img src={photo1} alt="trainer" />
            <div className={styles.info}>
              <div>
                <h4>Turf by pCube</h4>
              </div>
              <h5>Gk-2 M Block, New Delhi 110048 </h5>
            </div>
          </div>
          <div data-aos="fade-right">
            <img src={photo4} alt="trainer" />
            <div className={styles.info}>
              <div>
                <h4>pCube Pitampura</h4>
              </div>
              <h5>B162, Lok Vihar, New Delhi 110034</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Other content here */}
    </div>
  );
};

export default Second;
