/**
 * VideoPlayer component renders a video player with customizable options.
 *
 * @param {React.ComponentPropsWithoutRef<"video"> & { classnames?: string }} props - The props for the VideoPlayer component.
 * @returns {JSX.Element} The rendered VideoPlayer component.
 */
export default function VideoPlayer(
  props: React.ComponentPropsWithoutRef<"video"> & { classnames?: string }
): JSX.Element {
  // Generate the classnames string, combining the provided classnames with the default styles
  const classnames = `w-full z-[1] h-full object-cover object-top absolute top-0 bottom-0 right-0 left-0 !saturate-50 ${props.classnames}`;

  return (
    // Render the video element with the provided props and classnames
    <video
      src={props.src}
      className={classnames}
      loop={props.loop || true}
      muted={props.muted || true}
      width={props.width || 2048}
      height={props.height || 890}
      autoPlay={props.autoPlay || true}
      controls={props.controls || false}
      disableRemotePlayback={props.disableRemotePlayback || true}
      disablePictureInPicture={props.disablePictureInPicture || true}
      playsInline
      {...props}
    />
  );
}
