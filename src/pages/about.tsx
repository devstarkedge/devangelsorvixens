import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import IconEye from "@/components/icons/IconEye";
import RootLayout from "@/components/layouts/RootLayout";
import AboutSlider from "@/components/others/AboutSlider";
import BushIllustration from "@/components/others/BushIllustration";
import RoughIllustration from "@/components/others/RoughIllustration";

import arch from "@/assets/illustrations/arch.svg";
import block from "@/assets/illustrations/block.svg";
import inverseArch from "@/assets/illustrations/inverse-arch.svg";
import curvyArrowSand from "@/assets/illustrations/curvy-arrow-left-sand.svg";

// models
import model1 from "@/assets/image/models/model-9.webp";
import model2 from "@/assets/image/models/model-2.webp";
import model3 from "@/assets/image/models/model-11.webp";
import model4 from "@/assets/image/models/model-4.webp";
import model5 from "@/assets/image/models/model-12.webp";

// blur models
import blur_model_1 from "@/assets/image/blur_models/blur_model_1.webp";
import blur_model_2 from "@/assets/image/blur_models/blur_model_2.webp";
import blur_model_3 from "@/assets/image/blur_models/blur_model_3.webp";
import blur_model_4 from "@/assets/image/blur_models/blur_model_4.webp";
import blur_model_5 from "@/assets/image/blur_models/blur_model_5.webp";

