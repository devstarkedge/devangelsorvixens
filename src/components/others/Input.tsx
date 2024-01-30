import clsx from "clsx";

type InputProps = {
  classnames?: string;
  label?: string | React.ReactNode;
} & React.ComponentPropsWithoutRef<"input">;

const baseStyles: string =
  "border md:border-transparent border-sand-light/30 w-full md:hover:border-sand-light/30 focus:border-sand px-4 transition-color duration-300 placeholder-white/40 text-white focus:text-sand bg-sand-light/10 h-14 outline-0 outline-none text-base sm:text-[17px] font-normal !leading-relaxed rounded-none";

export default function Input(props: InputProps) {
  const { id, label, required, classnames } = { ...props };

  const className = clsx(baseStyles, classnames);

  return (
    <fieldset className="grid w-full grid-cols-1 gap-y-3 flex-1">
      {label && (
        <label
          htmlFor={id}
          className="sm:text-lg text-base font-normal leading-none text-white w-fit"
        >
          {label}{" "}
          {required ? (
            <span className="text-sand">*</span>
          ) : (
            <span className="text-sand text-sm font-semibold">Optional</span>
          )}
        </label>
      )}

      <input id={id} className={className} {...props} />
    </fieldset>
  );
}
