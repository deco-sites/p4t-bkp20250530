import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Card from "site/components/ui/Card.tsx";
import Slider from "site/components/ui/Slider.tsx";
import { useId } from "site/sdk/useId.ts";

/**
 * @titleBy alt
 */
export interface Image {
  src?: ImageWidget;
  alt?: string;
}

export interface ParallaxCardProps {
  title: string;
  backgroundImage?: Image;
  /** @description */
  card: {
    fixedLabel?: string;
    title?: string;
    description?: string;
    image?: Image;
    link?: {
      linkLabel?: string;
      href?: string;
    };
  }[];
}

export default function ParallaxCard(
  { title, card, backgroundImage }: ParallaxCardProps,
) {
  const id = useId();

  return (
    <div class="relative w-full h-full md:h-[175rem]">
      {backgroundImage?.src && (
        <div class="sticky m-auto top-0 w-full -z-20 h-[60rem] hidden md:block max-w-[80vw] lg:max-w-[65vw] md:max-w-[50vw]">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            width={2000}
            height={800}
            loading="eager"
            fetchPriority="low"
            class="object-contain w-full h-full transform scale-150"
          />
          <div class="absolute inset-0 w-full h-full flex items-center justify-center">
            <h1 class="text-4xl md:text-6xl lg:text-7xl text-secondary text-center px-4 max-w-[876px] pb-12">
              {title}
            </h1>
          </div>
        </div>
      )}

      <div class="relative z-10 hidden md:grid max-w-screen-xl m-auto grid-cols-1 md:grid-cols-3 gap-3 px-4">
        {card.map((item, index) => {
          let verticalOffset = "";
          if (index === 0) verticalOffset = "mt-0";
          if (index === 1) verticalOffset = "mt-[calc(100%+25vw)]";
          if (index === 2) verticalOffset = "mt-[25vw]";

          return (
            <div key={index} class={`${verticalOffset}`}>
              <Card
                title={item?.title || ""}
                description={item?.description || ""}
                fixedLabel={item?.fixedLabel}
                image={item.image?.src || ""}
                alt={item.image?.alt}
                href={item.link?.href}
                linkLabel={item.link?.linkLabel}
                cardWidth="w-full xl:w-[400px]"
                imageWidth="w-full"
              />
            </div>
          );
        })}
      </div>

      <div class="md:hidden relative z-10 w-full overflow-x-hidden px-2">
        <h1 class="text-left text-4xl py-4 pl-2">
          Tecnologia na velocidade do mercado
        </h1>
        <Slider
          class="carousel carousel-center w-full gap-2 p-7"
          rootId={id}
          interval={5000}
          infinite
        >
          {card.map((item, index) => (
            <Slider.Item
              key={index}
              index={index}
              class="carousel-item w-[95%] snap-center shrink-0"
            >
              <Card
                title={item?.title || ""}
                description={item?.description || ""}
                fixedLabel={item?.fixedLabel}
                image={item.image?.src || ""}
                alt={item.image?.alt}
                href={item.link?.href}
                imageWidth="w-full h-full"
                linkLabel={item.link?.linkLabel}
                cardWidth="w-full h-full"
              />
            </Slider.Item>
          ))}
        </Slider>
      </div>
    </div>
  );
}
