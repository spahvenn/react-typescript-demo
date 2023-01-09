import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SeasonSelector({
  selectedSeason,
  setSelectedSeason,
}: {
  selectedSeason: string;
  setSelectedSeason: (season: string) => void;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const urlSeason = searchParams.get("season");
    if (urlSeason && urlSeason !== null) {
      setSelectedSeason(urlSeason);
    }
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedSeason(event.target.value);
    setSearchParams({ season: event.target.value });
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
