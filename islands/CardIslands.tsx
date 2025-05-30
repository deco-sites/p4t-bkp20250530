import { useEffect, useRef, useState } from "preact/hooks";
import ServiceCard from "site/components/ui/ServiceCard.tsx";
import Icon from "site/components/ui/Icon.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

interface Image {
    src?: string;
    alt?: string;
    title?: string;
    description?: string;
    linkLabel?: string;
    href?: string;
    icon?: ImageWidget;
}

interface CarouselIslandProps {
    images: Image[];
}

export default function CarouselIsland({ images }: CarouselIslandProps) {
    const [index, setIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const visibleItems = 3;
    const itemWidth = 270;
    const totalVisible = Math.max(images.length - visibleItems + 1, 1);

    const next = () => setIndex((prev) => (prev + 1) % totalVisible);
    const prev = () =>
        setIndex((prev) => (prev - 1 + totalVisible) % totalVisible);

    useEffect(() => {
        const interval = setInterval(next, 500000);
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
        <div class="relative max-w-[1100px] lg:max-w-[1200px] mx-auto">
            <div class="flex align-center justify-start m-auto overflow-hidden max-w-[870px]">
                <div
                    ref={containerRef}
                    class="flex transition-transform duration-500 ease-in-out h-[504px]"
                    style={{
                        width: `1000px`,
                    }}
                >
                    {images.map((image, i) => (
                        <div
                            key={i}
                            class="flex items-center border-2 border-base-200 h-full mr-2 ml-2"
                            style={{
                                width: `${itemWidth}px`,
                            }}
                        >
                            <ServiceCard
                                title={image.title ?? `Imagem ${i + 1}`}
                                description={image.description ??
                                    "Descrição da imagem."}
                                image={image.src || ""}
                                alt={image.alt ?? `Imagem ${i + 1}`}
                                linkLabel={image.linkLabel}
                                href={image.href}
                                cardWidth="w-[320px] h-[504px]"
                                imageWidth="w-[320px]"
                                icon={image.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Botões desktop */}
            <div class="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between pointer-events-none px-4">
                <button
                    onClick={prev}
                    class="btn btn-circle bg-accent text-secondary pointer-events-auto"
                >
                    ❮
                </button>
                <button
                    onClick={next}
                    class="btn btn-circle bg-accent text-secondary pointer-events-auto"
                >
                    ❯
                </button>
            </div>

            {/* Dots */}
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

            {/* Botões mobile lado a lado no canto inferior direito */}
            <div class="md:hidden absolute -bottom-16 right-4 z-50 flex gap-2">
                <button
                    onClick={prev}
                    class="bg-accent text-secondary p-2 rounded-full shadow-md"
                >
                    <Icon id="ChevronLeft" size={24} strokeWidth={1} />
                </button>
                <button
                    onClick={next}
                    class="bg-accent text-secondary p-2 rounded-full shadow-md"
                >
                    <Icon id="ChevronRight" size={24} strokeWidth={1} />
                </button>
            </div>
        </div>
    );
}
