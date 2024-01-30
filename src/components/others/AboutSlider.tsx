import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { IconChevronLeft, IconChevronRight } from "tabler-icons";

/**
 * Renders an AboutSlider component that displays a series of slides with titles and descriptions.
 *
 * @return {JSX.Element} The rendered AboutSlider component.
 */
export default function AboutSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slides = [
    {
      title: "INDIVIDUALITY",
      description:
        "We will help you discover your ideal niche, enhancing your success, regardless of your experience or current level of achievement.",
    },
    {
      title: "CONFIDENTIALITY & PRIVACY",
      description:
        "Ensuring the highest level of privacy, we prioritize the security and confidentiality of your personal and professional information. Our operations are conducted with utmost discretion.",
    },
    {
      title: "PERSONALIZED STRATEGY",
      description:
        "Our team of professionals customizes a unique strategy for each creator we collaborate with. We acknowledge that each individual's journey is distinct, and our objective is to assist you in showcasing your talents in your own distinctive manner.",
    },
    {
      title: "MAXIMIZE PROFITS",
      description:
        "Angels or Vixens is dedicated to assisting you in optimizing your earnings on OnlyFans. With our expertise in exclusive content ideas and pricing strategies, we can enhance your income.",
    },
    {
      title: "BRAND SUCCESS",
      description:
        "Enhance your online presence with Angels or Vixens. Connect with your target audience and distinguish yourself in the realm of adult content creation.",
    },
    {
      title: "MARKETING",
      description:
        "Discover valuable marketing techniques that can effectively promote your OnlyFans account, engage with your audience, and significantly enhance your subscriber count.",
    },
    {
      title: "COMMUNITY CONNECTION",
      description:
        "Join a thriving community of creators with Angels or Vixens. Connect with like-minded individuals, share experiences, and access valuable insights that will propel your OnlyFans career forward.",
    },
  ];

  return (
 <div className="h-fit my-auto w-full relative max-w-lg py-10 m-auto text-center bg-black border border-[#EDC1A9]/40 flex gap-x-4 justify-between items-center overflow-hidden">
      <button
        type="button"
        onClick={() => swiper?.slidePrev()}
        className="w-fit h-full outline-0 outline-none text-sand"
      >
        <IconChevronLeft className="h-12 w-auto shrink-0 text-[#EDC1A9] stroke-1" />
      </button>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        onSwiper={(_swiper) => setSwiper(_swiper)}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        onSlideChange={(_swiper) => setActiveIndex(_swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center gap-y-2 sm:gap-y-3 md:gap-y-5 max-w-[321px] mx-auto pb-4 sm:pb-8 md:pb-12 cursor-default">
              <h2 className="uppercase text-[#EDC1A9] font-black text-xl sm:text-2xl md:text-[36px] tracking-wider">
                {slide.title}
              </h2>

              <p className="tracking-tighter text-sm xs:text-base sm:text-lg md:text-xl">
                {slide.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        type="button"
        onClick={() => swiper?.slideNext()}
        className="w-fit h-full outline-0 outline-none text-sand"
      >
         <IconChevronRight className="h-12 w-auto shrink-0 text-[#EDC1A9] stroke-1" />
      </button>

      <div className="absolute bottom-6 mx-auto w-full flex justify-center items-center gap-x-5">
        {slides.map((slide, index) => (
          <button
            onClick={() => swiper?.slideTo(index)}
            key={index}
            className={`shrink-0 w-1.5 h-1.5
            ${index === activeIndex ? "bg-[#EDC1A9]" : "bg-white"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
