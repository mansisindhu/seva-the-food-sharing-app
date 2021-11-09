import styles from "./homePage.module.css";
import { BiHomeAlt, BiSearch } from "react-icons/bi";

const HomePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.search_input}>
        <BiSearch className={styles.search_icon} />
        <input
          className={styles.input}
          type="text"
          placeholder="Search for NGO or campaign"
        />
      </div>
    </div>
  );
};

export default HomePage;
