import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { observer } from "mobx-react-lite";
import { ShoppingCartItem } from "../../types";
import AddRemoveShoppingCartButton from "./AddRemoveShoppingCartButton";

const StyledPictureDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    [theme.breakpoints.down("sm")]: {
      margin: `0 ${theme.spacing(1)}`,
      width: "100%",
    },
  },
  "& .MuiDialogContent-root": {
    [theme.breakpoints.down("sm")]: {
      padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    },
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
    },
  },
}));

interface Props {
  img: ShoppingCartItem;
  closeDialog: () => void;
}

const PictureDialog = observer(
  ({ img, closeDialog, open }: Props & DialogProps) => {
    return (
      <StyledPictureDialog
        open={open}
        onClose={closeDialog}
        fullWidth={true}
        maxWidth="md"
      >
        <Box>
          <DialogTitle>Image Preview</DialogTitle>
          <IconButton
            onClick={closeDialog}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <img src={img.src} style={{ width: "100%", display: "block" }} />
          </DialogContent>
          <DialogActions>
            <AddRemoveShoppingCartButton
              shoppingCartItem={img}
              closeDialog={closeDialog}
            />
          </DialogActions>
        </Box>
      </StyledPictureDialog>
    );
  }
);

export default PictureDialog;
