import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import WhislistImage from "../../ImageForWeb/favorite.png";
import { collection } from "firebase/firestore/lite";
import { db } from "../../firebaseConfig";
import { getDocs } from "firebase/firestore/lite";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid`,
    padding: "0 4px",
  },
}));
const handleclick = async () => {
  const querySnapshot = await getDocs(collection(db, "WhislistData"));
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(doc.id, doc.data(), data.Price);
  });
  console.log("The Button was clicked");
};
export default function WhislistToggler() {
  return (
    <IconButton
      sx={{ padding: "unset" }}
      aria-label="cart"
      onClick={handleclick}
    >
      <StyledBadge badgeContent={4} color="secondary">
        <img
          src={WhislistImage}
          style={{ width: "37px", height: "36px" }}
          alt="WhisListIcon"
        />
      </StyledBadge>
    </IconButton>
  );
}
