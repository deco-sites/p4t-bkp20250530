import { useEffect } from "preact/hooks";
import { scroll } from "motion";
import Component from "site/components/ui/ImageWithParagraph.tsx";
import type { Props as componentProps } from "site/components/ui/ImageWithParagraph.tsx";

export default function ImageWithParagraph(props: componentProps) {
    useEffect(() => {
        const isDesktop = window.matchMedia("(min-width: 1280px)").matches;
        if (!isDesktop) return;

        const image = document.getElementById("ImageParallax");
        if (!image) return;

        scroll(
            (progress: number) => {
                const width = 100 - 90 * progress;
                image.style.width = `${width}%`;
                console.log(progress, "progress");
                console.log(width, "width");
            },
            {
                target: image,
                offset: ["start end", "end start"],
            },
        );
    }, []);

    return <Component {...props} />;
}
