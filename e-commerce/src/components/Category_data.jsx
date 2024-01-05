import * as React from "react";
import { useNavigate } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function Category_data({ catdata }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 16 }}
      >
        {catdata.map((items, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <button
                onClick={() => {
                  navigate(`/${items}`);
                }}
              >
                {items}
              </button>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
