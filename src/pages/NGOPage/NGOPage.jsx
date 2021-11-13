import styles from "./ngoPage.module.css";

import { HiBadgeCheck } from "react-icons/hi";

import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";
import Button from "../../components/Button";
import { useParams } from "react-router";

const NGOPage = (props) => {
  const { data } = props;
  const { id } = useParams();
  const ngoData = data[parseInt(id)];

  return (
    <>
      <DonateFoodNavbar link="/all" />
      <BottomNavbar />
      <div className={styles.main}>
        <div className={styles.ngo_details}>
          <div className={styles.image_section}>
            <img src={ngoData.image} alt="ngo image" />
            <div className={styles.title}>
              <p>{ngoData.NGOName}</p>
              <HiBadgeCheck className={styles.icon} />
            </div>
          </div>
          <div className={styles.grid}>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.reviews}</p>
              <p className={styles.para}>Reviews</p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.totalFeeds}+</p>
              <p className={styles.para}>Total Feeds</p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.totalCampaigns}+</p>
              <p className={styles.para}>Total Campaigns</p>
            </div>
            <div className={styles.item}>
              <p className={styles.detail}>{ngoData.totalVolunteers}+</p>
              <p className={styles.para}>Total Volunteers</p>
            </div>
          </div>
          <div className={styles.button}>
            <Button text="Donate Now" link="/category" />
          </div>
        </div>

        <div className={styles.about}>
          <div className={styles.about_top}>
            <p>About</p>
            <p>Events</p>
            <p>Reviews</p>
          </div>
          <div className={styles.about_bottom}>
            <p>{ngoData.about}</p>
            <div className={styles.buttons}>
              <button>Chat</button>
              <button>Volunteer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NGOPage;
