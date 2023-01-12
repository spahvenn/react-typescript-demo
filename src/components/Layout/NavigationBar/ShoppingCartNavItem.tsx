import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { observer } from "mobx-react-lite";
import { useShoppingCartStore } from "../../../mobx/RootStore";

const ShoppingCartNavItem = observer(() => {
  const cartStore = useShoppingCartStore();
  return (
    <>
      <ShoppingCartIcon />
      <Box sx={{ position: "relative" }}>
        <Typography
          sx={(theme) => ({
            position: "absolute",
            right: 4,
            bottom: 9,
            color: theme.palette.primary.contrastText,
            fontSize: "0.7rem",
            fontWeight: "bold",
            backgroundColor: "red",
            borderRadius: "1rem",
            padding: "0px 4px",
          })}
        >
          {cartStore.shoppingCartItems.length}
        </Typography>
      </Box>
    </>
  );
});

export default ShoppingCartNavItem;
