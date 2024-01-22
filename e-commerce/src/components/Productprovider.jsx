import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ProductCard from "./Product_card";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  textAlign: "center",
  fontSize: "14px",
  margin: "10px",
  padding: "5px",
  position: "relative",
}));

const Productprovider = ({ cartData, wishListData }) => {
  const location = useLocation();
  const [product, setProduct] = useState();
  let path = location.pathname.slice(1);
  path = path.replace("%20", " ");
  const get_data = async () => {
    await fetch(`https://fakestoreapi.com/products/category/${path}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  useEffect(() => {
    if (cartData) {
      setProduct(cartData);
    } else if (wishListData) {
      setProduct(wishListData);
    } else {
      get_data();
    }
  }, []);
  return (
    <>
      <div>
        {product === undefined ? (
          cartData ? (
            setProduct(cartData)
          ) : wishListData ? (
            setProduct(wishListData)
          ) : (
            get_data
          )
        ) : (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {product.map((items, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item sx={{ height: "480px" }}>
                      <ProductCard List_item={items} />
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </>
        )}
      </div>
    </>
  );
};

export default Productprovider;
