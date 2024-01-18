import styles from "./homepage.module.css";
import Categories from "./Categories";
import AccountMenu from "./Profile";
import WhislistToggler from "./Whislist/WhislistToggler";
import CartToggler from "./Cart/CartToggler";
function HomePage() {
  return (
    <div>
      <ul className={styles.unOrderList}>
        <li>Menu</li>
        <li>
          <Categories />
        </li>
        <li
          style={{
            padding: "unset",
            position: "relative",
            right: "115px",
            float: "right",
            top: "-2px",
          }}
        >
          <WhislistToggler />
        </li>
        <li
          style={{
            padding: "unset",
            position: "relative",
            right: "115px",
            float: "right",
            top: "-3px",
          }}
        >
          <CartToggler />
        </li>
        <li style={{ padding: "0px" }}>
          <AccountMenu />
        </li>
      </ul>
    </div>
  );
}
export default HomePage;
