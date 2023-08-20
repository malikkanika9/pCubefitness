import { useNavigate } from "react-router";
import styles from "./home.module.css";
// import homme from "../../assets/c1e23fc3-01ce-44c2-98e3-7465cb8194b1.jpg"
import ReactPlayer from "react-player"
const FirstSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.first_section} data-aos="zoom-out-down">
      <div >
       <video  style={{ width: "100vw", height: "90vh", objectFit: "cover" }} >
          <source src="https://drive.google.com/file/d/1xi7jLL8L0TOyy-1j1vZVds9HKzg1S5JX/view?usp=drive_link" type="video/mp4" />
      </video>

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


