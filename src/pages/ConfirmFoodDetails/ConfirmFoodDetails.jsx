import styles from "./confirmFoodDetails.module.css";
import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import { Link } from "react-router-dom";

import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { GrAlarm } from "react-icons/gr";

import Button from "../../components/Button";

const ConfirmFoodDetails = (props) => {
  const { foodData } = props;
  return (
    <>
      <DonateFoodNavbar link="/foodDetails" />
      <BottomNavbar />
      <div className={styles.main}>
        <p className={styles.heading}>Confirm food details</p>
        <div className={styles.top_section}>
          <div className={styles.left}>
            <p>{foodData.type}</p>
            <p>{foodData.meal}</p>
            <p>{foodData.quantity} servings</p>
          </div>
          <div className={styles.right}>
            <img
              src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              alt=""
            />
          </div>
        </div>

        <p className={styles.heading}>Pickup Location</p>
        <div className={styles.input_box}>
          <GoLocation />
          <input
            type="text"
            placeholder="Sector 15, MIDC Road, Spine City, Pune"
          />
        </div>

        <p className={styles.heading}>Contact Information</p>
        <div className={styles.input_box}>
          <BsTelephone />
          <input type="number" placeholder="9876383735" />
        </div>

        <p className={styles.heading}>By when you can donate</p>
        <div className={styles.input_box}>
          <input type="date" placeholder="30-Sep-2021" />
        </div>

        <div className={[styles.input_box, styles.bottom_input].join(" ")}>
          <input type="time" placeholder="Time" />
        </div>

        <div className={styles.guideline}>
          <input type="checkbox" />
          <label>All food donated should be under Guidelines</label>
        </div>
        <div className={styles.btn}>
          <Button text="Post" link="/delivery" />
        </div>
      </div>
    </>
  );
};

export default ConfirmFoodDetails;
