import sharpEdge from "@/assets/illustrations/sharp-edge.svg";

export default function SharpObjectIllustration({ className, overlay }: any) {
  return (
    <div
      style={{
        backgroundImage: `url(${sharpEdge.src})`,
      }}
      className={`w-full !bg-contain !bg-bottom !bg-repeat-x h-[78px] ${className}`}
    >
      <div className={`absolute w-full h-full flex ${overlay}`}></div>
    </div>
  );
}
