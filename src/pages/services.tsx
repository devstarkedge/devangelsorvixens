import Link from "next/link";
import Image from "next/image";
import IconEye from "@/components/icons/IconEye";
import RootLayout from "@/components/layouts/RootLayout";
import RoughIllustration from "@/components/others/RoughIllustration";
import RoughWaveIllustration from "@/components/others/RouhWaveIllustration";

import sharpEdge from "@/assets/illustrations/sharp-edge.svg";

const services = [
  {
    title: "Brand Development",
    description:
      "Establishing a strong online presence is crucial for achieving success on OnlyFans. At Angels or Vixens, we specialize in creating unique and personalized brands for our models. We believe that highlighting each model's individuality and authenticity is key for any OnlyFans account to flourish.",
  },
  {
    title: "Account Management",
    description:
      "Building a formidable online presence is an absolute cornerstone when it comes to attaining success on OnlyFans. At Angels or Vixens, we specialize in meticulously curating distinct and personalized brands for every Angels or Vixens model we work with. We firmly believe that fostering and showcasing each model's unique personality and authenticity is the single most vital pathway to a thriving Only Fans account.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Effective marketing and consistent promotion play a crucial role in attaining heightened visibility, subscriber growth, and financial success on OnlyFans. At Angels or Vixens, we are committed to providing exceptional marketing and promotion strategies to propel our models to the pinnacle of success on OnlyFans.",
  },
];

/**
 * Renders the Services component.
 *
 * @return {ReactNode} The rendered Services component.
 */
export default function Services() {
  return (
    <RootLayout page="services" metadata={{ title: "Services" }}>
      <div className="w-full bg-black/70 pt-28 backdrop-blur text-white min-h-screen mx-auto text-center">
        <div className="sm:h-[712px] h-[500px] w-full bg-black flex justify-start md:justify-center md:pt-0 pt-32 flex-col items-center">
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[354px] sm:max-w-[554px] mb-2 md:-mt-44 w-full"
          ></div>
          <div
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[270px] sm:max-w-[443px] mb-2 w-full"
          ></div>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="ease-out-sine"
            className="sm:text-2xl text-3xl lg:text-[28px] tracking-tight sm:tracking-normal font-black leading-[1] sm:leading-[0.7] uppercase"
          >
            Angels or vixens <br className="sm:hidden" />
            <span className="text-sand">onlyfans agency</span>
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="ease-out-sine"
            className="lg:text-[200px] sm:text-[130px] xs:text-[80px] text-[70px] mt-2 uppercase flex flex-col gap-5 justify-center items-center text-center tracking-tighter font-black leading-[0.73]"
          >
            Services
          </h1>

          <div
            data-aos="fade-right"
            data-aos-delay="900"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[270px] sm:max-w-[443px] mt-2 w-full"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[354px] sm:max-w-[554px] mt-2 w-full"
          ></div>
        </div>

        <div className="w-full relative py-28">
          <div className="absolute w-full -top-20 md:-top-16">
            <RoughIllustration />
            <RoughIllustration className="rotate-180" />
          </div>

          <h2 className="text-3xl text-[#217182] mx-auto font-black">WHAT WE DO</h2>

          <div className="grid max-w-8xl grid-cols-1 md:grid-cols-3 gap-5 mx-auto mt-12 px-4">
            {services.map((service, index) => (
              <ServiceCard
                data-aos="fade-up"
                data-aos-delay={`${200 * index}`}
                data-aos-duration="500"
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>

        <div className="w-full py-16 md:pt-28 md:pb-64 relative bg-white h-fit flex justify-center">
          <div className="absolute w-full -top-20 z-[2]">
            <RoughWaveIllustration />
            <RoughWaveIllustration className="rotate-180" />
          </div>

          <div className="z-[3] w-full text-center flex flex-col items-center px-4">
            <h1 className="lg:text-[50px] md:text-[40px] sm:text-[32px] text-2xl leading-tight font-black  text-[#217182]">
              ... AND THERE&apos;S A LOT MORE THAT&nbsp;
              <br className="sm:block hidden" />
              ANGELS OR VIXENS CAN DO FOR YOU
            </h1>

            <p className="lg:text-[25px] md:text-lg text-base mt-2 tracking-tight leading-snug font-black text-neutral-900 md:text-white max-w-[900px] w-full mx-auto">
              COMPLETE OUR APPLICATION AND ONE OF OUR RECRUITERS WILL SCHEDULE A
              CALL AND DISCUSS IN THOROUGH DETAIL ALL OF OUR SERVICES AND SOME
              EXTRA BONUSES!
            </p>


            <Link
              href="/apply"
              className="transition-colors lg:mt-14 md:mt-24 mt-10 duration-300 text-sm xs:text-base sm:text-xl font-medium bg-black md:bg-ocean text-[#217182] md:text-black md:hover:bg-white hover:bg-ocean hover:text-black md:hover:text-[#217182] py-4 uppercase w-fit text-center flex items-center justify-center mx-auto px-10 tracking-tight xl:-rotate-[10deg] lg:-rotate-[15deg] md:-rotate-[17deg]"
            >
              Apply to Angels or Vixens
            </Link>

          </div>

          <div className="overflow-hidden w-[300%] top-0 h-full md:h-[570px] absolute hidden md:flex justify-center mx-auto">
            <Image
              src={sharpEdge}
              alt="sharp edge shape"
              className="w-[80%] ml-auto object-fill h-full md:h-[550px] z-[1] -scale-x-100 rotate-180"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

function ServiceCard(
  props: React.ComponentPropsWithRef<"div"> & {
    title: string;
    description: string;
  }
) {
  return (
    <div
      {...props}
      className="border-8 border-white bg-white/20 cursor-default hover:border-ocean group duration-300 transition-colors w-full h-full px-4 py-6 flex flex-col items-center gap-y-3 text-center"
    >
      <IconEye className="w-12 h-auto group-hover: text-[#217182] duration-300 transition-colors" />


      <h2 className=" text-[#217182] font-bold uppercase tracking-tighter text-2xl md:text-xl lg:text-2xl">
        {props.title}
      </h2>

      <p className="text-white text-base md:text-sm lg:text-base tracking-tight">
        {props.description}
      </p>

      <IconEye className="w-12 h-auto group-hover:text-[#217182] duration-300 transition-colors" />

    </div>
  );
}
