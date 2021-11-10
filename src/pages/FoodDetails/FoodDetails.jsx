import styles from "./foodDetails.module.css";

import BottomNavbar from "../../components/BottomNavbar";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

import Button from "../../components/Button";

const FoodDetails = () => {
  return (
    <>
      <BottomNavbar />
      <DonateFoodNavbar />
      <div className={styles.main}>
        <p className={styles.heading}>Meal type</p>
        <div className={styles.radios}>
          <p>
            <input type="radio" id="test1" name="radio-group" checked />
            <label className={styles.label} for="test1">
              Veg
            </label>
          </p>
          <p>
            <input type="radio" id="test2" name="radio-group" />
            <label className={styles.label} for="test2">
              Non-veg
            </label>
          </p>
        </div>

        <div className={styles.checkboxes}>
          <div className={styles.checkbox_container}>
            <input type="checkbox" className={styles.checkbox} />
            <img className={styles.overlay} src="./images/breakfast.jpg" />
            <div className={styles.checked_overlay}></div>
            <p>Breakfast</p>
          </div>
          <div className={styles.checkbox_container}>
            <input type="checkbox" className={styles.checkbox} />
            <img className={styles.overlay} src="./images/lunch.jpg" />
            <div className={styles.checked_overlay}></div>
            <p>Lunch</p>
          </div>
          <div className={styles.checkbox_container}>
            <input type="checkbox" className={styles.checkbox} />
            <img className={styles.overlay} src="./images/dinner.jpg" />
            <div className={styles.checked_overlay}></div>
            <p>Dinner</p>
          </div>
        </div>

        <div className={styles.range_slider}>
          <p className={styles.heading}>Quantity (person)</p>
          <input type="range" className={styles.slider} min="0" max="60" />
          <div className={styles.numbers}>
            <p>0</p>
            <p>10</p>
            <p>20</p>
            <p>30</p>
            <p>40</p>
            <p>50</p>
            <p>60</p>
          </div>
        </div>

        <div className={styles.range_slider}>
          <p className={styles.heading}>When was the meal prepared (Hrs)</p>
          <input type="range" className={styles.slider} min="0" max="12" />
          <div className={styles.numbers}>
            <p>0</p>
            <p>2</p>
            <p>4</p>
            <p>6</p>
            <p>8</p>
            <p>10</p>
            <p>12</p>
          </div>
        </div>

        <div className={styles.btn}>
          <Button text="Post" />
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
