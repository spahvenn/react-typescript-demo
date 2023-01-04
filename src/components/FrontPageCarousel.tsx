import {
  Box,
  Button,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

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
}));

const carouselItems = [
  {
    src: "https://lh3.googleusercontent.com/pw/AL9nZEX9jsp60DxonQFt6hBcd4szSEdgv6tUdgw8n5NObQtqtLEo8NpIVL-soCGKTz7kApaxpcohtZHGUR0Y9X57FxK1ec83fbOz6dVnsCb5o3ipD_F6T7-dL8yD0SmV0x4F0YcrydahEqUOCaqfNEUwF4mNcg=w3730-h2100-no?authuser=0",
  },
  {
    src: "https://lh3.googleusercontent.com/pw/AL9nZEXRi7cjNArOloX0YgE8iQn0_d-AuuFVPkNuYplBzuN_7dQhHTVIDSvZ540dU5VfGbMMViXaxkKlbVCkNE0Dt9fiDGKmqXzdrjnrOtU8sGxJFWT9edNY0y2fm0M1PflzzOfy2y2xEycv-SWsaQMW75IHaw=w3730-h2100-no?authuser=0",
  },
];

export default function FrontPageCarousel() {
  return (
    <Carousel autoPlay={false}>
      {carouselItems.map((carouselItem) => {
        return (
          <Grid container>
            <Grid item xs={7} sm={8} md={9}>
              <Box height="400px">
                <CardMedia
                  style={{
                    display: "block",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                  component="div"
                  image={carouselItem.src}
                />
              </Box>
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
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography
                    fontSize="1.2rem"
                    mb={2}
                    color={(theme) => theme.palette.primary.contrastText}
                  >
                    The best seasonal image collections!
                  </Typography>
                  <CallToActionButton variant="outlined">
                    View now
                  </CallToActionButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        );
      })}
    </Carousel>
  );
}
