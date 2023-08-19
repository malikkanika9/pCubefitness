import styles from "./header.module.css";
import logo from "../../assets/logo white.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { marquee } from "react";
const Header = () => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const menuHandler = () => {
    setActive(!active);
  };

  return (
    <>
      <marquee className={styles.marquee}>
        <p>For franchise related enquiry call us on +91-8814098060 </p>
      </marquee>
    
      <header>
        <div className={`${styles.header_content} container`}>
          <div
            className={styles.logo_holder}
            onClick={() => navigate("/")}
          >
            <div className={styles.image_holder}>
              <img src={logo} alt="Logo" />
            </div>
            {/* <p style={{color:"#003399"}}>P Cube Fitness </p>      */}
          </div>
          <ul className={active ? `${styles.activeList}` : ""}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
             <li>
              <Link to="/studios">Studio</Link>
            </li>
          </ul>
          <div className={styles.menu} onClick={() => menuHandler()}>
            <i className={`fas ${active ? "fa-times" : "fa-bars"} open-list`}></i>
          </div>
          <div
            className={`${styles.menu_overlay} ${
              active ? `${styles.active_overlay}` : ""
            }`}
            onClick={() => menuHandler()}
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
