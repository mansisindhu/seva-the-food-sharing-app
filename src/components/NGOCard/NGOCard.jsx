import styles from "./ngoCard.module.css";
import { CgBowl } from "react-icons/cg";
import { GiAlarmClock } from "react-icons/gi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const NGOCard = (props) => {
  const { data } = props;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={data.image} alt="" />
      <div className={styles.details}>
        <p className={styles.title}>{data.NGOName}</p>
        <div className={styles.detail}>
          <CgBowl className={styles.icon} />
          <p>{data.mealsRequired} meals</p>
        </div>
        <div className={styles.card_bottom}>
          <div className={styles.detail}>
            <GiAlarmClock className={styles.icon} />
            <p>{data.time}</p>
          </div>
          <div>
            <BsFillArrowRightCircleFill className={styles.arrow_icon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOCard;
