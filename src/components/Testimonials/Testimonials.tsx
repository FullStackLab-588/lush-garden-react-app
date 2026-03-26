import type { Testimonial } from "../../api/api";

type TestimonialsProps = {
  title: string;
  items: Testimonial[];
};

export default function Testimonials({ title, items }: TestimonialsProps) {
  if (!title || !items?.length) {
    throw new Error("Testimonials section data is invalid.");
  }

  return (
    <section className="mx-auto w-full max-w-[1220px] py-12 lg:mt-[120px] lg:h-[414px] lg:py-0">
      <h2 className="text-center pl-10 font-lato text-2xl font-black leading-snug tracking-wide text-(--color-brand) sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-[35px] grid gap-6 md:grid-cols-2 lg:ml-[20px] lg:grid-cols-3 lg:gap-[95px]">
        {items.map((item) => (
          <article key={item.name} className="relative overflow-hidden rounded-[10px] bg-(--color-surface-muted) lg:h-[329px] lg:w-[360px]">
            <div className="flex items-center gap-5 pl-[44px] pt-[39px]">
              <div>
                <img src={item.avatar.src} alt={item.avatar.title} className="h-[64px] w-[64px] rounded-[50px] object-cover" />
              </div>
              <h3 className="font-lato text-xl font-black leading-snug text-(--color-brand)">{item.name}</h3>
            </div>
            <p className="mt-[40px] pl-[44px] pr-[69px] font-raleway text-base font-medium leading-[150%] tracking-[0] text-[#121212]">"{item.quote}"</p>
            <div className="pointer-events-none absolute bottom-0 right-0 w-[170px] opacity-12">
              <img src={item.plantImage.src} alt={item.plantImage.title} className="w-full object-contain" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
