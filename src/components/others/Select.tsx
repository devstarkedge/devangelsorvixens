import clsx from "clsx";
import { IconChevronDown } from "@tabler/icons-react";
import { Listbox, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction } from "react";

type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  options: string[];
  classNames?: string;
  required?: boolean;
  placeholder?: string;
  parentClassName?: string;
  label?: string | React.ReactNode;
  onChange?: Dispatch<SetStateAction<string>>;
};

const baseStyles: string =
  "border md:border-transparent border-sand-light/30 w-full md:hover:border-sand-light/30 focus:border-sand px-4 transition-color duration-300 text-white focus:text-sand bg-sand-light/10 h-14 outline-0 text-base sm:text-[17px] font-normal !leading-relaxed text-left";

export default function Select(props: SelectProps) {
  const className = clsx(baseStyles, props.classNames);

  return (
    <Listbox value={props.value} onChange={props.onChange} {...props}>
      {({ open }) => (
        <div
          className={`grid w-full grid-cols-1 gap-y-2 sm:gap-y-5 flex-1 ${props.parentClassName}`}
        >
          {props.label && (
            <Listbox.Label
              htmlFor={props.id}
              className="sm:text-lg text-base font-normal leading-none text-white w-fit"
            >
              {props.label}{" "}
              {props.required ? (
                <span className="text-sand">*</span>
              ) : (
                <span className="text-sand text-sm font-semibold">
                  Optional
                </span>
              )}
            </Listbox.Label>
          )}

          <div className="relative">
            <Listbox.Button className={className}>
              {props.value ? (
                <span className="block truncate">{props.value}</span>
              ) : (
                <span className="block truncate text-white/40">
                  {props.placeholder}
                </span>
              )}

              <span className="absolute inset-y-0 text-remark-grey right-0 flex items-center pr-2 pointer-events-none">
                <IconChevronDown className="w-6 h-6" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leaveTo="opacity-0"
              leaveFrom="opacity-100"
              leave="transition ease-in duration-100"
            >
              <Listbox.Options className="absolute z-10 w-full p-2 mt-2 overflow-auto text-base list-none max-h-60 bg-black/95 ring-1 ring-sand-light ring-opacity-30 focus:outline-none space-y-2">
                {props.options.map((option: string) => (
                  <Listbox.Option
                    key={option}
                    className={({ active }) =>
                      clsx(
                        active
                          ? "bg-sand-light/10 text-white"
                          : "bg-transparent",
                        "relative cursor-pointer select-none duration-300 transition-colors font-light"
                      )
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <span
                        className={clsx(
                          selected
                            ? "font-medium bg-sand text-white"
                            : "font-light",
                          "block truncate p-3"
                        )}
                      >
                        {option}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
}
