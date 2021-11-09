import styles from "./foodDetails.module.css";

import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const FoodDetails = () => {
  return (
    <>
      <BottomNavbar />
      <DonateFoodNavbar />
      <div className={styles.main}>
        <input type="range" className={styles.slider} min="1" max="100" />

        <p>
          <input type="radio" id="test1" name="radio-group" checked />
          <label for="test1">Apple</label>
        </p>
        <p>
          <input type="radio" id="test2" name="radio-group" />
          <label for="test2">Peach</label>
        </p>
      </div>
    </>
  );
};

export default FoodDetails;
