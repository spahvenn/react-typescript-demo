import { Button, Typography } from "@mui/material";

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
    <div>
      <img style={{ width: "100%" }} src={src} />
      <Typography variant="h5" sx={{ marginTop: 0.5, marginBottom: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ mb: 1.5 }}>{description}</Typography>
      <Button variant="contained" sx={{ width: "100%" }}>
        Browse the collection
      </Button>
    </div>
  );
}
