import { ImageWidget } from "apps/admin/widgets.ts";
import Hero from "./Hero.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
    title?: string;
    description?: string;
    placement?: "left" | "right";
    imageLeft?: ImageWidget[];
    imageRight?: ImageWidget[];
    cta?: CTA[];
}

export interface CTA {
    id?: string;
    href: string;
    text: string;
    outline?: boolean;
    toggleIcon?: boolean;
}

export default function Section({
    title = "Conectando pessoas através da <tecnologia>",
    description =
        "A People4Tech é uma empresa especializada em tecnologia da informação que oferece serviços de desenvolvimento de sistemas, outsourcing, alocação de squads ágeis e consultoria.",
    cta = [
        {
            text: "Saiba Mais",
            href: "/",
        },
        {
            text: "Entre em contato",
            href: "/",
        },
    ],
    imageLeft,
    imageRight,
}: Props) {
    return (
        <div class="relative bg-gifWave bg-no-repeat bg-cover mt-20 overflow-hidden">
            <div class="bg-black bg-opacity-70 flex justify-between z-10 md:py-16 pt-16">
                <div class="relative mx-auto">
                    <div class="hidden xl:flex flex-col gap-12 absolute top-1/2 -translate-y-1/2 2xl:left-[-20%] left-0  lg  z-0 pointer-events-none">
                        {imageLeft?.map((img, index) => (
                            <Image
                                width={112}
                                class={`opacity-0 scale-50 animate-spreadLeft delay-${
                                    index * 100
                                } ${index % 2 === 0 ? "ml-16" : ""}`}
                                src={img}
                                alt={img}
                                decoding="async"
                                loading="lazy"
                            />
                        ))}
                    </div>

                    <Hero title={title} description={description} cta={cta} />

                    <div class="hidden xl:flex flex-col gap-12 absolute top-1/2 -translate-y-1/2 2xl:right-[-20%] right-0 z-0 pointer-events-none">
                        {imageRight?.map((img, index) => (
                            <Image
                                width={112}
                                class={`opacity-0 scale-50 animate-spreadRight delay-${
                                    index * 100
                                } ${index % 2 !== 0 ? "ml-16" : ""}`}
                                src={img}
                                alt={img}
                                decoding="async"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
