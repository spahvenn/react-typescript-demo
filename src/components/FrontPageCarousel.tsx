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

const CallToActionButton = styled(Button)(({ theme }) => ({
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
    src: pagePreviews.winter.src,
  },
  {
    src: pagePreviews.spring.src,
  },
  {
    src: pagePreviews.summer.src,
  },
  {
    src: pagePreviews.autumn.src,
  },
];

function DesktopCarouselContainer({ carouselItems }: { carouselItems: any[] }) {
  return (
    <Box display={{ xs: "none", sm: "block" }}>
      <Grid container>
        <Grid item xs={7} sm={8} md={9}>
          <Carousel indicators={false}>
            {carouselItems.map((carouselItem) => {
              return (
                <Box height="400px">
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
                <CallToActionButton variant="outlined">
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

function MobileCarouselContainer({ carouselItems }: { carouselItems: any }) {
  return (
    <Box display={{ xs: "block", sm: "none" }}>
      <Carousel indicators={false}>
        {carouselItems.map((carouselItem: any) => {
          return (
            <Box height="220px">
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
        <Box padding={1.5}>
          <Typography
            fontSize="1.2rem"
            mb={1.5}
            color={(theme) => theme.palette.primary.contrastText}
            textAlign="center"
          >
            The best seasonal image collections!
          </Typography>
          <Box textAlign="center">
            <CallToActionButton variant="outlined">View now</CallToActionButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function FrontPageCarousel() {
  return (
    <>
      <MobileCarouselContainer carouselItems={carouselItems} />
      <DesktopCarouselContainer carouselItems={carouselItems} />
    </>
  );
}
