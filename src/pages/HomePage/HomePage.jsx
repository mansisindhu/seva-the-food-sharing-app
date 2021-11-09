import styles from "./homePage.module.css";
import { BiSearch } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";

import NGOCard from "../../components/NGOCard";

const HomePage = (props) => {
  const { data } = props;
  
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
            return (
              <img
                key={el.reviews}
                className={styles.round_image}
                src={el.image}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <div className={styles.food_required_section}>
        <div className={styles.food_required_top}>
          <h3>Food Required</h3>
          <div className={styles.see_all}>
            <p>See all</p>
            <RiArrowRightSLine className={styles.search_icon} />
          </div>
        </div>
        <NGOCard data={data[0]}/>
        <NGOCard data={data[1]}/>
        <NGOCard data={data[4]}/>
      </div>
    </div>
  );
};

export default HomePage;
