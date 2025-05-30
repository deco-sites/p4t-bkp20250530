import { useEffect, useRef, useState } from "preact/hooks";
import Card from "site/components/ui/Card.tsx";

interface Image {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  linkLabel?: string;
  href?: string;
}

interface CarouselIslandProps {
  images: Image[];
}

export default function CarouselIsland({ images }: CarouselIslandProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const visibleItems = 5;
  const itemWidth = 240;
  const totalVisible = Math.max(images.length - visibleItems + 1, 1);

  const next = () => setIndex((prev) => (prev + 1) % totalVisible);
  const prev = () =>
    setIndex((prev) => (prev - 1 + totalVisible) % totalVisible);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${
        index * itemWidth
      }px)`;
    }
  }, [index]);

  return (
    <div class="relative w-full max-w-[1300px] mx-auto">
      <div class="m-auto max-w-[90%] sm:max-w-[80%] lg:max-w-[85%] overflow-hidden">
        <div
          ref={containerRef}
          class="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${images.length * itemWidth}px`,
          }}
        >
          {images.map((image, i) => (
            <div
              key={i}
              class="flex items-center flex-shrink-0 border-2 border-base-200 mr-[-2px]"
              style={{
                width: `${itemWidth}px`,
                height: `${itemWidth}px`,
              }}
            >
              <Card
                title={image.title ?? `Imagem ${i + 1}`}
                description={image.description ?? "Descrição da imagem."}
                image={image.src || ""}
                alt={image.alt ?? `Imagem ${i + 1}`}
                linkLabel={image.linkLabel}
                href={image.href}
                cardWidth="w-[238px] h-[238px]"
                imageWidth="w-[140px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div class="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between pointer-events-none px-4">
        <button
          onClick={prev}
          class="btn btn-circle bg-accent text-secondary pointer-events-auto"
          style={{ marginLeft: "0px" }}
        >
          ❮
        </button>
        <button
          onClick={next}
          class="btn btn-circle bg-accent text-secondary pointer-events-auto"
          style={{ marginRight: "0px" }}
        >
          ❯
        </button>
      </div>

      <div class="hidden md:flex justify-center mt-4 gap-2">
        {Array.from({ length: totalVisible }).map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            class={`w-2 h-2 rounded-full ${
              index === i ? "bg-base-300" : "bg-secondary"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
