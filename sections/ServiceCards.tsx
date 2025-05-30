import { ImageWidget } from "apps/admin/widgets.ts";
import CardIslandsServices from "../islands/CardIslandsServices.tsx";

export interface Image {
    src?: ImageWidget;
    alt?: string;
    title?: string;
    description?: string;
    linkLabel?: string;
    href?: string;
    icon?: ImageWidget;
}

export interface ServiceCardsProps {
    images: Image[];
}

export default function ServiceCards({ images }: ServiceCardsProps) {
    return (
        <div class="px-4 py-0 pb-24 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <CardIslandsServices
                images={images}
            />
        </div>
    );
}
