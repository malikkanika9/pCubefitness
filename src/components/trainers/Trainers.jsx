
import React from "react";
import HoverCarousel from "hover-carousel";
import styles from "./trainers.module.css";
import photo1 from "../../assets/1.jpeg";
import photo2 from "../../assets/2.jpeg";

import photo4 from "../../assets/4.jpeg";
import photo5 from "../../assets/5.jpeg";
import photo15 from "../../assets/WhatsApp Image 2023-12-10 at 12.25.30 PM.jpeg";
import photo16 from "../../assets/WhatsApp Image 2023-12-11 at 10.23.14 AM (1).jpeg";
import photo17 from "../../assets/WhatsApp Image 2023-12-11 at 10.23.14 AM (2).jpeg";
import photo6 from "../../assets/6.jpeg";

import photo8 from "../../assets/imh.jpg";
import photo9 from "../../assets/9.jpeg";
import photo10 from "../../assets/10.png";
import photo11 from "../../assets/11.png";
import photo12 from "../../assets/12.png";
import photo14 from "../../assets/14.png";

const Seventh = () => {
  const images = [
    photo15,
   
    photo17,
    photo9,
    photo12,
   
    photo16,
    photo10,
     photo11,
    photo4,
    photo5,
    photo6,
    photo14,
    photo8,
  
  ];

  return (
    <div className={`${styles.trainers} container sections-padding`}>
      <div className={styles.trainers_head}>
        <p style={{ fontSize: "35px", textAlign: "left" , fontWeight:"bolder"}}>Gallery</p>
      </div>
      <div className={styles.imageContainer}>
        <HoverCarousel images={images} />
      </div>
    </div>
  );
};

export default Seventh;
