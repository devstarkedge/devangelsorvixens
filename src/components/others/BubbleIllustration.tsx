import bubble from "@/assets/illustrations/bubble.svg";

export default function BubbleIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${bubble.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-[78px] ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
