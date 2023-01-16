import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { emptyPictureValue, pictureBank } from "../utils/utils";
import SeasonSelector from "../components/GalleryPage/SeasonSelector";
import PictureDialog from "../components/GalleryPage/PictureDialog";
import { Box, CardMedia, Grid } from "@mui/material";
import { ShoppingCartItem } from "../types";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

export default function GalleryPage() {
  const [selectedSeason, setSelectedSeason] = useState("all");
  const [dialogPicture, setDialogPicture] =
    useState<ShoppingCartItem>(emptyPictureValue);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const urlSeason = searchParams.get("season");
    if (urlSeason && urlSeason !== null) {
      setSelectedSeason(urlSeason);
    }

    const pictureId = searchParams.get("pictureId");
    if (pictureId) {
      const picture = pictureBank.all.find((pic) => {
        return pic.id === Number(pictureId);
      });
      if (picture) {
        setDialogPicture(picture);
      }
    }
  }, []);

  function openPictureDialog(image: ShoppingCartItem) {
    navigate(location.pathname + location.search + "&pictureId=" + image.id);
    setDialogPicture(image);
  }

  function closePictureDialog() {
    navigate(location.pathname + "?season=" + searchParams.get("season"));
    setDialogPicture(emptyPictureValue);
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
                    cursor: "pointer",
                    transition: "transform 0.5s ease",
                    ":hover": { transform: "scale(1.2)" },
                  }}
                  src={image.srcSmall}
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
