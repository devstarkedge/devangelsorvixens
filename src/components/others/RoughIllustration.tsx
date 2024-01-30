import rough from "@/assets/illustrations/rough.svg";

export default function RoughIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${rough.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-[78px] ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
