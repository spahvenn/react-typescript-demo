import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { pictureBank } from "../utils/utils";
import SeasonSelector from "../components/GalleryPage/SeasonSelector";

export default function GalleryPage() {
  const [selectedSeason, setSelectedSeason] = useState("all");

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 2, mb: 0.5 }}>
        <SeasonSelector
          setSelectedSeason={setSelectedSeason}
          selectedSeason={selectedSeason}
        />
      </Container>
      <Grid container spacing={0.5} mb={0.5}>
        {pictureBank[selectedSeason].map((image) => {
          return (
            <Grid key={image.src} item sm={6} md={4} lg={3}>
              <img
                style={{ width: "100%", display: "block" }}
                src={image.src}
              ></img>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}
