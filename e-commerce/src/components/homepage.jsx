import React from "react";
import styles from "./homepage.module.css";
import Categories from "./Categories";
import AccountMenu from "./Profile";
import WhislistToggler from "./Whislist/WhislistToggler";
import CartToggler from "./Cart/CartToggler";
import DummyCategory from "./CatergoryDummy";

function HomePage() {
  const [productCategory, setProductCategory] = React.useState("");
  const category = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setProductCategory(json));
  };
  console.log(productCategory);
  React.useEffect(() => {
    category();
  }, []);

  return (
    <div>
      <ul className={styles.unOrderList}>
        {/* <li>Menu</li>
        <li>
          <Categories />
        </li> */}
        <span style={{ fontFamily: "cursive", fontSize: "26px" }}>
          React Shop
        </span>
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
      <div>
        <DummyCategory />
        {/* <ul>
          <li>
            <button>categories</button>
          </li>
          <li>
            {productCategory
              ? productCategory?.map((item, index) => (
                  <button key={index}>{item}</button>
                ))
              : null}
          </li>
        </ul> */}
      </div>
    </div>
  );
}
export default HomePage;
