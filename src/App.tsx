import { Container } from "@mui/system";
import { Box, Grid } from "@mui/material";
import { PagePreviewBox } from "./components/PagePreviewBox";
import NavigationBar from "./components/NavigationBar";
import FrontPageCarousel from "./components/FrontPageCarousel";
import Footer from "./components/Footer";
import { pagePreviews } from "./utils/utils";

function App() {
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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FrontPageCarousel />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <PagePreviewBox pagePreviewInfo={pagePreviews.spring} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <PagePreviewBox pagePreviewInfo={pagePreviews.summer} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <PagePreviewBox pagePreviewInfo={pagePreviews.autumn} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <PagePreviewBox pagePreviewInfo={pagePreviews.winter} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
