import BottomNavbar from "../../components/BottomNavbar";
import styles from "./chooseRole.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const ChooseRole = () => {
  return (
    <>
      <div className={styles.main}>
        <h2>Choose your role</h2>
        <div className={styles.role_section}>
          <div className={styles.info}>
            <h1>Donor</h1>
            <p>Somebody is waiting for your food</p>
          </div>
          <div className={styles.img}>
            <img src="./images/illus2.png" alt="Illustration" />
          </div>
        </div>

        <div className={[styles.role_section, styles.role_section_inactive].join(" ")}>
          <div className={styles.info}>
            <h1>Volunteer</h1>
            <p>Fill the gap between Donor and needy.</p>
          </div>
          <div className={styles.img}>
            <img src="./images/illus2.png" alt="Illustration" />
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          .App {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default ChooseRole;
