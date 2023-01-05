import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Grid, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: "none",
  padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)} 0`,
}));

function NavigationItem({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) {
  return (
    <StyledNavLink to={to}>
      {({ isActive }) => (
        <Typography
          variant="h6"
          component="div"
          style={isActive ? { fontWeight: "bold" } : { fontWeight: "normal" }}
        >
          {children}
        </Typography>
      )}
    </StyledNavLink>
  );
}

export default function NavigationBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <NavigationItem to="/">Home</NavigationItem>
                <NavigationItem to="/gallery">Gallery</NavigationItem>
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
      </Container>
    </AppBar>
  );
}
