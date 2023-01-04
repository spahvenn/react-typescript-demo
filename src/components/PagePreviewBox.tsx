import { Box, Button, Typography } from "@mui/material";

interface Props {
  pagePreviewInfo: {
    src: string;
    title: string;
    description: string;
  };
}

export function PagePreviewBox({ pagePreviewInfo }: Props) {
  const { src, title, description } = pagePreviewInfo;
  return (
    <Box mb={{ md: 2, lg: 0 }}>
      <img style={{ width: "100%" }} src={src} />
      <Typography variant="h5" mt={0.5} mb={0.5}>
        {title}
      </Typography>
      <Typography mb={1.5}>{description}</Typography>
      <Button variant="contained" fullWidth>
        Browse the collection
      </Button>
    </Box>
  );
}
