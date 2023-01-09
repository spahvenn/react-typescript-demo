import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
interface Props {
  pagePreviewInfo: {
    src: string;
    title: string;
    description: string;
    btnUrl: string;
  };
}

export function PagePreviewBox({ pagePreviewInfo }: Props) {
  const { src, title, description, btnUrl } = pagePreviewInfo;
  return (
    <Box mb={{ md: 2, lg: 0 }}>
      <img style={{ width: "100%" }} src={src} />
      <Typography variant="h5" mt={0.5} mb={0.5}>
        {title}
      </Typography>
      <Typography mb={1.5}>{description}</Typography>
      <Button component={Link} to={btnUrl} variant="contained" fullWidth>
        Browse the collection
      </Button>
    </Box>
  );
}