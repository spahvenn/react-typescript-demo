import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useShoppingCartStore } from "../../mobx/RootStore";
import { ShoppingCartItem } from "../../types";
import { showSuccessMsg } from "../../utils/toast";

interface Props {
  shoppingCartItem: ShoppingCartItem;
  closeDialog: () => void;
}

const AddRemoveShoppingCartButton = observer(
  ({ shoppingCartItem, closeDialog }: Props) => {
    const shoppingCartStore = useShoppingCartStore();
    const buttonType = shoppingCartStore.shoppingCartItems.find(
      (item) => item.id === shoppingCartItem.id
    )
      ? "remove"
      : "add";
    return (
      <Button
        sx={(theme) => ({
          margin: `${theme.spacing(0.5)} ${theme.spacing(0)}`,
        })}
        variant="contained"
        autoFocus
        onClick={() => {
          buttonType === "add"
            ? shoppingCartStore.add(shoppingCartItem)
            : shoppingCartStore.remove(shoppingCartItem);
          closeDialog();
          showSuccessMsg(
            buttonType === "add"
              ? "Picture added to the shopping cart"
              : "Picture removed from the shopping cart"
          );
        }}
      >
        {buttonType === "add" ? "Add to cart" : "Remove from cart"}
      </Button>
    );
  }
);

export default AddRemoveShoppingCartButton;
