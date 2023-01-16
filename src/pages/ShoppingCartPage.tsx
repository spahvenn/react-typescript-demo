import { Button, Grid, Link, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PictureDialog from "../components/GalleryPage/PictureDialog";
import { BasicLayout } from "../components/Layout/Layout";
import { useShoppingCartStore } from "../mobx/RootStore";
import { showInfoMsg } from "../utils/toast";

const ShoppingCartPage = observer(() => {
  const { shoppingCartItems } = useShoppingCartStore();
  const [dialogPicture, setDialogPicture] = useState({ id: 0, src: "" });
  return (
    <BasicLayout>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" mb={3}>
            Shopping Cart
          </Typography>
        </Grid>
        {shoppingCartItems.length === 0 && (
          <Grid item xs={12}>
            <Typography gutterBottom>Your shopping cart is empty.</Typography>
            <Typography>
              Please browse the{" "}
              <Link component={RouterLink} to="/gallery">
                gallery
              </Link>{" "}
              to add items to your shopping cart.
            </Typography>
          </Grid>
        )}
        {shoppingCartItems.length > 0 && (
          <>
            <Grid container spacing={0.5} mb={2}>
              {shoppingCartItems.map((item) => {
                return (
                  <Grid item xs={6} sm={4} md={3}>
                    <img
                      style={{
                        width: "100%",
                        display: "block",
                        cursor: "pointer",
                      }}
                      src={item.src}
                      onClick={() => setDialogPicture(item)}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Typography mb={2} fontSize="1.25rem">
                  Total Price: {shoppingCartItems.length} * 10 € ={" "}
                  {shoppingCartItems.length * 10} €
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    showInfoMsg(
                      "This is end of the demo. Thanks for trying it out!"
                    );
                  }}
                >
                  Proceed to purchase
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
      <PictureDialog
        open={dialogPicture.id !== 0}
        onClose={() => setDialogPicture({ id: 0, src: "" })}
        img={dialogPicture}
        closeDialog={() => setDialogPicture({ id: 0, src: "" })}
      />
    </BasicLayout>
  );
});

export default ShoppingCartPage;
