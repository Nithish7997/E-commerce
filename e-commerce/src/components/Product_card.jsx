import { useState } from "react";
import plain from "../ImageForWeb/heart.png";
import RedHeart from "../ImageForWeb/R-heart.png";
const ProductCard = (List_item) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
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
        onClick={handleToggle}
        src={toggle ? RedHeart : plain}
      />
      <img
        style={{ width: "200px", height: "300px" }}
        src={`${List_item.List_item.image}`}
        alt=""
      />
      <h1
        style={{
          fontSize: "20px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {List_item.List_item.title}
      </h1>
      <p style={{ display: "flex", fontWeight: "900" }}>
        Price:{List_item.List_item.price}
      </p>
      <button>Add to Cart</button>
    </>
  );
};
export default ProductCard;
