import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CarouselItem } from "../../../utils/utils";

export function CarouselImage({
  carouselItem,
  isMobile = false,
}: {
  carouselItem: CarouselItem;
  isMobile?: boolean;
}) {
  return (
    <Link to={"/gallery?season=" + carouselItem.season}>
      <CardMedia
        sx={{
          display: "block",
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
        component="img"
        image={isMobile ? carouselItem.srcSmall : carouselItem.src}
      />
    </Link>
  );
}
