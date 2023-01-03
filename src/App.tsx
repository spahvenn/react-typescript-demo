import React from "react";
import "./App.css";
import { Container } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import { Grid } from "@mui/material";
import { PagePreviewBox } from "./components/PagePreviewBox";

function App() {
  // TODO: layoutti, jossa carousel ja 4 kuvaa (kevät, kesä, syksy, talvi)

  // TODO: kansikuviksi pitää leikata kapeammat versiot

  const pagePreviews = {
    spring: {
      title: "Spring",
      description:
        "Browser our catalog of Spring images! Amazing landscapes recovering from winter's frost!",
      src: "https://lh3.googleusercontent.com/pw/AL9nZEX9jsp60DxonQFt6hBcd4szSEdgv6tUdgw8n5NObQtqtLEo8NpIVL-soCGKTz7kApaxpcohtZHGUR0Y9X57FxK1ec83fbOz6dVnsCb5o3ipD_F6T7-dL8yD0SmV0x4F0YcrydahEqUOCaqfNEUwF4mNcg=w3730-h2100-no?authuser=0",
    },
    summer: {
      title: "Summer",
      description:
        "Browser our catalog of Summer images! Pick you favourite sunny landscapes!",
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXDKIL0j35rRGj_oDNDnL17tYmm-dtSeNlKp1rHFQUzDd9Qz3CxdwpsWPRks-4jy3KS5mS-dmnbcxoYwv63BSc41z57irTkr_irGzp-VfxNxkRV2N2lvphTd3Le0GYqe5VZOnM4CV7l2cixqZawFOXqfg=w3730-h2100-no?authuser=0",
    },
    autumn: {
      title: "Autumn",
      description:
        "Browser our catalog of Autumn images! Pick you vivid Autumn landscapes!",
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXFOYb3rq2r5yoJiiC4rJ-9fOzRj7g_PV5anWMbYWQiFmQuaXADvntQGNR3bUNIuv4Bhp_6MRKDkPxwo92DhY-c48PW-9kSE4_SZd858-NrFI6ui7Vi8KpInq2B1EiYM2uBKA8hKn9TRPPZps01qJQsqg=w3730-h2100-no?authuser=0",
    },
    winter: {
      title: "Winter",
      description:
        "Browser our catalog of Winter images! Frosty landscapes for all uses!",
      src: "https://lh3.googleusercontent.com/pw/AL9nZEWnEw6nznkffDQJbQPu9nEUa1fEUk-jAvZHgQkFwTwzrO6oiVDPCWm9HnTOl1h0kIO0_1sZRp4q_5hA18wb7UEAUqgvk2NA-u2AddDvPDYGDTNl-ulMXvBmIXNqm6jde3DKcsAtDJuVSYnR-vdjN-rt4A=w3730-h2100-no?authuser=0",
    },
  };

  const carouselItems = [
    {
      src: "https://lh3.googleusercontent.com/pw/AL9nZEU3vKhqmZNW_CVLzOpsWTuAJmy0ms6Q7gyStUAC__rmXayWxkc8eSRDuIXYyOxNf00vs8R5ddhfOs9EghC1ORmxYtBj5Uu4PiwM9qd35xdboG9TVMbWmg_kPlJKH86C_2-r7bHkyETJTy1LQ1GhGAB2WQ=w3730-h2100-no?authuser=0",
    },
    {
      src: "https://lh3.googleusercontent.com/pw/AL9nZEXRi7cjNArOloX0YgE8iQn0_d-AuuFVPkNuYplBzuN_7dQhHTVIDSvZ540dU5VfGbMMViXaxkKlbVCkNE0Dt9fiDGKmqXzdrjnrOtU8sGxJFWT9edNY0y2fm0M1PflzzOfy2y2xEycv-SWsaQMW75IHaw=w3730-h2100-no?authuser=0",
    },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Carousel autoPlay={false}>
            {carouselItems.map((carouselItem) => {
              return (
                <img
                  src={carouselItem.src}
                  style={{ width: "100%", height: "50%" }}
                />
              );
            })}
          </Carousel>
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
  );
}

export default App;
