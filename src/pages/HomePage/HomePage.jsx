import styles from "./homePage.module.css";
import { BiArrowToRight, BiSearch } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
const HomePage = (props) => {
  const { data } = props;
  console.log(data)
  return (
    <div className={styles.main}>
      <div className={styles.main_top}>
        <div className={styles.search_input}>
          <BiSearch className={styles.search_icon} />
          <input
            className={styles.input}
            type="text"
            placeholder="Search for NGO or campaign"
          />
        </div>
      </div>

      <div className={styles.volunteer_images}>
        <div className={styles.top}>
          <h3>Volunteer Required</h3>
          <div className={styles.see_all}>
            <p>See all</p>
            <RiArrowRightSLine className={styles.search_icon} />
          </div>
        </div>
        <div className={styles.round_images}>
          {data.map((el) => {
            return (<img key={el.reviews} className={styles.round_image} src={el.image} alt="" />)
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
