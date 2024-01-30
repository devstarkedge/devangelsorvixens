import {
  IconBrandX,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Link from "next/link";
import TinyLinkButton from "@/components/others/TinyLinkButton";
import WavyIllustration from "@/components/others/WavyIllustration";

const navigations = [
  { page: "Home", url: "/" },
  { page: "About", url: "/about" },
  { page: "Services", url: "/services" },
  { page: "Careers", url: "/careers" },
  { page: "FAQ", url: "/faq" },
];

const socials = [
  {
    name: "Instagram",
    icon: IconBrandInstagram,
    url: "https://www.instagram.com/angelsorvixens",
  },
  {
    name: "Twitter",
    icon: IconBrandX,
    url: "https://twitter.com/angelsorvixens",
  },
  {
    name: "Telegram",
    icon: IconBrandTelegram,
    url: "https://t.me/AngelsorVixens",
  },
  {
    name: "WhatsApp",
    icon: IconBrandWhatsapp,
    url: "https://wa.me/18058261080",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full relative h-fit pb-6 bg-black text-white">
      <div className="w-full absolute -top-12">
        <WavyIllustration className="!h-12" />
        <WavyIllustration className="rotate-180 !h-40" />
      </div>

      <div className="w-full px-4 pt-36 sm:pt-44 lg:pt-64 flex flex-col justify-center gap-y-6">
        <div className="mx-auto max-w-fit relative w-full flex justify-center items-center gap-x-5 uppercase text-xs">
          {navigations.map((navigation) => (
            <Link
              key={navigation.page}
              href={navigation.url}
              className="text-sm transition-colors duration-300 text-white hover:text-ocean font-normal"
            >
              {navigation.page}
            </Link>
          ))}
        </div>

        <div className="mx-auto max-w-fit relative w-full flex justify-center items-center gap-x-5 uppercase text-xs">
          {socials.map((social) => (
            <Link
              target="_blank"
              rel="noreferrer"
              key={social.name}
              href={social.url}
            >
              <social.icon className="h-7 w-7 text-white stroke-1 hover:text-ocean duration-300 transition-colors" />
            </Link>
          ))}
        </div>

        <div className="w-fit max-w-fit flex justify-center mx-auto items-center flex-wrap gap-2">
          <TinyLinkButton href="mailto:info@example.com" className="bg-[#217182] text-[#EDC1A9] p-1">
            Contact us
          </TinyLinkButton>

          <TinyLinkButton href="/apply" className="bg-[#217182] text-[#EDC1A9] p-1">
            Apply now
          </TinyLinkButton>
        </div>

      </div>

      <div className="px-4 mt-10">
        <p className="text-xs text-center mx-auto text-white max-w-fit font-normal tracking-tight uppercase !leading-relaxed">
          © {year}{" "}
          <Link href="/" className="text-sand-light hover:text-white">
            ANGELS OR VIXENS
          </Link>{" "}
          MANAGEMENT AGENCY.
          <br className="md:hidden" /> All rights reserved | OnlyFans Management
          Agency
        </p>
      </div>
    </footer>
  );
}
