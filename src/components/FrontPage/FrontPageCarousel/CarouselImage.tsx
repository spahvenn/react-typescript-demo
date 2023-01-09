import { CardMedia } from "@mui/material";
import { CarouselItem } from "../../../utils/utils";

export function CarouselImage({
  carouselItem,
}: {
  carouselItem: CarouselItem;
}) {
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
