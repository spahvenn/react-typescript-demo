import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { pictureBank } from "../utils/utils";

function RowRadioButtonsGroup({
  selectedSeason,
  setSelectedSeason,
}: {
  selectedSeason: string;
  setSelectedSeason: (season: string) => void;
}) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedSeason(event.target.value);
  }

  return (
    <FormControl sx={{ mb: 1 }}>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Filter images by season
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={handleChange}
        value={selectedSeason}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="spring" control={<Radio />} label="Spring" />
        <FormControlLabel value="summer" control={<Radio />} label="Summer" />
        <FormControlLabel value="autumn" control={<Radio />} label="Autumn" />
        <FormControlLabel value="winter" control={<Radio />} label="Winter" />
      </RadioGroup>
    </FormControl>
  );
}

export default function GalleryPage() {
  const [selectedSeason, setSelectedSeason] = useState("all");

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ mt: 2, mb: 0.5 }}>
        <RowRadioButtonsGroup
          setSelectedSeason={setSelectedSeason}
          selectedSeason={selectedSeason}
        />
      </Container>
      <Grid container spacing={0.5}>
        <Grid item xs={12}></Grid>

        {pictureBank[selectedSeason].map((image) => {
          return (
            <Grid item sm={6} md={4}>
              <img style={{ width: "100%" }} src={image.src}></img>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}
