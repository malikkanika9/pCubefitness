import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo white.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  const menuHandler = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false); // Function to close the menu
  };

  return (
    <>
      <marquee className={styles.marquee}>
        <p>For franchise related enquiries, call us on +91-8814098060</p>
      </marquee>

      <header>
        <div className={`${styles.header_content} container`}>
          <div className={styles.logo_holder} onClick={() => navigate("/")}>
            <div className={styles.image_holder}>
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <ul className={active ? styles.activeList : ""}>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={styles.activeLink}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName={styles.activeLink}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName={styles.activeLink}
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/studios"
                activeClassName={styles.activeLink}
                onClick={closeMenu}
              >
                Studio
              </NavLink>
            </li>
          </ul>
          <div className={styles.menu} onClick={menuHandler}>
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
