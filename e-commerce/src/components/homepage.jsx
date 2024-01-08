import styles from "./homepage.module.css";
import Categories from "./Categories";
import AccountMenu from "./Profile";
function HomePage() {
  return (
    <div>
      <ul className={styles.unOrderList}>
        <li>Menu</li>
        <li>
          <Categories />
        </li>
        <li style={{ padding: "0px" }}>
          <AccountMenu />
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
