import type { AboutCard } from "../../api/api";
import SectionError from "../common/SectionError";

type AboutProps = {
  title: string;
  description: string;
  cards: AboutCard[];
};

export default function About({ title, description, cards }: AboutProps) {
  const isValid = !!(title && description && cards?.length);

  if (!isValid) {
    return <SectionError sectionName="About" />;
  }

  return (
    <section id="about" className="relative mx-auto w-[min(calc(100%-32px),1220px)] py-10 lg:py-12">
      {/* Numbered Indicators */}
      <div className="fixed right-[12px] top-95 -translate-y-1/2 hidden flex-col gap-2 lg:flex">
        {[1, 2, 3].map((num) => (
          <span
            key={num}
            className="font-['Lato'] text-base font-bold text-white transition-all duration-300 hover:text-(--color-brand) hover:border-b-1 hover:border-(--color-brand) cursor-pointer pb-0.5"
          >
            {String(num).padStart(2, "0")}
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:mt-16 md:grid-cols-2">
        <h2 className="w-full font-['Lato'] text-[36px] font-black leading-[140%] tracking-[3%] capitalize text-[#285A43] md:text-left lg:w-143.5 lg:translate-x-[25px] lg:translate-y-[10.5px]">
          {title}
        </h2>
        <p className="w-full pr-15 font-raleway text-[18px] font-medium leading-[150%] tracking-normal text-(--color-text-primary) md:text-left lg:w-173.25 lg:-translate-x-[45px] lg:translate-y-[8px]">
          {description}
        </p>
      </div>

      <div className="relative left-7 top-[10px] mt-8 grid gap-10 md:mt-12 md:grid-cols-2 lg:mt-22.5 lg:grid-cols-3 lg:gap-17">
        {cards.map((card, index) => {
          const isHighlighted = !!card.highlighted || index === 1;
          const imageClass = index === 1
            ? "absolute left-[42px] top-[30px] h-24 w-24 object-contain opacity-100"
            : index === 0
              ? "absolute left-[39px] top-[30px] h-24 w-24 object-contain opacity-100"
              : "absolute left-[34px] top-[30px] h-24 w-24 object-contain opacity-100";
          const articleClass = isHighlighted
            ? "bg-[#3E8A66]"
            : "bg-(--color-surface-muted) transition-colors duration-300 hover:bg-(--color-brand)";
          const imageStateClass = isHighlighted
            ? "brightness-0 invert"
            : "transition group-hover:brightness-0 group-hover:invert";
          const headingColorClass = isHighlighted
            ? "text-(--color-inverse)"
            : "text-[#285A43] group-hover:text-(--color-inverse)";
          const paragraphColorClass = isHighlighted
            ? "text-(--color-inverse)"
            : "text-black group-hover:text-(--color-inverse)";
          const paragraphWidthClass = index === 1 ? "w-[269px]" : "w-[259px]";
          
          return (
            <article
              key={card.title}
              className={`group relative h-[380px] w-[350px] rounded-[12px] pr-[34px] pl-12 pt-[30px] pb-8 shadow-[0_0_0_0.1px_rgba(0,0,0,0.3)] opacity-100 ${articleClass}`}
            >
              <img
                src={card.image.src}
                alt={card.image.title}
                className={`${imageClass} ${imageStateClass}`}
              />
              <h3 className={`mt-[127px] font-['Lato'] text-[20px] font-black leading-[140%] tracking-[4%] capitalize ${headingColorClass}`}>
                {card.title}
              </h3>
              <p className={`mt-5 min-h-[120px] font-raleway text-[16px] font-medium leading-[150%] tracking-[0%] ${paragraphWidthClass} ${paragraphColorClass}`}>
                {card.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
