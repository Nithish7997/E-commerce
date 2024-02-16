import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CartImage from "../../ImageForWeb/shopping-cart.png";
import { collection } from "firebase/firestore/lite";
import { db } from "../../firebaseConfig";
import { getDocs } from "firebase/firestore/lite";
import { useNavigate } from "react-router";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid`,
    padding: "0 4px",
  },
}));

export default function CartToggler() {
  const [querySnapshot, setQuerySnapShot] = React.useState("");
  const [totalSum, setTotalSum] = React.useState(0);
  const navigate = useNavigate();
  let dataload = JSON.parse(localStorage.getItem("Cartkey"));
  const handleTotalSum = () => {
    dataload = JSON.parse(localStorage.getItem("Cartkey"));
    let sum = 0;
    dataload.forEach((data) => {
      console.log(data);
      sum = sum + data.quantity;
    });
    setTotalSum(sum);
  };
  const handleclick = async () => {
    const data = [];
    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      data.push(doc.data());
    });
    setQuerySnapShot(data);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleTotalSum();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // React.useEffect(() => {
  //   // handleclick();
  //   handleTotalSum();
  // }, []);
  return (
    <IconButton
      sx={{ padding: "unset" }}
      aria-label="cart"
      onClick={() => {
        handleclick();
        navigate(`/cart`);
      }}
    >
      <StyledBadge badgeContent={totalSum} color="secondary">
        <img
          src={CartImage}
          style={{ width: "37px", height: "36px" }}
          alt="CartIcon"
        />
      </StyledBadge>
    </IconButton>
  );
}
