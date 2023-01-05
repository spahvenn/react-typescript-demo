import { Grid } from "@mui/material";
import { PagePreviewBox } from "../components/PagePreviewBox";
import FrontPageCarousel from "../components/FrontPageCarousel";
import { pagePreviews } from "../utils/utils";
import Layout from "../components/Layout";

function HomePage() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default HomePage;
