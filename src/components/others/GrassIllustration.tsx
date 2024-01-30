import grass from "@/assets/illustrations/grass.svg";

export default function GrassIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${grass.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-[88px] ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
