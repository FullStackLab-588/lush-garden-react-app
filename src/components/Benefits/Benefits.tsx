import type { Benefit, ImageAsset } from "../../api/api";
import SectionError from "../common/SectionError";

type BenefitsProps = {
  title: string;
  sideImage: ImageAsset;
  floatingImage?: ImageAsset;
  cards: Benefit[];
};

export default function Benefits({ title, sideImage, cards }: BenefitsProps) {
  const isValid = !!(title && sideImage?.src && cards?.length);
  const cardStyles = [
    {
      image: "mt-[35.95px] h-[84px] w-[88.72px]",
      title: "mt-[32px] ml-[-12px] pl-[16px]",
      description: "mt-[10px] ml-[-12px] pl-[14px] pr-[25px]",
    },
    {
      image: "ml-[-20px] mt-[30.95px] h-[98.10px] w-[88.72px]",
      title: "mt-[24px] ml-[-12px]",
      description: "mt-[10px] ml-[-12px] pr-[25px]",
    },
    {
      image: "ml-[11.08px] mt-[39.16px] h-[79.6710510254px] w-[73.8444442749px]",
      title: "mt-[32px] ml-[-12px] pl-[16px]",
      description: "mt-[10px] ml-[-12px] pl-[14px] pr-[8px]",
    },
    {
      image: "ml-[-8.91px] mt-[32.66px] h-[85.4px] w-[76.4px]",
      title: "mt-[32px] ml-[-12px]",
      description: "mt-[10px] ml-[-12px] pr-[10px]",
    },
  ];

  if (!isValid) {
    return <SectionError sectionName="Benefits" />;
  }

  return (
    <section className="mx-auto mt-14 w-full max-w-[1440px] lg:mt-30 lg:h-[758px]" aria-label={title}>
      <div className="grid h-full lg:grid-cols-[720px_720px]">
        <div className="min-h-[340px]">
          <img src={sideImage.src} alt={sideImage.title} className="h-full w-full object-cover" />
        </div>

        <div className="grid sm:grid-cols-2 lg:h-[758px] lg:grid-cols-2 lg:grid-rows-2">
          {cards.map((card, index) => {
            const styles = cardStyles[index] ?? cardStyles[0];

            return (
              <article
                key={card.title}
                className={`${card.highlighted ? "bg-(--color-surface-muted)" : "bg-(--color-inverse)"} flex flex-col overflow-hidden px-5 py-8 md:px-10 md:py-10 lg:h-[379px] lg:pl-[68px] lg:pr-[30px]`}
              >
              <img
                src={card.image.src}
                alt={card.image.title}
                className={`${styles.image} object-contain`}
              />
              <h3
                className={`${styles.title} font-lato text-[20px] font-black leading-[140%] tracking-[0] text-[#285A43]`}
              >
                {card.title}
              </h3>
              <p
                className={`${styles.description} font-raleway text-base font-medium leading-[150%] tracking-[0] text-[#121212]`}
              >
                {card.description}
              </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
