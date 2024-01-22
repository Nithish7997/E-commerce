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
  const navigate = useNavigate();
  const handleclick = async () => {
    const data = [];
    const query = await getDocs(collection(db, "CartData"));
    query.forEach((doc) => {
      data.push(doc.data());
    });
    setQuerySnapShot(data);
  };

  React.useEffect(() => {
    handleclick();
  }, []);
  return (
    <IconButton
      sx={{ padding: "unset" }}
      aria-label="cart"
      onClick={() => {
        handleclick();
        navigate(`/cart`);
      }}
    >
      <StyledBadge badgeContent={querySnapshot.length} color="secondary">
        <img
          src={CartImage}
          style={{ width: "37px", height: "36px" }}
          alt="CartIcon"
        />
      </StyledBadge>
    </IconButton>
  );
}
