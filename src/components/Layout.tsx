import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

export function Layout({ children }: { children: React.ReactNode }) {
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
      {children}
      <Footer />
    </Box>
  );
}

export function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Container
        maxWidth="lg"
        sx={{
          pb: "64px",
          pt: 3,
        }}
      >
        {" "}
        {children}
      </Container>
    </Layout>
  );
}
