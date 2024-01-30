import Accordion from "@/components/others/Accordion";
import RootLayout from "@/components/layouts/RootLayout";
import RoughIllustration from "@/components/others/RoughIllustration";

const faqs = [
  {
    question: "Why should I join Angels or Vixens?",
    answer:
      "The OnlyFans business belongs to a highly dynamic industry, where constant change is the norm From terms and conditions to the constant emerging trends and competition, everything is constantly evolving, some for the better and some for the worse. This is precisely where our expertise comes into play, as we aim to assist you in adapting to these changes. With our dedicated team, we'll help you navigate through the intricacies of social media algorithms to ensure your continued relevance and success.",
  },
  {
    question: "How do you help me to promote my OnlyFans account?",
    answer:
      "We employ a range of techniques to enhance the visibility of our clients' OnlyFans accounts, including social media marketing, influencer collaborations, and email campaigns. Our team of professionals will collaborate closely with you to create a customized promotional strategy that effectively reaches your target audience.",
  },
  {
    question: "How can you ensure my personal safety and information?",
    answer:
      "At Angels or Vixens, we prioritize the safety and privacy of our clients' personal information. We have implemented rigorous policies and protocols to safeguard your data, including secure storage and encryption measures.",
  },
  {
    question: "How do you plan to help me with making content?",
    answer:
      "We are delighted to offer a wide range of services to assist our valued clients with content creation and curation. Our services encompass photo and video production, editing, and content planning. Our dedicated team of experts will work closely with you to develop a content strategy that perfectly aligns with your goals and resonates with your target audience. We are here to help and accommodate your needs every step of the way.",
  },
  {
    question: "How do you plan to help me build a fanbase?",
    answer:
      "We leverage our expertise in social media marketing, influencer collaborations, and strategic promotions to help you build a robust fanbase for your OnlyFans account. Through targeted outreach and engaging content strategies, we aim to cultivate a dedicated and growing audience that aligns with your brand and content offerings.",
  },
];

/**
 * Renders the FAQ component.
 *
 * @return {JSX.Element} The rendered FAQ component.
 */
export default function FAQ() {
  return (
    <RootLayout page="faq" metadata={{ title: "FAQ" }}>
      <div className="w-full bg-black/70 pt-28 backdrop-blur text-white min-h-screen mx-auto text-center">
        <div className="sm:h-[660px] h-[500px] w-full bg-black flex justify-center flex-col items-center">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            className="lg:text-[170px] text-[130px] text-sand uppercase flex flex-col gap-5 justify-center items-center text-center tracking-tighter font-black leading-[0.73]"
          >
            FAQ
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-easing="ease-in-cubic"
            className="font-extrabold tracking-normal text-xl mr-16 md:mr-28 text-right text-white md:text-2xl max-w-[350px]"
          >
            Need more information?
            <br />
            Check the <span className="text-sand">FAQ</span> below.
          </p>
        </div>

        <div className="relative w-full py-20 sm:py-28 md:py-44 flex">
          <div className="w-full absolute -top-24">
            <RoughIllustration />
            <RoughIllustration className="rotate-180" />
          </div>

          <div className="px-4 w-full flex justify-center">
            <div className="max-w-2xl mx-auto w-full bg-white/30 border-8 border-white">
              <Accordion faqs={faqs} defaultExpanded={0} />
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
