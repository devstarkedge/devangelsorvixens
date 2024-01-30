import clsx from "clsx";
import Link from "next/link";

interface LinkType extends React.ComponentPropsWithoutRef<typeof Link> {
  classnames?: string;
}

export default function TinyLinkButton(props: LinkType) {
  const className = clsx(
    "outline-0 outline-none border border-ocean hover:border-white transition-colors font-semibold tracking-wide uppercase text-[11px] duration-300 text-sand-alt hover:text-sand px-4 py-0.5 bg-ocean",
    props.classnames
  );

  return <Link className={className} {...props} />;
}
