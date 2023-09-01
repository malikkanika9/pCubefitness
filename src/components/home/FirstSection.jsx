import { useNavigate } from "react-router";
import styles from "./home.module.css";
import homme from "../../assets/1440x972-Website-hd.jpg"
import ReactPlayer from "react-player"
const FirstSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.first_section} data-aos="zoom-out-down">
   
       
        <img className="main-image" src={homme} style={{maxWidth:'100%',minWidth: '-webkit-fill-available'}}  alt="photo" />
     

        <div className={styles.button_container}>
        
          {/* <div>
            <button onClick={() => navigate("/about")}>About Me</button>
            <button onClick={() => navigate("/contact")}>Contact</button>
          </div> */}
        </div>
      </div>
    
  );
};

export default FirstSection;


