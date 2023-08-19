import styles from "./contact.module.css";

const Third = () => {
  return (
    <div className={`${styles.third}  sections-padding`} data-aos="zoom-in">
      <div className={`${styles.third_content} container`}>
        <div>
          <i className="fa-solid fa-phone"></i>
          <h4>PHONE</h4>
         
          <p>+91-8814098060</p>
        </div>
        <div>
          <i className="fa-solid fa-envelope"></i>
          <h4>EMAIL</h4>
         
          <p>pcubefit@gmail.com</p>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <h4>LOCATION</h4>
          
          <p>Delhi Studio <br /> F14/51, Model Town, New Delhi 110009</p>
          <p>Rohtak Studio <br /> 13L, Model Town, Rohtak 124001</p>
        </div>
      </div>
    </div>
  );
};

export default Third;
