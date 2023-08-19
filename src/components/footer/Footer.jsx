// import styles from "./footer.module.css";
// import logoIcon from "../../assets/logo white.png";
// import { useNavigate } from "react-router";

// const Footer = () => {
//   const navigate = useNavigate();

//   return (
// //     <div className={styles.footer}>
// //       <div className={styles.footer_image}>
// //         <h2>
// //           Follow us on
// //           <a
// //             href="https://www.instagram.com/p_cube_india/"
// //             target="_blank">
// //            Instagram
// //           </a>
// //         </h2>
// //       </div>
// //       <div className={`${styles.footer_content} container `}>
// //         <div>
// //           <div className={styles.logo_holder}>
// //             <img src={logoIcon} alt="Logo Icon" />

// //             <h3>P Cube Fitness</h3>
// //           </div>
// //           <p>
// //           Be a part of India’s most Luxurious Gym chain ‘ P CUBE FITNESS’
// // Franchise now!
// //           </p>
// //           <div className={styles.info}>
// //             <span>Call :</span>
// //             <p>+91-8814098060</p>
// //             <span>Email :</span>
// //             <p>pcubefit@gmail.com</p>
// //           </div>
// //         </div>
// //         <div>
// //           <ul>
// //             <li>Utility Pages</li>
// //             <li onClick={() => navigate("/")}>Home</li>
// //                        <li onClick={() => navigate("/about")}>About</li>
          
// //             <li onClick={() => navigate("/contact")}>Contact</li>
// //           </ul>
// //         </div>
// //         <div>
// //           <h3>Newsletter</h3>
// //           <input type="text" placeholder="Enter Your Email" />
// //           <button>Subscribe</button>
// //           <div className={styles.footer_icons}>
// //             <a
// //               href="https://www.linkedin.com/in/the-mustafa-khaled/"
// //               target="_blank">
// //               <i className="fa-brands fa-linkedin"></i>
// //             </a>
// //             <a href="https://github.com/mustafa-khaled" target="_blank">
// //               <i className="fa-brands fa-github"></i>
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
//     <div class="footer-basic">
//         <footer>
//             <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
//             <ul class="list-inline">
//                 <li class="list-inline-item"><a href="#">Home</a></li>
//                 <li class="list-inline-item"><a href="#">about</a></li>
//                 <li class="list-inline-item"><a href="#">About</a></li>
//                 <li class="list-inline-item"><a href="#">Terms</a></li>
//                 <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
//             </ul>
//             <p class="copyright">Company Name © 2018</p>
//         </footer>
//     </div>
//   );
// };

// export default Footer;
import styles from "./footer.module.css";
import logoIcon from "../../assets/9f4b3f0a-84f5-4c3c-9c73-9e56e22e706f.jpg";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_image}>
        {/* <h2>
          Follow me on
          <a
            href="https://www.instagram.com/p_cube_india/"
            target="_blank">
           Instagram
          </a>
        </h2> */}
      </div>
      <div className={`${styles.footer_content} container `}>
        <div>
          <div className={styles.logo_holder}>
            <img src={logoIcon} alt="Logo Icon" />
          </div>
          <p>
           Nominated as the most premium gym brand in India.
          </p>
          <div className={styles.info}>
            <span>Call:-</span>
            <p>+91-8814098060</p>
            <span>Email:</span>
            <p>pcubefit@gmail.com</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Utility Pages</li>
            <li onClick={() => navigate("/")}>Gallery</li>
            <li onClick={() => navigate("/about")}>About</li>
            <li onClick={() => navigate("/contact")}>Contact</li>
             <li onClick={() => navigate("/studios")}>Studio</li>
                {/* <li onClick={() => navigate("/classes")}>Classes</li> */}
            {/* <li onClick={() => navigate("/errorPage")}>404 Page</li> */}
            
          </ul>
        </div>
        <div>
          <h3>Connect with us </h3>
        <br />
          <div className={styles.footer_icons}>
            <a
              href="https://www.instagram.com/p_cube_india/"
              target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a> &nbsp;&nbsp;
            <a href="https://www.facebook.com/pcubefitness" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <br />
          <br />  <br />    <h3>Visit us</h3>
<br /> 
            <p>Delhi Studio: <br /> F14/51, Model Town,New Delhi 110009</p> <br />
          <p>Rohtak Studio: <br /> 13L, Model Town Rohtak 124001</p>
          </div>
        </div>
      </div>
      {/* <hr style={{ width: "100%" }} /> */}
       <p style={{textAlign:"center", fontSize:"10px"}}>©Copyright 2021</p>
       <p style={{textAlign:"center",fontSize:"10px"}}>All Right Reserved. Powered by the pCubeFitness © 2021</p>
    </div>
  );
};

export default Footer;

