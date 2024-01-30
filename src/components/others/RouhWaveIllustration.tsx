import roughWave from "@/assets/illustrations/rough-wave.svg";

export default function RoughWaveIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${roughWave.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-[78px] ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
