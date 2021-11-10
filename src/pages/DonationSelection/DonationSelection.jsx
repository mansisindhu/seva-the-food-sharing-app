import BottomNavbar from "../../components/BottomNavbar";
import styles from "./donationSelection.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const DonationSelection = () => {
  return (
    <>
      <DonateFoodNavbar />
      <BottomNavbar />

      <div className={styles.main}>
        <h1>Choose where you want to Donate</h1>
        <div className={styles.image_section}>
          <a href="">
            <img src="./images/ngo.png" alt="NGO" />
          </a>
          <a href="">
            <img src="./images/hunger.jpg" alt="Hunger" />
          </a>
        </div>
      </div>

      <style jsx>
        {`
          .App {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default DonationSelection;
