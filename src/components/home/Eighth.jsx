import styles from "./home.module.css";
import photo from "../../assets/IMG_0709.JPG";

const Eighth = () => {
  return (
    <div className={styles.eight}>
      <div className={`${styles.eight_content} container sections-padding`}>
        <div className={styles.eight_first}>
          <p>Services &  Amenities</p>
         
          <p>
          Our gym offers a comprehensive range of top-notch amenities, designed to elevate your fitness journey to the next level. Explore our premium facilities and enjoy a rewarding workout experience like never before.
          </p>
          <img src={photo} alt="" />
        </div>
        <div className={styles.eight_second}>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              International Equipments
            </h5>
            <p>Elevate your fitness journey with top-notch machines from renowned international brands, innovative technology, and superior quality for an unparalleled workout experience.</p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Group-ex Studio
            </h5>
            <p>
            Experience the power of group workouts, camaraderie, and fun, all in a state-of-the-art studio equipped for an energizing fitness journey.
            </p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
           Client Lounge
            </h5>
            <p>
            elevate your post-workout routine in a comfortable and social setting, designed to enhance your overall well-being.
            </p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
             Steam/Showers Room
            </h5>
            <p>Indulge in the ultimate relaxation and rejuvenation at our Steam & Showers Room,leave feeling revitalized and ready to conquer the day.</p>
          </div>
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
            Personal Training
            </h5>
            <p>Unlock Your Potential with Personalized Training. Our expert trainers design tailored workouts to help you achieve your fitness goals faster.</p>
          </div>
            <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
         Nutrition Counseling 
            </h5>
            <p>Unlock your fitness potential with our expert Nutrition Counseling. Our personalized guidance empowers you to make informed dietary choices, aligning nutrition with your fitness goals for lasting results</p>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eighth;
