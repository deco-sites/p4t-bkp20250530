import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowsPointingOut"
  | "Bars3"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "ChevronDown"
  | "CreditCard"
  | "Deco"
  | "Diners"
  | "Discord"
  | "Discount"
  | "Elo"
  | "Facebook"
  | "FilterList"
  | "Heart"
  | "Instagram"
  | "Linkedin"
  | "Minus"
  | "MapPin"
  | "MagnifyingGlass"
  | "Mastercard"
  | "Message"
  | "Phone"
  | "Pix"
  | "Plus"
  | "QuestionMarkCircle"
  | "Return"
  | "Ruler"
  | "ShoppingCart"
  | "Star"
  | "Tiktok"
  | "Trash"
  | "Truck"
  | "Twitter"
  | "User"
  | "Visa"
  | "WhatsApp"
  | "XMark"
  | "ArrowRightUpLine"
  | "EarthLine"
  | "DropDownArrows"
  | "CloseLine"
  | "StylizedMenu"
  | "ArrowRightUpLinebutton"
  | "ArrowRighWhite"
  | "mapPinWhite"
  | "ArrowGreen"
  | "SearchIcon"
  | "Paperclip"
  | "ArrowLeftGreen"
  | "MapPin"
  | "ArrowLeftGreenBox"
  | "Protection"
  | "WhatsAppIcon"
  | "ArrowLeftHero"
  | "Zoom";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  /**
   * Symbol id from element to render. Take a look at `/static/icons.svg`.
   *
   * Example: <Icon id="Bell" />
   */
  id: AvailableIcons;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
