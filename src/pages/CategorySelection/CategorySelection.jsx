import BottomNavbar from "../../components/BottomNavbar";
import styles from "./categorySelection.module.css";
import DonateFoodNavbar from "../../components/DonateFoodNavbar";

const CategorySelection = () => {
  return (
    <>
      <DonateFoodNavbar />
      <BottomNavbar />

      <div className={styles.main}>
        <h1>Select the Category</h1>
        <div className={styles.image_section}>
          <a href="">
            <img src="./images/cooked-food.png" alt="Cooked-Food" />
          </a>
          <img src="./images/raw-food.png" alt="Raw-Food" />
          <img src="./images/packed-food.png" alt="Packed-Food" />
        </div>
      </div>

      <style jsx global>
        {`
          .App {
            overflow: hidden;
          }
        `}
      </style>
    </>
  );
};

export default CategorySelection;
