import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

const StyledCallToActionButton = styled(Button)<{
  component: React.ElementType;
  to: string;
}>(({ theme }) => ({
  padding: "0.5rem 1.25rem",
  fontSize: "1rem",
  color: theme.palette.primary.contrastText,
  borderColor: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(1),
    padding: "0.25rem 0.65rem",
  },
}));

interface Props {
  galleryUrl: string;
  children: React.ReactNode;
}

export function CallToActionButton({ galleryUrl, children }: Props) {
  return (
    <StyledCallToActionButton
      component={Link}
      to={galleryUrl}
      variant="outlined"
    >
      {children}
    </StyledCallToActionButton>
  );
}
