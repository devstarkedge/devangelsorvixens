import multipleWave from "@/assets/illustrations/multiple-line-wave-white.svg";

export default function MultipleWaveIllustrationWhite({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${multipleWave.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-[78px] ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
