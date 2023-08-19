import styles from "./about.module.css";
import photo1 from "../../assets/IMG_2268.JPG";
import photo2 from "../../assets/IMG_2355.JPG";

const Second = () => {
  return (
    <div className={styles.second} data-aos="fade-right">
      <div>
        <img src={photo1} alt="" />
      </div>
      <div>
        <img src={photo2} alt="" />
      </div>
    </div>
  );
};

export default Second;
