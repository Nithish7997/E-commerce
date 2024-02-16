import React, { useState } from "react";
import plain from "../ImageForWeb/heart.png";
import RedHeart from "../ImageForWeb/R-heart.png";
import { useLocation } from "react-router";
const AddingCart = ({ List_item, setCart }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  let path = location.pathname.slice(1);
  path = path.replace("%20", " ");
  const handleDecrement = () => {};
  const handleIncrement = () => {};
  const handleWhisList = () => {
    setToggle(!toggle);
  };
  const handleAddCart = () => {
    setCart((cartData) => {
      return [
        ...cartData,
        {
          title: List_item.title,
          quantity: (List_item.quantity = 1),
          price: List_item.price,
        },
      ];
    });
  };
  return (
    <>
      <img
        style={{
          width: "35px",
          position: "absolute",
          right: "10px",
          display: "flex",
        }}
        onClick={handleWhisList}
        src={toggle ? RedHeart : plain}
        alt="Toggler"
      />
      <img
        style={{ width: "200px", height: "300px" }}
        src={`${List_item.image}`}
        alt={`${List_item.title}`}
      />
      <h1
        style={{
          fontSize: "20px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {List_item.title}
      </h1>
      <p style={{ display: "flex", fontWeight: "900" }}>
        Price:{List_item.price}
      </p>
      {path === "cart" ? (
        <p
          style={{
            fontSize: "19px",
            width: "150px",
            marginLeft: "161px",
            border: "2px solid black",
            height: "25px",
          }}
        >
          Quantity:
          <span
            onClick={handleIncrement}
            style={{ margin: "10px", fontSize: "20px" }}
          >
            +
          </span>
          {List_item.quantity}
          <span
            onClick={handleDecrement}
            style={{ margin: "10px", fontSize: "20px" }}
          >
            -
          </span>
        </p>
      ) : (
        <button onClick={handleAddCart}>Add to Cart</button>
      )}
    </>
  );
};
export default AddingCart;
