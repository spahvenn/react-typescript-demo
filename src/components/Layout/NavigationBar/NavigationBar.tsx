import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Grid } from "@mui/material";
import { NavigationItem } from "./NavigationItem";
import ColorModeToggle from "./ColorModeToggle";

export default function NavigationBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <NavigationItem to="/">Home</NavigationItem>
                <NavigationItem to="/gallery">Gallery</NavigationItem>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <ColorModeToggle />
                <ShoppingCartIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
