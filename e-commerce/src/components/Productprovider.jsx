import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Product_card from "./Product_card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  fontSize: "14px",
}));
// const productProvider = createContext();

const Productprovider = () => {
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
    get_data();
  }, []);
  return (
    <>
      <div>
        {product === undefined ? (
          get_data
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
                      <Product_card List_item={items} />
                      {/* <h1>{items.title}</h1>
                      <img
                        key={items.id}
                        src={`${items.image} `}
                        alt="Product"
                        width={"40%"}
                      ></img>
                      <p>{items.description}</p>
                      <p>Price:{items.price}</p> */}
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
