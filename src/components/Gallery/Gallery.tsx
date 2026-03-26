import type { ImageAsset } from "../../api/api";
import SectionError from "../common/SectionError";

type GalleryProps = {
  title: string;
  leftImage: ImageAsset;
  rightImages: ImageAsset[];
};

export default function Gallery({ title, leftImage, rightImages }: GalleryProps) {
  const isValid = !!(title && leftImage?.src && rightImages?.length);

  if (!isValid) {
    return <SectionError sectionName="Gallery" />;
  }

  return (
    <section id="gallery" className="mx-auto mt-12 w-full max-w-[1440px] lg:mt-[120px] lg:h-[745px] lg:max-w-[1600px]">
      <h2 className="pb-5 text-center font-lato text-2xl font-extrabold leading-tight text-(--color-brand) sm:text-3xl lg:pb-8.75 lg:text-4xl lg:pl-7 lg:pt-1 lg:text-center">
        {title}
      </h2>
      <div className="flex flex-col gap-1 sm:flex-row sm:gap-2.5">
        <div className="sm:flex-1  lg:h-[660px] lg:w-[500px] lg:flex-none">
          <img src={leftImage.src} alt={leftImage.title} className="h-full w-full object-cover" />
        </div>
        <div className="grid gap-1 sm:flex-2 sm:grid-cols-[465px_460px] sm:gap-2.5 sm:w-[935px] sm:shrink-0">
          {rightImages.map((img, idx) => (
            <img
              key={`${img.src}-${idx}`}
              src={img.src}
              alt={img.title}
              className="h-full w-full object-cover sm:h-[325px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
