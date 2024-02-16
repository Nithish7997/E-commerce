import React from "react";
import styles from "./CategoryDummy.module.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import plain from "../ImageForWeb/heart.png";
// import RedHeart from "../ImageForWeb/R-heart.png";
// import ProductCard from "./Product_card";
import AddingCart from "./AddingCart";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  textAlign: "center",
  color: "black",
  position: "relative",
}));

const DummyCategory = () => {
  const [productCategory, setProductCategory] = React.useState("");
  const [product, setProduct] = React.useState("");
  const [allProduct, setAllProduct] = React.useState("");
  const [cart, setCart] = React.useState([]);
  localStorage.setItem("Cartkey", JSON.stringify(cart));
  const handleAllProducts = async () => {
    await fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setAllProduct(json));
  };
  console.log(allProduct);
  const handleProduct = async (item) => {
    console.log(item);
    await fetch(`https://fakestoreapi.com/products/category/${item}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
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
    <>
      <div style={{ position: "relative", width: "20%" }}>
        <ul className={styles.DummyData}>
          <li className={styles.DataList}>
            <button
              className={styles.CatButton}
              onClick={() => {
                setProduct(null);
                console.log(product);
              }}
            >
              categories:
            </button>
          </li>
          <li>
            <button className={styles.CatButton} onClick={handleAllProducts}>
              All Products
            </button>
          </li>
          <li>
            <ul style={{ padding: "unset" }} className={styles.DummyData}>
              {productCategory
                ? productCategory?.map((item, index) => (
                    <li className={styles.DataList}>
                      <button
                        onClick={() => handleProduct(item)}
                        className={styles.CatButton}
                        key={index}
                      >
                        {item}
                      </button>
                    </li>
                  ))
                : null}
            </ul>
          </li>
        </ul>
      </div>
      <div
        style={{
          width: "80%",
          position: "absolute",
          right: "10px",
          top: "62px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {product
              ? product?.map((item, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item sx={{ padding: "5px" }}>
                      {/* <ProductCard List_item={item} /> */}
                      <AddingCart List_item={item} setCart={setCart} />
                    </Item>
                  </Grid>
                ))
              : allProduct
              ? allProduct?.map((item, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item sx={{ padding: "5px" }}>
                      {/* <ProductCard List_item={item} /> */}
                      <AddingCart List_item={item} setCart={setCart} />
                    </Item>
                  </Grid>
                ))
              : null}
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default DummyCategory;
