import Link from "next/link";
import Logo from "@/components/others/Logo";
import { useWindowScroll } from "@mantine/hooks";
import TinyLinkButton from "@/components/others/TinyLinkButton";

import { PageNameType } from "@/types";

const navigations = [
  { page: "Home", url: "/" },
  { page: "About", url: "/about" },
  { page: "Services", url: "/services" },
  { page: "Careers", url: "/careers" },
  { page: "FAQ", url: "/faq" },
];

export default function Header({ page, showAt = -1 }: PageNameType) {
  const [scroll] = useWindowScroll();

  return (
    <nav
      className={`w-full flex flex-col items-center fixed top-0 right-0 left-0 duration-500 transition-colors z-[99] pt-3 pb-5 gap-y-1 px-4
      ${scroll.y > showAt ? "bg-black/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-4xl relative w-full">
        <Link
          href="/"
          className="mx-auto w-fit h-fit flex outline-0 outline-none"
        >
          <Logo />
        </Link>

        <TinyLinkButton href="/apply" classnames="absolute top-0 right-0 !px-2">
          <span className="md:flex hidden">Apply to Angels or Vixens</span>
          <span className="md:hidden text-[10px]">Apply now</span>
        </TinyLinkButton>
      </div>

      <div className="mx-auto max-w-4xl relative w-full flex justify-center items-center gap-x-4 xs:gap-x-5 uppercase text-xs">
        {navigations.map((navigation) => (
          <Link
            key={navigation.page}
            href={navigation.url}
            className={`text-sm transition-colors font-light sm:font-medium duration-300 w-fit text-center
            ${
              page?.toLowerCase() === navigation.page.toLowerCase()
                ? "text-[#EDC1A9]"
                : "text-white hover:text-[#EDC1A9]"
            }`}
          >
            {navigation.page}
          </Link>
        ))}
      </div>
    </nav>
  );
}
