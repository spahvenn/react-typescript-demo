import { styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary.contrastText
      : "#90caf9",
  textDecoration: "none",
  padding: `${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)} 0`,
}));

interface Props {
  children: React.ReactNode;
  to: string;
}

export function NavigationItem({ children, to }: Props) {
  return (
    <StyledNavLink to={to}>
      {({ isActive }) => (
        <Typography
          variant="h6"
          style={isActive ? { fontWeight: "bold" } : { fontWeight: "normal" }}
        >
          {children}
        </Typography>
      )}
    </StyledNavLink>
  );
}