export default function About() {
  return (
    <RootLayout page="about" metadata={{ title: "About" }}>
      <div className="w-full h-full flex relative bg-black pt-28 backdrop-blur-3xl">
        <div className="flex h-[70svh] md:h-[85svh] lg:h-[900px] px-4 flex-col relative pt-28 text-center tracking-tighter z-[2] font-black leading-[0.73] items-center gap-y-2 m-auto">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-out-sine"
            className="lg:text-[90px] md:text-[70px] sm:text-[50px] text-[30px] uppercase"
          >
            About
          </h1>

          <h1 className="lg:text-[170px] md:text-[130px] sm:text-[90px] text-[70px] text-[#EDC1A9] uppercase flex flex-col gap-5 justify-center items-center">
            <span
              data-aos="fade-up"
              data-aos-easing="ease-out-sine"
              data-aos-delay="300"
            >
              Angels
            </span>
            <span className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 ml-8">
              <span
                data-aos="fade-up"
                data-aos-easing="ease-out-sine"
                data-aos-delay="550"
                className="md:text-5xl sm:text-4xl text-3xl lowercase italic font-light"
              >
                or
              </span>
              <span
                data-aos="fade-up"
                data-aos-easing="ease-out-sine"
                data-aos-delay="600"
              >
                Vixens
              </span>
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="700"
            className="font-extrabold text-white tracking-normal text-lg sm:text-xl md:text-2xl text-center mt-4"
          >
            S or VIXENS, the&nbsp;
            <span className="text-[#EDC1A9]">#1 OnlyFans Agency</span> for&nbsp;
            <br className="md:block hidden" />
            girls looking to make a full-time income online.
          </p>
        </div>

        <RoughIllustration className="absolute z-[1] bottom-0" />
      </div>

      <div className="relative flex flex-col h-fit justify-center items-center w-full bg-white">
        <RoughIllustration className="absolute top-0 rotate-180 z-[1]" />

        <div className="w-full min-h-[400px] sm:min-h-[512px] lg:min-h-[400px] overflow-hidden relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 z-[2] py-4 px-4 md:px-10 mx-auto max-w-10xl">
          <div className="h-auto w-full backdrop-blur-md bg-white rounded-xl overflow-hidden">
            <img
              data-aos="zoom-in"
              data-aos-duration="600"
              src={model1.src}
              alt="Model"
              className="w-full h-full object-cover object-center relative sm:blur hover:blur-none transition duration-500 saturate-50"
            />
          </div>

          <div className="h-auto w-full backdrop-blur-md bg-white rounded-xl overflow-hidden">
            <img
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200"
              src={model2.src}
              alt="Model"
              className="w-full h-full object-cover object-center relative sm:blur hover:blur-none transition duration-500 saturate-50"
            />
          </div>

          <div className="h-auto w-full backdrop-blur-md bg-white rounded-xl overflow-hidden">
            <img
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
              src={model3.src}
              alt="Model"
              className="w-full h-full object-cover object-center relative sm:blur hover:blur-none transition duration-500 saturate-50"
            />
          </div>

          <div className="h-auto w-full backdrop-blur-md bg-white rounded-xl overflow-hidden">
            <img
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
              src={model4.src}
              alt="Model"
              className="w-full h-full object-cover object-center relative sm:blur hover:blur-none transition duration-500 saturate-50"
            />
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <RoughIllustration className="absolute -top-px rotate-180 z-[2]" />

        <div className="relative w-full z-[1] h-full py-40 backdrop-blur-md flex px-4">
          <div className="relative w-full h-full grid grid-cols-1 gap-y-12 lg:grid-cols-2 place-items-center mx-auto max-w-10xl">
            <div className="w-full flex justify-center items-center lg:order-1 order-last">
              <div className="max-w-[500px] w-full border-4 h-auto md:h-[500px] border-white tracking-tighter bg-white/50  text-center text-[19px] font-medium text-white backdrop-blur-md">
                <img
                  src={model5.src}
                  alt="Model"
                  className="w-full object-cover object-top h-full saturate-50"
                />
              </div>
            </div>

            <div className="w-full flex justify-center items-center lg:order-last order-first">
              <div className="max-w-[600px] w-full border-4 border-white tracking-tighter bg-black/75 px-3 sm:px-6 py-0 text-center text-base sm:text-[19px] font-medium text-white">
                <IconEye className="sm:w-16 w-10 h-auto mx-auto mb-4" />
                Angels or Vixens is headquartered in the beautiful golden state,
                California. Our journey began in 2021 when we worked for a
                prominent OnlyFans management agency. During our time there, we
                witnessed the unfortunate mistreatment of models within the
                OnlyFans industry. Regrettably, this agency exemplified the
                toxic culture that often plagues the industry, showing a
                disregard for the wellbeing of its models. Models frequently
                experienced issues such as underpayment, delayed payments, and
                lack of explanation.
                <br />
                <br />
                Motivated by the negative impact on models, we were inspired to
                establish our own OnlyFans agency, Angels or Vixens. Our agency
                prioritizes the safety, freedom, and wellbeing of our models
                above all else. We are dedicated to fostering a culture of
                transparency and maintaining a professional work environment
                where models are respected, valued, and treated with the dignity
                they deserve. Join us as we make a positive impact on this
                industry together.
                <IconEye className="sm:w-16 w-10 h-auto mx-auto mb-4" />
              </div>
            </div>
          </div>
        </div>

        <RoughIllustration className="absolute bottom-0 z-[2]" />
      </div>

      <div className="w-full py-10 sm:py-24 md:py-32 flex justify-center items-center relative bg-[#181518]/90 backdrop-blur-md">
        <RoughIllustration className="absolute rotate-180 -top-px z-[2]" />

        <div className="mx-auto max-w-[900px] px-4 w-full flex flex-col justify-center items-center">
          <IconEye className="sm:w-24 w-14 h-auto mx-auto mb-4" />
          <p className="text-center text-base sm:leading-snug sm:text-[22px] tracking-tighter text-white font-medium">
            After witnessing the negative impact this had on models, we were
            inspired to establish our own OnlyFans agency. Hence Angels or
            Vixens agency, we place the safety, freedom, and wellbeing of our
            models at the forefront of everything we do. We are committed to
            fostering a culture of transparency and a professional work place,
            where models arerespected, valued, and treated with the dignity they
            deserve.
          </p>
          <IconEye className="sm:w-24 w-14 h-auto mx-auto mt-4" />
        </div>

        <RoughIllustration className="absolute -bottom-px z-[2] invert" />
      </div>

      {/* Swiperjs react */}
      <div className="w-full flex bg-black overflow-hidden gap-x-4 py-4 sm:gap-x-10 md:gap-x-16 lg:gap-x-24 px-4 sm:px-10">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          modules={[Autoplay]}
          speed={1500}
          autoplay={{
            delay: 500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide>
            <Link
              href="/apply"
              className="lg:h-[300px] lg:w-[300px] md:h-[250px] md:w-[250px] w-[180px] h-[180px] shrink-0 rounded-full overflow-hidden relative flex"
            >
              <Image
                src={blur_model_1}
                alt="image carousel"
                className="w-full h-full relative object-cover object-center blur-md hover:blur-sm transition duration-500"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href="/apply"
              className="lg:h-[300px] lg:w-[300px] md:h-[250px] md:w-[250px] w-[180px] h-[180px] shrink-0 rounded-full overflow-hidden relative flex"
            >
              <Image
                src={blur_model_2}
                alt="image carousel"
                className="w-full h-full relative object-cover object-center blur-md hover:blur-sm transition duration-500"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href="/apply"
              className="lg:h-[300px] lg:w-[300px] md:h-[250px] md:w-[250px] w-[180px] h-[180px] shrink-0 rounded-full overflow-hidden relative flex"
            >
              <Image
                src={blur_model_3}
                alt="image carousel"
                className="w-full h-full relative object-cover object-center blur-md hover:blur-sm transition duration-500"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href="/apply"
              className="lg:h-[300px] lg:w-[300px] md:h-[250px] md:w-[250px] w-[180px] h-[180px] shrink-0 rounded-full overflow-hidden relative flex"
            >
              <Image
                src={blur_model_4}
                alt="image carousel"
                className="w-full h-full relative object-cover object-center blur-md hover:blur-sm transition duration-500"
              />
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href="/apply"
              className="lg:h-[300px] lg:w-[300px] md:h-[250px] md:w-[250px] w-[180px] h-[180px] shrink-0 rounded-full overflow-hidden relative flex"
            >
              <Image
                src={blur_model_5}
                alt="image carousel"
                className="w-full h-full relative object-cover object-center blur-md hover:blur-sm transition duration-500"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-[#181518]/90 relative backdrop-blur-md py-16 md:py-24 lg:py-36 flex">
        <RoughIllustration className="absolute top-0 z-[2] rotate-180 invert" />

        <div className="max-w-[940px] tracking-tighter mx-auto w-full px-4 text-center text-base sm:leading-snug sm:text-[21px] flex flex-col md:gap-y-16 gap-y-2 text-white font-medium">
          <div className="flex flex-col justify-center items-center">
            <IconEye className="w-14 h-auto mx-auto" />
            <p>
              We value you and understand the challenges you face daily.
              Filming, editing, and navigating social media algorithms can be
              time-consuming and stressful. It’s frustrating when your hard work
              doesn’t lead to increased traffic on OnlyFans. We’re here to help
              you overcome these obstacles and maximize your potential for
              recognition. Join Angels or Vixens OnlyFans Agency now!
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <IconEye className="w-14 h-auto mx-auto" />
            <p>
              Our company is distinguished by our unwavering commitment to
              cultivating genuine connections with our esteemed clients. We
              prioritize the best interests and overall well-being of our models
              above all else. Our primary objective is to provide steadfast
              support and attentive listening to our clients. Our dedicated team
              of professional marketers is readily available to assist you,
              ensuring that your content reaches its intended audience and that
              your brand is unmistakably representative of you. With our
              profound understanding of social media dynamics, combined with the
              expertise of our professional marketers and branding specialists,
              we possess a unique advantage. We do not simply manage your
              account; instead, we arrange a variety of strategies to elevate
              your influence, engagement, and earnings. In other words, our
              mission is to help you become the successful superstar you are.
            </p>
          </div>
        </div>

        <BushIllustration className="absolute -bottom-px z-[2] invert" />
      </div>

      <div className="w-full h-[400px] sm:h-[70vh] md:h-[80vh] bg-black/70 relative backdrop-blur-md -mt-1 py-16 md:py-24 lg:py-36 flex overflow-hidden">
        <Image
          src={arch}
          alt="arch"
          className="w-[130%] h-[300px] z-[1] object-fill object-bottom rotate-180 absolute top-0"
        />

        <div className="w-full px-4 z-[2] flex my-auto">
          <AboutSlider />
        </div>

        <Image
          src={inverseArch}
          alt="inverse arch"
          className="w-[130%] h-[300px] sm:h-[400px] md:h-[550px] z-[1] object-fill object-bottom absolute bottom-0"
        />
      </div>

      <div className="w-full bg-black relative flex flex-col justify-center items-center backdrop-blur-md py-28 overflow-hidden">
        <div className="max-w-4xl px-4 w-full mx-auto flex flex-col gap-y-2 justify-center items-center">
          <p className="text-center text-3xl sm:text-[36px] md:text-[50px] tracking-tight font-black xs:leading-[0.85] text-white">
            SO WHAT ARE YOU WAITING FOR?
          </p>

          <div className="relative max-w-[773px] w-full mx-auto flex flex-col gap-y-2 justify-center items-center">
            <Image
              src={curvyArrowSand}
              alt="curvy arrow"
              className="absolute -rotate-90 scale-90 -left-10 -top-2 hidden md:block"
            />

            <div className="w-full flex">
              <Image
                src={block}
                alt="block"
                className="w-full max-w-[773px] h-[35px] xs:h-[40px] sm:h-[50px] mx-auto object-fill"
              />
            </div>

            <div className="w-full flex sm:px-0 px-8">
              <Image
                src={block}
                alt="block"
                className="w-full max-w-[560px] mx-auto h-[35px] xs:h-[50px] sm:h-[60px] object-fill"
              />
            </div>

            <div className="w-full flex px-12 xs:px-16 sm:px-0">
              <Link
                href="/apply"
                className="bg-sand transition-colors duration-300 text-black rounded-t-2xl text-sm xs:text-base sm:text-xl font-extrabold hover:bg-white hover:text-sand rounded-b-[44px] py-3 sm:py-4 uppercase max-w-[422px] w-full text-center flex items-center justify-center mx-auto px-6 tracking-tight"
              >
                Apply to Angels or Vixens
              </Link>
            </div>

            <div className="w-full flex sm:px-0 px-8">
              <Image
                src={block}
                alt="block"
                className="w-full max-w-[560px] mx-auto h-[35px] xs:h-[50px] sm:h-[60px] object-fill"
              />
            </div>

            <div className="w-full flex">
              <Image
                src={block}
                alt="block"
                className="w-full max-w-[773px] h-[35px] xs:h-[40px] sm:h-[50px] mx-auto object-fill"
              />
            </div>

            <Image
              src={curvyArrowSand}
              alt="curvy arrow"
              className="absolute rotate-90 -scale-x-100 scale-90 -right-10 -top-2 hidden md:block"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
