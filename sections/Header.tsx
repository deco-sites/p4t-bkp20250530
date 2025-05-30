import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "site/components/ui/Icon.tsx";
import LanguageSelector from "../islands/LanguageSelector.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
  src?: ImageWidget;
  alt?: string;
}

export interface Nav {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
      toggleIcon?: boolean;
    }[];
    button: CTA;
  };
}

export function LoadingFallback() {
  return (
    <nav class="fixed top-0 left-0 right-0 z-50 bg-base-100 w-full shadow-md">
      <div class="max-w-[1448px] mx-auto px-[55px] py-[20px] flex items-center justify-between">
        <div class="h-7 w-40 bg-neutral rounded animate-pulse" />
        <ul class="hidden lg:flex flex-1 justify-center gap-6 items-center">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i} class="h-5 w-16 bg-neutral rounded animate-pulse" />
          ))}
          <div class="flex gap-2">
            <div class="h-12 w-40 bg-neutral rounded animate-pulse" />
            <div class="h-10 w-10 bg-neutral rounded-full animate-pulse" />
          </div>
        </ul>
        <div class="lg:hidden h-10 w-10 bg-neutral rounded animate-pulse" />
      </div>
      <aside class="drawer-side fixed inset-0 z-50 hidden">
        <div class="flex flex-col h-full w-80 bg-base-100 p-4">
          <div class="flex justify-between items-center mb-4">
            <div class="h-7 w-40 bg-neutral rounded animate-pulse" />
            <div class="h-7 w-7 bg-neutral rounded-full animate-pulse" />
          </div>
          <div class="flex flex-col gap-4 flex-1 justify-center">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                class="h-6 w-32 bg-neutral rounded animate-pulse"
              />
            ))}
          </div>
          <div class="mt-auto flex flex-col gap-3">
            <div class="h-10 w-full bg-neutral rounded animate-pulse" />
            <div class="h-12 w-full bg-neutral rounded animate-pulse" />
          </div>
        </div>
      </aside>
    </nav>
  );
}

export default function Header({
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04",
    alt: "Logo",
  },
  navigation = {
    links: [
      { label: "Home", url: "/", toggleIcon: false },
      { label: "About us", url: "/", toggleIcon: false },
      { label: "Pricing", url: "/", toggleIcon: true },
      { label: "Contact", url: "/", toggleIcon: false },
    ],
    button: { id: "btn-1", href: "/", text: "Entrar", outline: false },
  },
}: Nav) {
  return (
    <nav class="drawer drawer-end fixed top-0 left-0 right-0 z-50 bg-base-100 w-full shadow-md">
      <input id="mobile-drawer-nav" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content max-w-[1448px] mx-auto w-full px-[55px] py-[20px] flex items-center justify-between overflow-x-hidden">
        <a href="/" class="flex-shrink-0 mr-3">
          <Image src={logo.src || ""} width={160} height={28} alt={logo.alt} />
        </a>
        <ul class="hidden lg:flex flex-1 justify-center gap-[clamp(20px,1.7vw,32px)] font-medium items-center">
          {navigation.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.url}
                aria-label={link.label}
                class="leading-4 text-secondary text-sm"
              >
                <span class="flex items-center gap-1">
                  {link.label}
                  {link.toggleIcon && (
                    <Icon id="ArrowRightUpLine" size={20} strokeWidth={1} />
                  )}
                </span>
              </a>
            </li>
          ))}
          <div class="ml-2 hidden lg:flex flex-col gap-[5px] xl:flex-row">
            <li class="relative">
              <LanguageSelector />
            </li>
            <a
              key={navigation.button.id}
              href={navigation.button.href ?? "#"}
              target={navigation.button.href.includes("http")
                ? "_blank"
                : "_self"}
              class="btn btn-sm btn-accent font-medium"
              style={{ width: "158px", height: "48px" }}
            >
              {navigation.button.text}
              <Image
                src={navigation.button.src || ""}
                width={18}
                height={18}
                alt={navigation.button.alt}
                decoding="async"
                loading="lazy"
              />
            </a>
          </div>
        </ul>
        <div class="lg:hidden flex items-center ml-auto">
          <label
            htmlFor="mobile-drawer-nav"
            class="flex lg:hidden btn btn-ghost drawer-button text-secondary p-0"
          >
            <Icon id="StylizedMenu" size={24} strokeWidth={0.1} />
          </label>
        </div>
      </div>

      <aside class="drawer-side fixed inset-0 z-50 overflow-x-hidden">
        <label htmlFor="mobile-drawer-nav" class="drawer-overlay" />
        <div class="flex flex-col h-full w-80 bg-base-100 text-base-content p-4">
          <div class="flex items-center justify-between border-b border-accent pb-4">
            <a href="/">
              <Image
                src={logo.src || ""}
                width={160}
                height={28}
                alt={logo.alt}
                decoding="async"
                loading="lazy"
              />
            </a>
            <label htmlFor="mobile-drawer-nav" class="cursor-pointer">
              <Icon id="CloseLine" size={24} strokeWidth={0.1} />
            </label>
          </div>
          <div class="flex-1 flex flex-col justify-center gap-6">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                class="text-2xl font-medium text-secondary flex items-center"
              >
                {link.label}
                {link.toggleIcon && (
                  <Icon id="ArrowRightUpLine" size={20} strokeWidth={1} />
                )}
              </a>
            ))}
          </div>
          <div class="flex flex-col gap-3 mt-auto">
            <LanguageSelector />
            <a
              key={navigation.button.id}
              href={navigation.button.href ?? "#"}
              target={navigation.button.href.includes("http")
                ? "_blank"
                : "_self"}
              class="btn btn-sm btn-accent font-medium w-full"
              style={{ height: "48px" }}
            >
              {navigation.button.text}
              <Image
                src={navigation.button.src || ""}
                width={18}
                height={18}
                alt={navigation.button.alt}
              />
            </a>
          </div>
        </div>
      </aside>
    </nav>
  );
}
