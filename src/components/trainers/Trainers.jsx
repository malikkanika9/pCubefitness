// import styles from "./trainers.module.css";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
// import photo1 from "../../assets/1.jpeg";
// import photo2 from "../../assets/2.jpeg";
// import photo3 from "../../assets/3.jpeg";
// import photo4 from "../../assets/4.jpeg";
// import photo5 from "../../assets/5.jpeg";
// import photo6 from "../../assets/6.jpeg";
// import photo7 from "../../assets/7.jpeg";
// import photo8 from "../../assets/8.jpeg";
// import photo9 from "../../assets/9.jpeg"

// const Seventh = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
//     nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
//   };

//   return (
//     <div className={`${styles.trainers} container sections-padding`}>
//       <div className={styles.trainers_head}>
//         <p className="paragraph">Gallery</p>
//       </div>
//       <div style={{ display: "flex"}}>
//         <div>
//           <img src={photo1} alt="Photo 1" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px", border:"5px solid"  }} />
//         </div>
//         <div>
//           <img src={photo2} alt="Photo 1" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px", border:"5px solid" }} />
//         </div>
//         <div>
//           <img src={photo3} alt="Photo 1" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px",border:"5px solid" }} />
//         </div>
//         <div>
//           <img src={photo4} alt="Photo 2" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px", border:"5px solid" }} />
//         </div>
//         <div>
//           <img src={photo9} alt="Photo 2" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px",border:"5px solid"}} />
//         </div>
//       </div>
//       <div style={{display:"flex"}}>
//         <div>
//           <img src={photo5} alt="Photo 3" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px", border:"5px solid" }} />
//         </div>
//          <div>
//           <img src={photo7} alt="Photo 3" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px", border:"5px solid"}} />
//         </div>
//          <div>
//           <img src={photo6} alt="Photo 3" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px" , border:"5px solid"}} />
//         </div>
        
//          <div>
//           <img src={photo8} alt="Photo 3" className="img-fluid" style={{ maxWidth: "100%", maxHeight: "400px", border:"5px solid" }} />
//         </div>
//    </div>
//     </div>
//   );
// };

// export default Seventh;

// import React from "react";
// import HoverCarousel from "hover-carousel";
// import styles from "./trainers.module.css";
// import photo1 from "../../assets/1.jpeg";
// import photo2 from "../../assets/2.jpeg";
// import photo3 from "../../assets/3.jpeg";
// import photo4 from "../../assets/4.jpeg";
// import photo5 from "../../assets/5.jpeg";
// import photo6 from "../../assets/6.jpeg";
// import photo7 from "../../assets/7.jpeg";
// import photo8 from "../../assets/8.jpeg";
// import photo9 from "../../assets/9.jpeg"
// const Seventh = () => {
//   const images = [
//     photo1,
//     photo2 ,
//     photo3 ,
//        photo4,
//         photo5,
//          photo6,
//           photo7,
//  photo8,
//            photo9,
    
//   ];

//   return (
//      <div className={`${styles.trainers} container sections-padding`}>
//       <div className={styles.trainers_head}>
//         <p className="paragraph">Gallery</p>
//        </div>
//        <div style={{ display: "flex"}}>
//     <div>
//       <HoverCarousel images={images}  />
//         </div>
//       </div>
//       </div>
//   );
// };

// export default Seventh;
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
