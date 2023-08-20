
import React from "react";
import HoverCarousel from "hover-carousel";
import styles from "./trainers.module.css";
import photo1 from "../../assets/1.jpeg";
import photo2 from "../../assets/2.jpeg";
import photo3 from "../../assets/3.jpeg";
import photo4 from "../../assets/4.jpeg";
import photo5 from "../../assets/5.jpeg";
import photo6 from "../../assets/6.jpeg";
import photo7 from "../../assets/7.jpeg";
import photo8 from "../../assets/8.jpeg";
import photo9 from "../../assets/9.jpeg";
import photo10 from "../../assets/10.png";
import photo11 from "../../assets/11.png";
import photo12 from "../../assets/12.png";
import photo14 from "../../assets/14.png";

const Seventh = () => {
  const images = [
    photo1,
    photo12,
    photo2,
     photo11,
    photo3,
     photo14,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,  
   
  ];

  return (
    <div className={`${styles.trainers} container sections-padding`}>
      <div className={styles.trainers_head}>
        <p className="paragraph">Gallery</p>
      </div>
      <div className={styles.imageContainer}>
        <HoverCarousel images={images} style={{height:"20vh"}} />
      </div>
    </div>
  );
};

export default Seventh;
