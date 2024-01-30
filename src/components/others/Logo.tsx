import Image from "next/image";

import logo from "@/assets/logo/logo.png";

export default function Logo() {
  return (
    <div className="h-12 w-64 overflow-hidden flex justify-center items-center">
      <Image
        src={logo}
        width={280}
        height={80}
        quality={100}
        alt="woman angel on left and woman devil on right"
        className="object-contain w-full h-auto object-center"
      />
    </div>
  );
}
