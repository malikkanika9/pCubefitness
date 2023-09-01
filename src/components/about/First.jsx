import styles from "./about.module.css";

const First = () => {
  return (
    <div
      className={`${styles.first} margin-sections main-background zoom-out-down`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">
      Take a Step to be 
        <br />
        P Cube Fit
      </h1>
    </div>
  );
};

export default First;
