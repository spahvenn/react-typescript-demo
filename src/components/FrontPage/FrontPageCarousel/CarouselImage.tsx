import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CarouselItem } from "../../../utils/utils";

export function CarouselImage({
  carouselItem,
}: {
  carouselItem: CarouselItem;
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
        component="div"
        image={carouselItem.src}
      />
    </Link>
  );
}
