import { Container } from "@mui/system";
import { useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { pictureBank } from "../utils/utils";
import SeasonSelector from "../components/GalleryPage/SeasonSelector";
import PictureDialog from "../components/GalleryPage/PictureDialog";
import { Box, CardMedia, Grid } from "@mui/material";
import { ShoppingCartItem } from "../types";

export default function GalleryPage() {
  const [selectedSeason, setSelectedSeason] = useState("all");
  const [dialogPicture, setDialogPicture] = useState<ShoppingCartItem>({
    id: 0,
    src: "",
  });

  function openPictureDialog(image: ShoppingCartItem) {
    setDialogPicture(image);
  }

  function closePictureDialog() {
    setDialogPicture({ id: 0, src: "" });
  }

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
              <Box
                sx={{
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: "100%",
                    display: "block",
                    transition: "transform 0.5s ease",
                    ":hover": { transform: "scale(1.2)" },
                  }}
                  src={image.src}
                  onClick={() => openPictureDialog(image)}
                />
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <PictureDialog
        open={dialogPicture.id !== 0}
        onClose={closePictureDialog}
        img={dialogPicture}
        closeDialog={closePictureDialog}
      />
    </Layout>
  );
}
