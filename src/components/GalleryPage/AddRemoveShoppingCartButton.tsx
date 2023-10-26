import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useShoppingCartStore } from "../../mobx/RootStore";
import { Image } from "../../types";
import { showSuccessMsg } from "../../utils/toast";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

interface Props {
  image: Image;
  closeDialog: () => void;
}

const AddRemoveShoppingCartButton = observer(
  ({ image, closeDialog }: Props) => {
    const shoppingCartStore = useShoppingCartStore();
    const buttonType = shoppingCartStore.shoppingCartImageIds.find(
      (imageId) => imageId === image.id
    )
      ? "remove"
      : "add";

    function onButtonClick(buttonType: "remove" | "add", imageId: number) {
      buttonType === "add"
        ? shoppingCartStore.add(imageId)
        : shoppingCartStore.remove(imageId);
      closeDialog();
      showSuccessMsg(
        buttonType === "add"
          ? "Picture added to the shopping cart"
          : "Picture removed from the shopping cart"
      );
    }

    return (
      <Button
        endIcon={
          buttonType === "add" ? (
            <AddShoppingCartIcon />
          ) : (
            <RemoveShoppingCartIcon />
          )
        }
        sx={(theme) => ({
          margin: `${theme.spacing(0.5)} ${theme.spacing(0)}`,
        })}
        variant="contained"
        onClick={() => onButtonClick(buttonType, image.id)}
      >
        {buttonType === "add" ? "Add to cart" : "Remove from cart"}
      </Button>
    );
  }
);

export default AddRemoveShoppingCartButton;
