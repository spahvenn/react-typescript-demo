import { Button, Grid, Link, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ImageDialog from "../components/GalleryPage/ImageDialog";
import { BasicLayout } from "../components/Layout/Layout";
import { useShoppingCartStore } from "../mobx/RootStore";
import { showInfoMsg } from "../utils/toast";
import { emptyImageValue, getImageById } from "../utils/utils";

const ShoppingCartPage = observer(() => {
  const { shoppingCartImageIds } = useShoppingCartStore();
  const [dialogPicture, setDialogPicture] = useState(emptyImageValue);
  return (
    <BasicLayout>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" mb={3}>
            Shopping Cart
          </Typography>
        </Grid>
        {shoppingCartImageIds.length === 0 && (
          <Grid item xs={12}>
            <Typography gutterBottom>Your shopping cart is empty.</Typography>
            <Typography>
              Please browse the{" "}
              <Link component={RouterLink} to="/gallery?season=all">
                gallery
              </Link>{" "}
              to add items to your shopping cart.
            </Typography>
          </Grid>
        )}
        {shoppingCartImageIds.length > 0 && (
          <>
            <Grid container spacing={0.5} mb={2}>
              {shoppingCartImageIds.map((itemId) => {
                return (
                  <Grid key={itemId} item xs={6} sm={4} md={3}>
                    <img
                      style={{
                        width: "100%",
                        display: "block",
                        cursor: "pointer",
                      }}
                      alt={"Shopping cart item"}
                      src={getImageById(itemId).srcSmall}
                      onClick={() => setDialogPicture(getImageById(itemId))}
                    />
                  </Grid>
                );
              })}
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Typography mb={2} fontSize="1.25rem">
                  Total Price: {shoppingCartImageIds.length} * 10 € ={" "}
                  {shoppingCartImageIds.length * 10} €
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
      <ImageDialog
        open={dialogPicture.id !== 0}
        onClose={() => setDialogPicture(emptyImageValue)}
        img={dialogPicture}
        closeDialog={() => setDialogPicture(emptyImageValue)}
      />
    </BasicLayout>
  );
});

export default ShoppingCartPage;
