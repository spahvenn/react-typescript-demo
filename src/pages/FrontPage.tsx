import { Grid } from "@mui/material";
import FrontPageCarousel from "../components/FrontPage/FrontPageCarousel/FrontPageCarousel";
import { pagePreviews } from "../utils/utils";
import { BasicLayout } from "../components/Layout/Layout";
import { PagePreviewBox } from "../components/FrontPage/PagePreviewBox";

function FrontPage() {
  return (
    <BasicLayout>
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
    </BasicLayout>
  );
}

export default FrontPage;
