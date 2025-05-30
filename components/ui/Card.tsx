import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export default function Card({
    fixedLabel,
    title,
    description,
    image,
    alt,
    linkLabel,
    href,
    cardWidth,
    imageWidth,
}: {
    fixedLabel?: string;
    title: string;
    description: string;
    image: ImageWidget;
    alt?: string;
    linkLabel?: string;
    href?: string;
    cardWidth?: string;
    imageWidth?: string;
}) {
    return (
        <div
            class={`flex justify-center relative group overflow-hidden ${cardWidth}`}
        >
            <Image
                width={140}
                height={140}
                class={`h-full z-10 ${imageWidth}`}
                sizes="(max-width: 795px) 100vw, 30vw"
                src={image}
                alt={alt}
                decoding="async"
                loading="lazy"
            />
            <div
                class={`absolute inset-0 bg-base-200 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0 z-10`}
            />
            <div class="absolute top-4 left-4 text-2xl font-bold text-secondary ">
                {fixedLabel}
            </div>
            <div class="absolute inset-0 flex flex-col justify-start items-start bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 text-left p-3 md:p-6 bg-base-200">
                <p class="text-xl md:text-[14px] lg:text-xl font-semibold text-secondary mb-1">
                    {title}
                </p>
                <p class="text-base md:text-[12px] md:leading-[20px] text-[13px] leading-[18px] lg:text-base text-secondary">
                    {description}
                </p>
                <div class="absolute bottom-3 right-3 md:bottom-6 md:right-6">
                    <div class="relative group inline-block">
                        <a
                            href={href}
                            target="_blank"
                            class="flex items-center justify-center text-[16px] text-primary py-[6px]"
                        >
                            <span class="mr-3">{linkLabel}</span>
                            <Icon id="ArrowGreen" size={20} strokeWidth={1} />
                        </a>
                        <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left">
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
