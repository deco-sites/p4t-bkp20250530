import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

export interface CTA {
    id?: string;
    href: string;
    text: string;
}

export interface Props {
    title?: string;
    /** @format textarea */
    description?: string;
    image?: ImageWidget;
    alt?: string;
    cta?: CTA[];
    disableSpacing?: {
        top?: boolean;
        bottom?: boolean;
    };
}

const DEFAULT_IMAGE =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/772e246e-1959-46ac-a309-3f25ab20af6f";

export default function ImageWithParagraph({
    title = "Here's an intermediate size heading you can edit",
    description =
        "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
    image = DEFAULT_IMAGE,
    alt = "",
    cta = [
        { id: "change-me-1", href: "/", text: "Change me" },
        { id: "change-me-2", href: "/", text: "Change me" },
    ],
}: Props) {
    return (
        <div class="lg:max-w-full lg:mx-auto text-sm md:mb-32 xl:mt-14">
            <div
                className={`flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-4 text-left items-center z-10 pb-2 md:pb-0`}
            >
                <div
                    id="ImageParallax"
                    class="overflow-hidden min-w-full md:min-w-[50%]"
                >
                    <Image
                        width={795}
                        height={476}
                        class="object-fit z-10 w-full"
                        sizes=" 100vw, 30vw"
                        src={image}
                        alt={alt}
                        decoding="async"
                        loading="lazy"
                    />
                </div>
                <div class="w-full max-w-[600px] px-4 md:w-1/2 space-y-2 md:space-y-4 md:max-w-xl gap-4 z-10">
                    <p class="text-[45px] font-normal leading-snug text-left">
                        {title}
                    </p>
                    <p class="leading-normal text-base-300 text-base text-left">
                        {description}
                    </p>
                    <div class="flex gap-3 pt-4 justify-left">
                        {cta?.map((item) => (
                            <a
                                key={item?.id}
                                id={item?.id}
                                href={item?.href}
                                target={item?.href.includes("http")
                                    ? "_blank"
                                    : "_self"}
                                className="font-medium btn btn-primary px-6"
                            >
                                {item?.text}
                                <Icon
                                    id="ArrowRightUpLinebutton"
                                    size={20}
                                    strokeWidth={0.1}
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
