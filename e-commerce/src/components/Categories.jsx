import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Category_data from "./Category_data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Catrgories() {
  const [open, setOpen] = React.useState(false);
  const [productCategory, setProductCategory] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const category = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setProductCategory(json));
  };

  React.useEffect(() => {
    category();
  }, []);

  return (
    <div>
      <Button sx={{ color: "black", padding: "0px" }} onClick={handleOpen}>
        Categories
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Category_data catdata={productCategory} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
