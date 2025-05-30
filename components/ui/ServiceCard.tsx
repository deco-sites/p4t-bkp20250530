import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export default function ServiceCard({
    title,
    description,
    image,
    alt,
    linkLabel,
    href,
    cardWidth = "w-[320px]",
    icon,
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
    icon?: ImageWidget;
}) {
    return (
        <div
            class={`group relative overflow-hidden ${cardWidth} max-h-[500px] h-full`}
        >
            <div class="overflow-hidden h-full max-h-[500px]">
                <Image
                    width={320}
                    height={500}
                    src={image}
                    alt={alt}
                    decoding="async"
                    loading="lazy"
                    class="w-full object-cover transition-transform duration-500 group-hover:scale-150 h-full"
                />
            </div>

            <div class="absolute bottom-0 left-0 p-8 text-[27px] font-medium text-secondary z-20 group-hover:hidden">
                {title}
            </div>

            <div class="absolute inset-0 flex flex-col items-start text-left p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60 z-30">
                {icon && (
                    <div class="mb-4">
                        <Image src={icon} width={32} height={32} alt="Ícone" />
                    </div>
                )}

                <div class="flex flex-col h-full justify-end items-start text-left">
                    <p class="text-[27px] font-medium text-secondary mb-2">
                        {title}
                    </p>
                    <p class="text-base text-secondary font-normal mb-4">
                        {description}
                    </p>

                    {href && linkLabel && (
                        <div class="relative group inline-block">
                            <a
                                href={href}
                                target="_blank"
                                class="flex items-center justify-center text-[16px] text-primary py-[6px]"
                            >
                                <span class="mr-3">{linkLabel}</span>
                                <Icon
                                    id="ArrowGreen"
                                    size={20}
                                    strokeWidth={1}
                                />
                            </a>
                            <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
