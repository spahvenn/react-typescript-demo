import {
  Box,
  Button,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { pagePreviews } from "../utils/utils";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const CallToActionButton = styled(Button)<{
  component: React.ElementType;
  to: string;
}>(({ theme }) => ({
  padding: "0.5rem 1.25rem",
  fontSize: "1rem",
  color: theme.palette.primary.contrastText,
  borderColor: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.contrastText,
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(1),
    padding: "0.25rem 0.65rem",
  },
}));

function CarouselImage({ carouselItem }: { carouselItem: any }) {
  return (
    <CardMedia
      sx={{
        display: "block",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
      component="div"
      image={carouselItem.src}
    />
  );
}

const carouselItems = [
  {
    season: "winter",
    src: pagePreviews.winter.src,
  },
  {
    season: "spring",
    src: pagePreviews.spring.src,
  },
  {
    season: "summer",
    src: pagePreviews.summer.src,
  },
  {
    season: "autumn",
    src: pagePreviews.autumn.src,
  },
];

interface CarouselContainerProps {
  carouselItems: any[];
  onChange: (now?: number, previous?: number) => void;
  currentImageIndex: number;
}

function DesktopCarouselContainer({
  carouselItems,
  onChange,
  currentImageIndex,
}: CarouselContainerProps) {
  return (
    <Box display={{ xs: "none", sm: "block" }}>
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
                  variant="outlined"
                  component={Link}
                  to={`/gallery?season=${carouselItems[currentImageIndex]?.season}`}
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

function MobileCarouselContainer({
  carouselItems,
  onChange,
  currentImageIndex,
}: CarouselContainerProps) {
  return (
    <Box display={{ xs: "block", sm: "none" }}>
      <Carousel indicators={false} onChange={onChange}>
        {carouselItems.map((carouselItem: any) => {
          return (
            <Box key={carouselItem.season} height="220px">
              <CarouselImage carouselItem={carouselItem} />
            </Box>
          );
        })}
      </Carousel>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
        })}
      >
        <Box padding={1}>
          <Typography
            fontSize="1.2rem"
            mb={1}
            color={(theme) => theme.palette.primary.contrastText}
            textAlign="center"
          >
            The best seasonal image collections!
          </Typography>
          <Box textAlign="center">
            <CallToActionButton
              component={Link}
              to={`/gallery?season=${carouselItems[currentImageIndex]?.season}`}
              variant="outlined"
            >
              View now
            </CallToActionButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function FrontPageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function onChange(now?: number, previous?: number) {
    if (now) {
      setCurrentImageIndex(now);
    }
  }

  return (
    <>
      <MobileCarouselContainer
        carouselItems={carouselItems}
        onChange={onChange}
        currentImageIndex={currentImageIndex}
      />
      <DesktopCarouselContainer
        carouselItems={carouselItems}
        onChange={onChange}
        currentImageIndex={currentImageIndex}
      />
    </>
  );
}
