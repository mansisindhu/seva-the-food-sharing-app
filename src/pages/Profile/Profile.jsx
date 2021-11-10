import styles from "./profile.module.css";
import { FiSettings, FiHelpCircle, FiCalendar, FiClock } from "react-icons/fi";
import BottomNavbar from "../../components/BottomNavbar";

const Profile = (props) => {
  const { user, logout } = props;

  return (
    <>
      <BottomNavbar />
      <div className={styles.main}>
        <h1>Profile</h1>
        <div className={styles.upper}>
          <div className={styles.addImage}>
            <img src={user.profilePic} alt="" />
          </div>
          <div className={styles.title}>
            <h2>Hello {user.name}!</h2>
            <p className={styles.edit}>Edit</p>
          </div>
        </div>

        <div className={styles.lower}>
          <div className={styles.tabs}>
            <FiClock className={styles.icon} />
            <p>Donation History</p>
          </div>

          <div className={styles.tabs}>
            <FiCalendar className={styles.icon} />
            <p>Schedule Donation</p>
          </div>

          <div className={styles.tabs}>
            <FiHelpCircle className={styles.icon} />
            <p>Help and FAQs</p>
          </div>

          <div className={styles.tabs}>
            <FiSettings className={styles.icon} />
            <p>Settings</p>
          </div>
        </div>

        <div>
          <button onClick={logout} className={styles.signup_btn}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
