import { ImageWidget } from "apps/admin/widgets.ts";
import CarouselIsland from "../islands/CarouselIsland.tsx";

export interface Image {
  src?: ImageWidget;
  alt?: string;
  title?: string;
  description?: string;
  linkLabel?: string;
  href?: string;
}

export interface CarouselProps {
  title: string;
  images: Image[];
}

export default function Carousel({ images, title }: CarouselProps) {
  return (
    <div class="flex w-full flex-col items-center py-9">
      <h1 class="md:text-3xl text-2xl text-secondary md:mb-12 mb-7">{title}</h1>
      <CarouselIsland images={images} />
    </div>
  );
}
