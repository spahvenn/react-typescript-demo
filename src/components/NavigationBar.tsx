import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar position="sticky">
      <Grid container>
        <Grid item xs={12} ml={3} mr={3}>
          <Box
            sx={{ display: "flex", alignItems: "center" }}
            minHeight={(theme) => theme.spacing(8)}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Typography variant="h6" component="div" mr={2}>
                Home
              </Typography>
              <Typography variant="h6" component="div">
                Gallery
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <ShoppingCartIcon />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  );
}
