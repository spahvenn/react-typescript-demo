import { Box, Grid, Typography } from "@mui/material";
import { CarouselImage } from "./CarouselImage";
import Carousel from "react-material-ui-carousel";
import { CallToActionButton } from "./CallToActionButton";
import { CarouselItem } from "../../../utils/utils";

interface CarouselContainerProps {
  carouselItems: CarouselItem[];
  onChange: (now?: number, previous?: number) => void;
  currentImageIndex: number;
}

export function DesktopCarouselContainer({
  carouselItems,
  onChange,
  currentImageIndex,
}: CarouselContainerProps) {
  return (
    <Box>
      <Grid container>
        <Grid item xs={7} sm={8} md={9}>
          <Carousel indicators={false} onChange={onChange}>
            {carouselItems.map((carouselItem) => {
              return (
                <Box key={carouselItem.season} height="400px">
                  <CarouselImage carouselItem={carouselItem}></CarouselImage>
                </Box>
              );
            })}
          </Carousel>
        </Grid>
        <Grid
          item
          xs={5}
          sm={4}
          md={3}
          bgcolor={(theme) => theme.palette.primary.main}
        >
          <Box
            height="100%"
            sx={{
              padding: 3,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ textAlign: "middle" }}>
              <Typography
                fontSize="1.2rem"
                mb={2}
                color={(theme) => theme.palette.primary.contrastText}
                textAlign="center"
              >
                The best seasonal image collections!
              </Typography>
              <Box textAlign="center">
                <CallToActionButton
                  galleryUrl={`/gallery?season=${carouselItems[currentImageIndex]?.season}`}
                >
                  View now
                </CallToActionButton>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export function MobileCarouselContainer({
  carouselItems,
  onChange,
  currentImageIndex,
}: CarouselContainerProps) {
  return (
    <Box>
      <Carousel indicators={false} onChange={onChange}>
        {carouselItems.map((carouselItem) => {
          return (
            <Box key={carouselItem.season} height="220px">
              <CarouselImage carouselItem={carouselItem} isMobile={true} />
            </Box>
          );
        })}
      </Carousel>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
          borderRadius: 1,
        })}
      >
        <Box padding={1.5} mt={1.5}>
          <Typography
            fontSize="1.2rem"
            mb={1.25}
            color={(theme) => theme.palette.primary.contrastText}
            textAlign="center"
          >
            The best seasonal image collections!
          </Typography>
          <Box textAlign="center">
            <CallToActionButton
              galleryUrl={`/gallery?season=${carouselItems[currentImageIndex]?.season}`}
            >
              View now
            </CallToActionButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
