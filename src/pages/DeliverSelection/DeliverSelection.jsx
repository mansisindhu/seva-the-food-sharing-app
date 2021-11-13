import styles from "./deliverSelection.module.css";

import BottomNavbar from "../../components/BottomNavbar";
import { useState } from "react";

import { IoIosCheckmarkCircle } from "react-icons/io";
import Button from "../../components/Button";

const DeliverSelection = () => {
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState((state) => !state);
  };

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
          <button onClick={toggleModal} className={styles.pickupBtn}>
            Pick-Up
          </button>
        </div>
        {isModalOpen ? (
          <div className={styles.modal_overlay}>
            <div className={styles.modal_container}>
              <IoIosCheckmarkCircle className={styles.icon} />
              <p>Pickup Request service sent succesfully !!</p>
              <p>You will notified soon</p>
              <Button text="Okay" link="/" />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DeliverSelection;
