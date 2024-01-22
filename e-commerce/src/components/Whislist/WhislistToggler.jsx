import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import WhislistImage from "../../ImageForWeb/favorite.png";
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
export default function WhislistToggler() {
  const [querySnapshot, setQuerySnapShot] = React.useState("");
  const navigate = useNavigate();
  const handleclick = async () => {
    const data = [];
    const query = await getDocs(collection(db, "WhislistData"));
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
        navigate(`/wishlist`);
      }}
    >
      <StyledBadge badgeContent={querySnapshot.length} color="secondary">
        <img
          src={WhislistImage}
          style={{ width: "37px", height: "36px" }}
          alt="WhisListIcon"
        />
      </StyledBadge>
    </IconButton>
  );
}
