import "swiper/css";
import {
  IconStar,
  IconClock,
  IconUsersGroup,
  IconCurrencyDollar,
  IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import RootLayout from "@/components/layouts/RootLayout";
import VideoPlayer from "@/components/others/VideoPlayer";
import RoughIllustration from "@/components/others/RoughIllustration";

import stat1 from "@/assets/image/stats/1.png";
import stat2 from "@/assets/image/stats/2.png";
import stat3 from "@/assets/image/stats/3.png";
import stat4 from "@/assets/image/stats/4.png";
import stat5 from "@/assets/image/stats/5.png";
import badge from "@/assets/image/star-with-text.png";

const videoUrl = "/videos/hero-bg-video.mp4";
const videoUrl2 = "/videos/woman-swimming.mp4";
const videoUrl3 = "/videos/welcome-to-angels-or-vixens.mov";

const stats = [
  { image: stat1, alt: "stat1" },
  { image: stat2, alt: "stat2" },
  { image: stat3, alt: "stat3" },
  { image: stat4, alt: "stat4" },
  { image: stat5, alt: "stat5" },
];

const benefits = [
  {
    title: "$4.5M",
    description: "ESTIMATED ANGELS OR VIXENS ONLYFANS MODEL TURNOVER",
    icon: IconCurrencyDollar,
  },
  {
    title: "10+",
    description: "ACTIVE ANGELS OR VIXENS MANAGEMENT EMPLOYEES",
    icon: IconUsersGroup,
  },
  {
    title: "1.2M",
    description: "FOLLOWERS GENERATED BY ANGELS OR VIXENS AGENCY",
    icon: IconStar,
  },
  {
    title: "10k+",
    description: "TOTAL HOURS SAVED BY ANGELS OR VIXENS ONLYFANS MANAGERS",
    icon: IconClock,
  },
];

const testimonials = [
  {
    comment:
      "Angels or Vixens has completely changed the way I view social media. I learned that I can monetise everything that I publish, whether it’s pictures on social media, or Tik Tok videos.",
    client: "Coco Chanel",
  },
  {
    comment:
      "I’ve always had people liking my bikini pictures and receiving a lot of DMs. I never knew that people would actually be interested in paying for exclusive pictures and content. Thank you, Angels or Vixens.",
    client: "Amelia Olivica",
  },
];

export default function Home() {
  return (
    <RootLayout showAt={200} page="home" metadata={{ title: "Home" }}>
      {/* Hero section */}
      <div className="md:h-[820px] h-[93vh] relative overflow-hidden w-full bg-black flex justify-start md:justify-center flex-col items-center">
        <VideoPlayer src={videoUrl} />

        <div className="h-full w-full bg-black/50 px-4 tracking-tighter text-center pb-12 pt-48 md:pt-32 flex flex-col items-center justify-center relative z-[2]">
          <h3 className="font-bold text-lg sm:text-2xl leading-[0.8]">
            NEED HELP GROWING YOUR
          </h3>

          <h1 className="font-thin text-[70px] xs:text-[100px] sm:text-[120px] md:text-[140px] mt-2 leading-[0.8] text-white">
            OnlyFans<span className=" text-[#EDC1A9] font-normal">?</span>
          </h1>

          <p className="md:text-xl sm:text-lg text-base font-normal tracking-tight text-neutral-400 mt-8 max-w-lg">
            Angels or Vixens is the world’s best OnlyFans management and
            marketing agency
          </p>

          <Link
            href="/apply"
            className="outline-0 outline-none uppercase duration-300 transition-colors w-full px-6 max-w-[200px] mt-8 md:mt-12 md:text-lg text-base py-3 bg-[#217182] text-[#EDC1A9] font-medium"
          >
            Apply now
          </Link>

          <div className="mt-12 relative flex justify-center items-center">
            <IconStarFilled className="text-[#217182] shrink-0 absolute h-auto w-12" />
            <Image src={badge} alt="badge" className="shrink-0" />
          </div>
        </div>
      </div>

      <div className="bg-black relative w-full py-[72px] md:py-28">
        <RoughIllustration className="absolute w-full invert -top-[72px] z-[2]" />

        <div className="w-full flex flex-col items-center px-4">
          <div className="flex flex-col items-center gap-y-2">
            <h2 className=" text-[#217182] font-light text-xl md:text-3xl tracking-tight uppercase leading-[0.9]">
              WHY CHOOSE US
            </h2>
            <div className="md:w-20 w-16 border-b border-ocean"></div>
          </div>

          <p className="text-center text-white/70 text-base md:text-lg max-w-2xl tracking-tight mt-2 font-light">
            Our goal is to make things as easy as possible for you, having you
            focus on what you do best, which is entertain your fan base.
          </p>

          <div className="grid max-w-8xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-6 mx-auto mt-[72px] md:mt-24">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="w-full uppercase text-center flex flex-col justify-center items-center"
              >
                <div className="bg-sand-alt p-3 rounded text-black">
                  <benefit.icon className="h-auto w-12" />
                </div>

                <p className="font-extrabold mt-6 text-4xl text-[#EDC1A9] sm:text-5xl">
                  {benefit.title}
                </p>

                <p className="text-xl font-light mt-3">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="w-full flex flex-col items-center max-w-4xl mt-12 md:mt-24">
            <h1 className="font-extralight !leading-[1.2] text-2xl sm:text-3xl text-center text-[#EDC1A9] lg:text-5xl uppercase">
              We dedicated to getting our models into the{" "}
              <span className="text-[#B6652F] font-medium">top 0.5%</span> ensuring a
              life of{" "}
              <span className="text-[#B6652F] font-medium">
                luxury and prosperity
              </span>
            </h1>

            <Link
              href="/services"
              className="transition-colors duration-300 bg-[#217182] hover:bg-white text-[#EDC1A9] hover:text-black text-sm xs:text-base sm:text-xl font-medium py-4 uppercase text-center flex items-center justify-center px-6 tracking-normal outline-none outline-0 max-w-[240px] w-full mt-10"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white relative w-full min-h-fit flex flex-col justify-center items-center overflow-hidden">
        <RoughIllustration className="absolute w-full rotate-180 invert top-0 z-[3]" />

        <VideoPlayer src={videoUrl2} />

        <div className="w-full h-full py-32 md:py-60 flex justify-center bg-black/75 px-4 sm:px-[5%] z-[1]">
          <div className="border-b-4 border-white p-8 sm:p-12 flex flex-col items-center justify-center md:p-16 text-center bg-ocean md:max-w-xl lg:max-w-3xl w-full text-neutral-900">
            <div className="flex flex-col items-center gap-y-1">
              <h2 className="text-sand-alt  font-light text-xl md:text-3xl tracking-tight uppercase leading-[0.9]">
                About us
              </h2>

              <div className="md:w-16 w-10 border-b border-[#EDC1A9]"></div>
            </div>

            <p className="text-lg md:text-[22px] font-light mt-4 text-[#EDC1A9]">
              <span className="font-semibold">Angels or Vixens</span> is an
              advertising and Onlyfans marketing agency that focuses on creating
              content, a brand and name for their models.
            </p>


            <Link
              href="/about"
              className="transition-colors duration-300 bg-white hover:text-black hover:bg-white text-[#EDC1A9] hover:text-[#EDC1A9] text-sm xs:text-base sm:text-xl font-medium py-4 uppercase w-fit text-center flex items-center justify-center px-8 tracking-normal outline-none outline-0 mt-10"
            >
              Learn more
            </Link>

          </div>
        </div>

        <RoughIllustration className="absolute w-full -bottom-px z-[2]" />
        <RoughIllustration className="absolute w-full invert bottom-1 lg:bottom-2 z-[1]" />
      </div>


      <div className="bg-[#217182] relative w-full flex pt-12 md:pt-24 px-4 flex-col justify-center items-center overflow-hidden">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-[#EDC1A9] text-3xl font-black text-center">
            HERE’S WHY WE ARE GREAT
          </h1>
          <p className="md:text-lg font-light mt-2 text-base text-center text-white">
            <span className="text-[#EDC1A9] font-semibold">
              Angels or Vixens
            </span>{" "}
            is an Onlyfans advertising marketing agency, which focuses on all of
            the admin processes in the business, and supports you to be the
            amongst the top 1% content creators.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto mt-12 h-96 text-black text-center bg-[#F2F2F2] rounded-xl border-[#F2F2F2] border-[30px]">
          <Swiper
            loop
            breakpoints={{
              1024: {
                spaceBetween: 20,
                slidesPerView: 3,
              },
              768: {
                spaceBetween: 10,
                slidesPerView: 2.1,
              },
              0: {
                spaceBetween: 10,
                slidesPerView: 1.1,
              },
            }}
            className="h-full"
          >
            {stats.map((stat) => (
              <SwiperSlide
                key={stat.alt}
                className="h-full w-full overflow-hidden"
              >
                <Image
                  alt={stat.alt}
                  src={stat.image}
                  className="w-full h-full object-contain hover:scale-90 duration-300 object-center relative"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* <div className="md:py-24 py-12 text-black w-full flex relative px-4 bg-white">
        <div className="max-w-6xl w-full grid grid-cols-1 place-items-center mx-auto gap-6 md:grid-cols-2">
          <div className="flex justify-center items-center overflow-hidden relative rounded-md">
            <VideoPlayer
              width={564}
              height={564}
              src={videoUrl3}
              classnames="!w-auto !h-full z-[1] rounded-md !relative"
            />
            <div className="flex w-full h-full absolute rounded-md z-[2]"></div>
          </div>

          <div className="w-full h-full flex flex-col justify-center items-center md:items-start gap-y-4">
            <h1 className="font-extralight !leading-[1.2] text-3xl text-center md:text-left sm:text-5xl uppercase">
              Set your own <span className="text-peach font-normal">hours</span>
              . Earn on your own{" "}
              <span className="text-peach font-normal">terms</span>.
            </h1>

            <Link
              href="/apply"
              className="transition-colors duration-300 bg-black hover:bg-neutral-900 text-peach text-sm xs:text-base sm:text-xl font-medium py-4 uppercase text-center flex items-center justify-center px-6 tracking-normal outline-none outline-0 max-w-[240px] w-full"
            >
              Apply now
            </Link>
          </div>
        </div>
      </div> */}

      {/* <div className="bg-peach text-black w-full relative py-16 md:py-32">
        <RoughIllustration className="absolute w-full top-0 rotate-180 z-[2]" />
        <RoughIllustration className="absolute w-full invert top-1 lg:top-2 rotate-180 z-[1]" />

        <div className="w-full px-4 flex flex-col items-center justify-start">
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-white font-light text-xl md:text-3xl tracking-tight uppercase leading-[0.9]">
              WHAT PEOPLE SAY ABOUT US
            </h2>
            <div className="md:w-20 w-16 border-b border-white"></div>
          </div>

          <div className="w-full max-w-4xl mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-y-4 bg-white p-6 md:p-10 border-2 md:border-4 border-black"
              >
                <p className="sm:text-2xl text-lg font-medium tracking-tight text-black text-center">
                  {testimonial.comment}
                </p>

                <p className="italic font-light flex items-center justify-center gap-x-2 text-base sm:text-lg">
                  <span className="border border-peach w-8 h-0"></span>
                  {testimonial.client}
                </p>
              </div>
            ))}
          </div>
        </div>

        <RoughIllustration className="absolute w-full invert bottom-1 lg:bottom-2 z-[1]" />
        <RoughIllustration className="absolute w-full bottom-0 z-[2]" />
      </div> */}

      <div className="w-full bg-[#217182] relative flex flex-col justify-center items-center py-[72px] md:py-28 overflow-hidden">
        <div className="max-w-4xl px-4 w-full mx-auto flex flex-col gap-y-2 justify-center items-center">
          <p className="text-center text-3xl sm:text-[36px] md:text-[50px] tracking-tighter font-semibold !leading-tight text-[#EDC1A9] uppercase">
            Join the fastest growing{" "}
            <span className="">OnlyFans management</span> team in the United States.
          </p>



          <p className="text-center text-[22px] sm:text-3xl mt-8 tracking-tighter font-light !leading-tight text-[#EDC1A9] uppercase">
            SO WHAT ARE YOU WAITING FOR?
          </p>


          <div className="w-full flex flex-col items-center mt-0 sm:mt-4">
            <div className="border-b border-[#EDC1A9] w-full max-w-[360px] sm:max-w-xl md:max-w-2xl mx-auto mb-1.5"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[330px] sm:max-w-lg md:max-w-xl mx-auto mb-1.5"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[300px] sm:max-w-md md:max-w-lg mx-auto mb-1.5"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto mb-1.5"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[250px] sm:max-w-xs md:max-w-sm mx-auto mb-2"></div>

            <Link
              href="/apply"
              className="bg-black transition-colors duration-300 hover:text-black text-sm xs:text-base sm:text-xl font-medium hover:bg-white text-[#EDC1A9]  py-4 uppercase max-w-[248px] sm:max-w-xs md:max-w-sm w-full text-center flex items-center justify-center mx-auto px-8 tracking-tighter outline-none outline-0"
            >
              Apply to Angels or Vixens
            </Link>

            <div className="border-b border-[#EDC1A9] w-full max-w-[250px] sm:max-w-xs md:max-w-sm mx-auto mt-2"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[280px] sm:max-w-sm md:max-w-md mx-auto mt-1.5"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[300px] sm:max-w-md md:max-w-lg mx-auto mt-1.5"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[330px] sm:max-w-lg md:max-w-xl mx-auto mt-1.5"></div>
            <div className="border-b border-[#EDC1A9] w-full max-w-[360px] sm:max-w-xl md:max-w-2xl mx-auto mt-1.5"></div>
          </div>
          <p className="text-center text-[22px] sm:text-3xl mt-0 sm:mt-4 tracking-tighter font-light !leading-tight text-[#EDC1A9] uppercase">
            Committed To Expanding your <span className="">Audience</span>
          </p>
        </div>
      </div>
    </RootLayout>
  );
}