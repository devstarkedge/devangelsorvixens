import Link from "next/link";
import Image from "next/image";
import IconEye from "@/components/icons/IconEye";
import RootLayout from "@/components/layouts/RootLayout";

import RoughIllustration from "@/components/others/RoughIllustration";
import MultipleWaveIllustration from "@/components/others/MultipleWaveIllustration";
import MultipleWaveIllustrationWhite from "@/components/others/MultipleWaveIllustrationWhite";

import block from "@/assets/illustrations/block.svg";
import handGlobe from "@/assets/illustrations/hand-globe.svg";
import curvyArrowSand from "@/assets/illustrations/curvy-arrow-left-sand.svg";

const reasons = [
  {
    title: "Unleash Your Potential",
    description:
      "We're not just a platform, we're a family that nurtures your talents. As an employee, you'll have the chance to explore your strengths and develop new skills in a supportive environment.",
  },
  {
    title: "Multiple Roles, One Goal",
    description:
      "Whether you're a chatter who loves engaging conversations or an account manager with a knack for organization, your role will be crucial in shaping our community's experience.",
  },
  {
    title: "Innovation at Heart",
    description:
      "Embrace the dynamic nature of our industry. We're at the forefront of creativity and technology, always adapting and evolving to stay ahead.",
  },
];

const careers = [
  {
    title: "Account Manager",
    description:
      "Your primary responsibility will be to offer tailored support to our OnlyFans models, ensuring the resolution of any operational obstacles and upholding a culture of accountability.",
  },
  {
    title: "Branding and Marketing Specialist",
    description:
      "Your role will be focused on devising and implementing tailored marketing and branding strategies for our valued clients. This will involve conducting market research, creating compelling campaigns, and providing expert guidance on building and enhancing their brand image.",
  },
  {
    title: "OnlyFans Chatter",
    description:
      "Your role involves delivering exceptional support within the OnlyFans messaging platform, including content sales and cultivating strong connections with fans. This is facilitated through our specialized chat software.",
  },
  {
    title: "Agency Assistant",
    description:
      "As an Agency assistant You will play a crucial role in providing comprehensive administrative support to ensure the smooth operation of the agency. This includes managing schedules, coordinating communications, and assisting with various organizational tasks.",
  },
  {
    title: "Brand Ambassador (Content Creator)",
    description:
      "As a Company Brand Ambassador and Content Creator, you will serve as the face and voice of our company, embodying our brand values and identity. Your role will revolve around generating engaging and authentic content that resonates with our target audience.",
  },
  {
    title: "New Client Recruiter",
    description:
      "Your responsibility will be to successfully transition prospective leads into valued clients. This entails employing strategic communication and persuasive techniques, showcasing the benefits of our services, and addressing any queries or concerns they may have.",
  },
];

