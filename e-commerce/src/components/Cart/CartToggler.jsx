import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CartImage from "../../ImageForWeb/shopping-cart.png";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid`,
    padding: "0 4px",
  },
}));
const handleclick = () => {
  console.log("clciked");
};
export default function CartToggler() {
  return (
    <IconButton
      sx={{ padding: "unset" }}
      aria-label="cart"
      onClick={handleclick}
    >
      <StyledBadge badgeContent={4} color="secondary">
        <img
          src={CartImage}
          style={{ width: "37px", height: "36px" }}
          alt="CartIcon"
        />
      </StyledBadge>
    </IconButton>
  );
}
