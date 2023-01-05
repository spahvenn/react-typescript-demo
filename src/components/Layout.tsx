import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <NavigationBar />
      <Container
        maxWidth="lg"
        sx={{
          pb: "64px",
          pt: 3,
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
