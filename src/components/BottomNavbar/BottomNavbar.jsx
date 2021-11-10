import { CgProfile } from "react-icons/cg";
import { BiHomeAlt, BiDonateHeart } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { RiTimeLine } from "react-icons/ri";

import styles from "./bottomNavbar.module.css";
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.link}>
          <BiHomeAlt className={styles.icon} />
          <p className={styles.link_text}>Home</p>
        </div>
      </Link>
      <Link to="/">
        <div className={styles.link}>
          <RiTimeLine className={styles.icon} />
          <p className={styles.link_text}>Activity</p>
        </div>
      </Link>
      <Link to="/donationType">
        <div className={styles.link}>
          <BiDonateHeart className={styles.icon} />
          <p className={styles.link_text}>Donate</p>
        </div>
      </Link>
      <div className={[styles.link, styles.disable].join(" ")}>
        <GrLocation className={styles.icon} />
        <p className={styles.link_text}>Hunger Spot</p>
      </div>
      <Link to="/profile">
        <div className={styles.link}>
          <CgProfile className={styles.icon} />
          <p className={styles.link_text}>Profile</p>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavbar;
