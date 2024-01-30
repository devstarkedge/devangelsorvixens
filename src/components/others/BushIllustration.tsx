import bush from "@/assets/illustrations/bush.svg";

export default function BushIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${bush.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-24 ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
