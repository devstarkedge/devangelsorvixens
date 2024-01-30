import quote from "@/assets/illustrations/quote.svg";

export default function QuoteIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${quote.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-[78px] ${className}`}
    >
      <div className={`w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
