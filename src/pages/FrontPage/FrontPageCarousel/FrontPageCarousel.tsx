import { carouselItems } from "../../../utils/utils";
import { useState } from "react";
import {
  DesktopCarouselContainer,
  MobileCarouselContainer,
} from "./CarouselContainers";

export default function FrontPageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function onChange(now?: number, previous?: number) {
    if (now) {
      setCurrentImageIndex(now);
    }
  }

  return (
    <>
      <MobileCarouselContainer
        carouselItems={carouselItems}
        onChange={onChange}
        currentImageIndex={currentImageIndex}
      />
      <DesktopCarouselContainer
        carouselItems={carouselItems}
        onChange={onChange}
        currentImageIndex={currentImageIndex}
      />
    </>
  );
}
