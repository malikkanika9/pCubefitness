import styles from "./contact.module.css";

const Third = () => {
  return (
    <div className={`${styles.third}  sections-padding zoom-out-down`} data-aos="zoom-in">
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
          <p>Rohtak, Haryana, India <br /></p>
          <p>New Delhi, Delhi, India  <br /> </p>
          


        
         
        </div>
      </div>
    </div>
  );
};

export default Third;
