import { FaRegCirclePlay } from "react-icons/fa6";
import type { ActionConfig, ImageAsset } from "../../api/api";
import SectionError from "../common/SectionError";

type HeroProps = {
  title: string;
  description: string;
  backgroundImage: ImageAsset;
  primaryAction: ActionConfig;
  secondaryAction: ActionConfig;
  secondaryIconAriaLabel: string;
};

export default function Hero({ title, description, backgroundImage, primaryAction, secondaryAction, secondaryIconAriaLabel }: HeroProps) {
  const isValid = !!(title && description && backgroundImage?.src && primaryAction?.target && secondaryAction?.target);

  if (!isValid) {
    return <SectionError sectionName="Hero" />;
  }

 

  return (
    <section
      id="home"
      className="min-h-125 bg-cover bg-center md:min-h-130.5 lg:min-h-189.5 lg:bg-[15%_center]"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <div className="section-container">
        <div className="flex flex-col items-center gap-6 pt-21.5 text-center text-(--color-inverse) md:gap-7 md:pt-23.75 lg:gap-9 lg:pt-26.75">
          <div className="relative">
            
            <h1 className="relative mt-25 max-w-225 font-lato text-[60px] font-bold leading-tight lg:mt-[110px] lg:max-w-none lg:-translate-x-[-10px] lg:text-[62px] lg:tracking-[0.01em] lg:whitespace-nowrap">
              {title}
            </h1>
          </div>
          <p className="hero-description-width text-center font-poppins text-[18px] font-medium leading-[140%] tracking-[0] text-[#F8F8F8] md:w-75 lg:w-196.75 lg:-translate-x-[-10px]">
            {description}
          </p>
          <div className="relative w-full flex justify-center">
            <div className="absolute right-0 top-0 max-w-225 font-lato text-sm font-medium leading-snug text-(--color-surface-muted) opacity-30 blur-sm">
              {description}
            </div>
            <div className="flex flex-wrap justify-center gap-[13px] lg:translate-x-[11px] lg:translate-y-[1px]">

           <button
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-button border border-(--color-brand) bg-(--color-brand) px-8 font-lato text-sm font-bold text-(--color-inverse) transition-all duration-300 ease-out hover:bg-transparent hover:shadow-[0_10px_24px_rgba(0,0,0,0.28)] lg:px-12.5"
              aria-label={primaryAction.ariaLabel}
              
            >
              {primaryAction.label}

               </button>
            
            <button
              type="button"
              className="inline-flex h-10 w-42.5 items-center justify-center gap-[10px] rounded-button border border-(--color-inverse) font-lato text-sm font-semibold text-(--color-inverse) transition-all duration-300 ease-out hover:border-(--color-brand) hover:bg-(--color-brand)/20 hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)] lg:w-46.75"
              aria-label={secondaryAction.ariaLabel}
             
            >
              <FaRegCirclePlay aria-label={secondaryIconAriaLabel} className="h-[20px] w-[20px] opacity-100" />
              <span>{secondaryAction.label}</span>
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
