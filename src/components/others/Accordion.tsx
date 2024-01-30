import { IconChevronDown } from "tabler-icons";
import React, { useState, useRef, useEffect } from "react";

interface AccordionItem {
  answer: string;
  question: string;
}

interface AccordionType {
  faqs: AccordionItem[];
  defaultExpanded?: number;
}

interface AccordionItemProps {
  index: number;
  faq: AccordionItem;
  expanded: boolean;
  onClick: () => void;
}

const AccordionItemComponent: React.FC<AccordionItemProps> = ({
  index,
  faq,
  expanded,
  onClick,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = expanded
        ? `${contentRef.current.scrollHeight}px`
        : "0";
    }
  }, [expanded]);

  return (
    <div className="w-full flex flex-col justify-start items-center">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={expanded}
        className="flex justify-between outline-none font-medium text-base sm:text-lg outline-0 text-left w-full items-center p-4"
      >
        <span>{faq.question}</span>

        <span className="overflow-hidden flex justify-center items-center w-9 h-5">
          <IconChevronDown
            className={`w-10 h-auto text-white stroke-1 transition-transform duration-500
            ${expanded ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </button>

      <div
        ref={contentRef}
        className="w-full text-left overflow-hidden transition-max-height duration-300"
      >
        <div
          role="region"
          className="px-4 pb-4 pt-0 w-full text-left flex text-sm sm:text-base"
          dangerouslySetInnerHTML={{ __html: faq.answer }}
        />
      </div>
    </div>
  );
};

const Accordion: React.FC<AccordionType> = ({ faqs, defaultExpanded = 0 }) => {
  const [expandedIndex, setExpandedIndex] = useState(defaultExpanded);

  const handleToggle = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="grid grid-cols-1 divide-y-8 divide-white">
      {faqs.map((faq, index) => (
        <AccordionItemComponent
          key={index}
          index={index}
          faq={faq}
          expanded={expandedIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
