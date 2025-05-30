import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";

interface Address {
  address: string;
}

export interface CTA {
  id?: string;
  href: string;
  text: string;
}

interface Newsletter {
  title: string;
  placeholder: string;
  CTANewsletter: CTA;
}

interface servicesNewsletter {
  label?: string;
  href?: string;
  iconToggle?: boolean;
}

interface Media {
  alt?: string;
  href?: string;
  url?: ImageWidget;
}

interface Props {
  logo: Media;
  address?: Address[];
  contact?: string;
  newsletter?: Newsletter;
  services?: servicesNewsletter[];
  copyrightText?: string;
  socialMediaIcons?: Media[];
  background?: Media;
}

export default function Footer({
  logo,
  address = [
    { address: "R. Coronel José Eusébio, 95 – Higienópolis, São Paulo, SP" },
    { address: "Segunda a Sexta, das 09h às 18h" },
  ],
  contact = "contato@people4tech.com.br",
  newsletter,
  services = [
    { label: "Sobre", iconToggle: true },
    { label: "Blog", iconToggle: true },
    { label: "Parceiros", iconToggle: true },
    { label: "Contato", iconToggle: true },
    { label: "Suporte", iconToggle: true },
    { label: "Política de Privacidade", iconToggle: true },
  ],
  copyrightText = "© 2025 Todos os direitos reservados",
  socialMediaIcons = [
    { url: "https://www.facebook.com/people4tech/" },
    { url: "https://www.instagram.com/people4tech/" },
    { url: "https://www.linkedin.com/company/people4tech/" },
    { url: "https://www.whatsapp.com/people4tech/" },
  ],
  background,
}: Props) {
  return (
    <footer class="bg-base border-t border-secondary border-opacity-30 pt-6 md:pt-14 pb-10 overflow-x-hidden">
      <div class="grid grid-cols-1 lg:flex lg:justify-between gap-10 px-4 md:px-10">
        <div class="order-2 lg:order-1 w-full lg:max-w-[364px]">
          <Image
            width={160}
            height={28}
            class="object-fit mb-8"
            src={logo?.url || ""}
            alt={logo?.alt}
            decoding="async"
            loading="lazy"
          />
          <ul>
            {address.map((info) => {
              return (
                <li class="flex gap-2 text-secondary mb-4 text-xs items-top">
                  <p class="w-4">
                    <Icon
                      id="mapPinWhite"
                      size={20}
                      strokeWidth={1}
                    />
                  </p>
                  {info?.address}
                </li>
              );
            })}
            <a
              href={`mailto:${contact}`}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block relative group overflow-hidden mt-4"
            >
              <span class="inline-block relative group overflow-hidden text-primary font-medium">
                {contact}
                <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left">
                </span>
              </span>
            </a>
          </ul>
        </div>

        <div class="order-1 lg:order-2 w-full flex justify-center">
          <div class="w-full max-w-[576px] px-2">
            <h2 class="text-secondary text-xl font-semibold mb-4 text-left">
              {newsletter?.title}
            </h2>
            <form class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
              <div class="relative w-full group">
                <input
                  type="email"
                  placeholder="Insira seu melhor email"
                  class="p-3 text-sm w-full h-[56px] min-w-[225px] bg-accent text-secondary border-secondary/30 focus:outline-none"
                />
                <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left">
                </span>
              </div>
              <a
                id={newsletter?.CTANewsletter.id}
                href={newsletter?.CTANewsletter.href ?? "#"}
                target={newsletter?.CTANewsletter.href.includes("http")
                  ? "_blank"
                  : "_self"}
                class="text-sm font-semibold h-[56px] px-4 py-2 w-full sm:w-[153px] flex items-center justify-center gap-1 bg-success text-secondary hover:bg-opacity-75"
              >
                {newsletter?.CTANewsletter.text}
                <Icon id="ArrowRighWhite" size={20} strokeWidth={1} />
              </a>
            </form>
          </div>
        </div>

        <div class="order-3 lg:order-3 w-full lg:max-w-[314px]">
          <div class="grid grid-cols-2 gap-4 px-2">
            {services.map((service) => (
              <a
                href={service?.href}
                class="text-secondary text-sm group"
              >
                <span class="inline-flex gap-1 relative overflow-hidden">
                  <p class="pb-1">{service?.label}</p>
                  {service?.iconToggle
                    ? <Icon id="ArrowRightUpLine" size={20} strokeWidth={1} />
                    : ""}
                  <span class="absolute bottom-0 left-0 h-[2px] w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-[500ms] origin-left">
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div class="px-4 md:px-10">
        <div class="flex flex-col md:flex-row justify-between items-center border-t border-secondary border-opacity-30 mt-8 pt-6 gap-4 md:gap-0">
          <p class="text-base-300 text-sm text-center md:text-left">
            {copyrightText}
          </p>
          <ul class="flex gap-5">
            {socialMediaIcons.map((icon) => (
              <li>
                <a href={icon.href} target="_blank">
                  <Image
                    width={24}
                    height={24}
                    class="object-fit"
                    src={icon?.url ?? ""}
                    alt={icon.alt}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div class="relative w-full mt-8 px-4 md:px-36">
        <Image
          src={background?.url || ""}
          alt={background?.alt}
          width={1368}
          height={128}
          class="hidden lg:block w-full h-[128px]"
        />
        <Image
          src={background?.url || ""}
          alt={background?.alt}
          width={341}
          height={32}
          class="block lg:hidden w-full h-[32px]"
        />
      </div>
    </footer>
  );
}
