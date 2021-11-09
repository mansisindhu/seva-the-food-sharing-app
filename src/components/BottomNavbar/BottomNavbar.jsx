import { CgProfile } from "react-icons/cg";
import { BiHomeAlt, BiDonateHeart } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { RiTimeLine } from "react-icons/ri";

import styles from "./bottomNavbar.module.css";

const BottomNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.link}>
        <BiHomeAlt className={styles.icon} />
        <p className={styles.link_text}>Home</p>
      </div>
      <div className={styles.link}>
        <RiTimeLine className={styles.icon} />
        <p className={styles.link_text}>Activity</p>
      </div>
      <div className={styles.link}>
        <BiDonateHeart className={styles.icon} />
        <p className={styles.link_text}>Donate</p>
      </div>
      <div className={styles.link}>
        <GrLocation className={styles.icon} />
        <p className={styles.link_text}>Hunger Spot</p>
      </div>
      <div className={styles.link}>
        <CgProfile className={styles.icon} />
        <p className={styles.link_text}>Profile</p>
      </div>
    </div>
  );
};

export default BottomNavbar;