export default function Careers() {
  return (
    <RootLayout page="careers" metadata={{ title: "Careers" }}>
      <div className="w-full bg-black/70 pt-28 backdrop-blur text-white min-h-screen mx-auto text-center">
        <div className="sm:h-[620px] h-[500px] w-full bg-black flex justify-start md:justify-center md:pt-0 pt-32 flex-col items-center">
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[360px] sm:max-w-[654px] mb-2 w-full"
          ></div>
          <div
            data-aos-delay="900"
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[320px] sm:max-w-[543px] mb-2 w-full"
          ></div>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-easing="ease-out-sine"
            className="sm:text-2xl text-[36px] lg:text-[28px] tracking-tight sm:tracking-normal font-black leading-[1] sm:leading-[0.7] uppercase"
          >
            The <span className="text-sand">#1 OnlyFans</span>
            <br className="sm:hidden" /> Management <br className="sm:hidden" />{" "}
            Agency Careers
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="ease-out-sine"
            className="lg:text-[200px] sm:text-[130px] text-[80px] mt-2 uppercase flex flex-col gap-5 justify-center items-center text-center tracking-tighter font-black leading-[0.73]"
          >
            Careers
          </h1>

          <div
            data-aos-delay="900"
            data-aos="fade-right"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[320px] sm:max-w-[543px] mt-2 w-full"
          ></div>
          <div
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-easing="ease-out-sine"
            className="mx-auto flex border-b border-sand max-w-[360px] sm:max-w-[654px] mt-2 w-full"
          ></div>

          <p
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-easing="ease-out-sine"
            className="sm:font-black font-bold leading-tight text-white text-lg tracking-tighter xs:tracking-tight mt-1"
          >
            LEGIT ONLYFANS CHATTER JOBS, ONLYFANS <br className="sm:hidden" />{" "}
            MANAGER JOBS + MUCH MORE
          </p>
        </div>

        <div className="w-full pt-24 pb-14 md:py-32 relative bg-white h-fit flex justify-center">
          <MultipleWaveIllustration className="rotate-180 absolute top-0" />
          <MultipleWaveIllustrationWhite className="rotate-180 absolute -bottom-[72px]" />

          <div className="w-full flex flex-col items-center md:grid md:grid-cols-12 max-w-9xl gap-6 mx-auto px-4 text-neutral-900">
            <div className="w-full flex flex-col md:col-span-7 items-center gap-y-5 order-last md:order-first">
              <p className="lg:text-[26px] font-medium tracking-tight leading-snug text-lg sm:text-xl text-center md:text-left">
                At Angels or Vixens, we believe that every individual has unique
                talents and skills that can contribute to our vibrant community.
                Join us on a journey of empowerment, creativity, and growth by
                becoming a part of our team. Whether you&apos;re a natural
                conversationalist or a master organizer, we have exciting
                opportunities waiting for you.
              </p>
            </div>

            <div className="w-full col-span-5 md:order-last order-first">
              <Image
                width={266}
                height={266}
                src={handGlobe}
                alt="two hands and a globe"
                className="m-auto relative"
              />
            </div>
          </div>
        </div>

        <div className="w-full relative py-28">
          <h2 className="text-3xl text-ocean mx-auto font-black">
            WHY JOIN US?
          </h2>

          <div className="grid max-w-8xl grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 mx-auto mt-12 px-4">
            {reasons.map((reason) => (
              <CareerCard
                key={reason.title}
                {...reason}
                classnames="md:last-of-type:col-span-4 md:col-span-4 last-of-type:col-span-full"
              />
            ))}
          </div>
        </div>

        <div className="w-full relative py-16 md:py-28 bg-black">
          <RoughIllustration className="invert absolute -top-[72px] lg:-top-16" />

          <h2 className="sm:text-3xl text-xl text-white mx-auto font-black px-4">
            OUR AVAILABLE ONLYFANS <br className="sm:hidden" /> AGENCY CAREERS
          </h2>

          <div className="grid max-w-8xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-12 px-4">
            {careers.map((career) => (
              <CareerCard
                key={career.title}
                {...{ ...career, withButton: true }}
              />
            ))}
          </div>
        </div>

        <div className="w-full relative py-16 md:py-28 uppercase md:text-3xl md:!leading-[1] sm:text-lg text-base bg-black/50 text-center font-normal !leading-snug text-white tracking-tighter px-4 gap-y-6 flex flex-col items-center">
          <RoughIllustration className="absolute rotate-180 top-0 invert" />

          <p className="max-w-[1024px] w-full mx-auto">
            At <span className="text-sand">Angel or Vixens</span>, we don&apos;t
            just offer jobs - we provide fulfilling career opportunities. We
            take pride in our robust career laddership, which offers exceptional
            raises, bonuses, and advancement possibilities for every role. We
            believe in recognizing and rewarding talent, and we&apos;ve designed
            our progression system to reflect that commitment. As you grow with
            us, you&apos;ll not only gain valuable experience but also see your
            efforts acknowledged with substantial financial rewards.
          </p>

          <p className="max-w-[1024px] w-full mx-auto">
            Angel or Vixens is more than just a workplace; it&apos;s a{" "}
            <span className="text-sand">community</span>. Even in our remote
            work environment, you&apos;ll find a supportive and collaborative
            atmosphere that fosters professional development and personal
            growth. We understand that your career is an integral part of your
            life, and we&apos;re dedicated to helping you thrive.
          </p>

          <p className="max-w-[1024px] w-full mx-auto">
            Joining us means becoming a part of a dynamic team where your
            contributions are not only valued but also generously compensated.
            With our remote work setup, you have the flexibility to craft a
            work-life balance that suits you. The potential to earn a{" "}
            <span className="text-sand">substantial income</span> is within your
            reach. Consider Angels or Vixens as not just your workplace, but
            your next family, and let&apos;s embark on this journey of success
            together.
          </p>
          <RoughIllustration className="absolute bottom-0 invert" />
        </div>

        <div className="w-full bg-black relative flex flex-col justify-center items-center py-16 md:py-28 overflow-hidden">
          <div className="max-w-4xl px-4 w-full mx-auto flex flex-col gap-y-2 justify-center items-center">
            <p className="text-center text-3xl sm:text-[36px] md:text-[50px] tracking-tight font-black xs:leading-[0.85] text-white">
              SO WHAT ARE YOU WAITING FOR?
            </p>

            <div className="relative max-w-[773px] w-full mx-auto flex flex-col gap-y-2 justify-center items-center">
              <Image
                alt="curvy arrow"
                src={curvyArrowSand}
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
                  href="mailto:info@example.com"
                  className="bg-sand transition-colors duration-300 text-black rounded-t-2xl text-base sm:text-xl font-extrabold hover:bg-white hover:text-sand rounded-b-[44px] py-3 sm:py-4 uppercase max-w-[422px] w-full text-center flex items-center justify-center mx-auto px-6 tracking-tight"
                >
                  RESUMÉ APPLICATION
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
                alt="curvy arrow"
                src={curvyArrowSand}
                className="absolute rotate-90 -scale-x-100 scale-90 -right-10 -top-2 hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}

function CareerCard(props: any) {
  return (
    <div
      className={`border-8 cursor-default group duration-300 transition-colors w-full h-full p-4 flex flex-col items-center gap-y-3 text-center ${
        props.classnames
      }
      ${
        props.withButton
          ? "bg-black/70 hover:bg-ocean hover:border-ocean"
          : "bg-white/20 border-white hover:border-ocean"
      }`}
    >
      {!props.withButton && (
        <IconEye className="w-12 h-auto group-hover:text-ocean duration-300 transition-colors" />
      )}

      <h2
        className={`font-bold uppercase tracking-tighter text-2xl md:text-xl lg:text-2xl
        ${
          props.withButton ? "text-ocean group-hover:text-white" : "text-ocean"
        }`}
      >
        {props.title}
      </h2>
      <p
        className={`text-white text-base md:text-sm lg:text-base tracking-tight
        ${props.withButton ? "mb-6" : "mb-0"}`}
      >
        {props.description}
      </p>

      {props.withButton && (
        <Link
          href="mailto:info@example.com"
          className="outline-0 outline-none uppercase duration-300 transition-colors w-full text-lg py-3 bg-ocean text-white group-hover:text-ocean group-hover:bg-white font-medium flex justify-center items-center gap-x-2 mt-auto"
        >
          Apply
        </Link>
      )}

      {!props.withButton && (
        <IconEye className="w-12 h-auto group-hover:text-ocean duration-300 transition-colors" />
      )}
    </div>
  );
}
