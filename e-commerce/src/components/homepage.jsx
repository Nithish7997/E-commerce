import styles from "./homepage.module.css";
import Categories from "./Categories";
function HomePage() {
  return (
    <div>
      <ul className={styles.unOrderList}>
      <li>Menu</li>
        <li>
          <Categories />
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
