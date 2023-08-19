import { useNavigate } from "react-router";
import styles from "./home.module.css";
import homme from "../../assets/c1e23fc3-01ce-44c2-98e3-7465cb8194b1.jpg"
import ReactPlayer from "react-player"
const FirstSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.first_section} data-aos="zoom-out-down">
      <div >
       <img src={homme} style={{ width: "100vw", height: "90vh", objectFit: "cover" }}  alt="home" />
          {/* <source src="" type="video/mp4" /> */}
      

        <div className={styles.button_container}>
        
          <div>
            <button onClick={() => navigate("/about")}>About Me</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;


