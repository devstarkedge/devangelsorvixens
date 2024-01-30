import wavy from "@/assets/illustrations/wavy.svg";

export default function WavyIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${wavy.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-24 ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
