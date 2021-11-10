import styles from "./deliverSelection.module.css";

import BottomNavbar from "../../components/BottomNavbar";

const DeliverSelection = () => {
  return (
    <>
      <BottomNavbar />
      <div className={styles.main}>
        <div className={styles.upper}>
          <div className={styles.img}>
            <img src="./images/illus2.png" alt="Illustration" />
          </div>
          <p>Would you be delivering or do you need a Pickup?</p>
        </div>

        <div className={styles.button_section}>
          <button className={styles.selfBtn}>Self Delivery</button>
          <button className={styles.pickupBtn}>Pick-Up</button>
        </div>
      </div>
    </>
  );
};

export default DeliverSelection;
