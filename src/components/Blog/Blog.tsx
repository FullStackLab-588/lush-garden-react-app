import { FaArrowRight, FaRegCalendar } from "react-icons/fa";
import type { BlogPost } from "../../api/api";
import SectionError from "../common/SectionError";

type BlogProps = {
  title: string;
  readMoreLabel: string;
  posts: BlogPost[];
};

export default function Blog({ title, readMoreLabel, posts }: BlogProps) {
  const isValid = !!(title && readMoreLabel && posts?.length);

  if (!isValid) {
    return <SectionError sectionName="Blog" />;
  }

  return (
    <section className="mx-auto w-full max-w-[1220px] py-12 lg:mt-[120px] lg:h-[603px] lg:py-0">
      <h2 className="pb-6 text-center font-lato text-2xl font-extrabold text-(--color-brand) sm:text-3xl lg:mt-[5px] lg:translate-y-[5px] lg:translate-x-[25px] lg:pb-0 lg:text-4xl">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:mt-[50px] lg:grid-cols-3 lg:gap-x-[70px] lg:translate-x-[15px] lg:justify-items-center">
        {posts.map((post, index) => (
          <article key={post.title} className="w-full max-w-[360px] lg:h-[518px] lg:w-[360px]">
            <div>
              <img
                src={post.image.src}
                alt={post.image.title}
                className="h-[329px] w-full rounded-[10px] object-cover lg:h-[329px] lg:w-[360px]"
              />
            </div>
            <div>
              <h3 className="pt-4 font-lato text-xl font-black leading-snug text-(--color-brand)">{post.title}</h3>
              <p className={`${index === 0 ? "pt-[5px]" : "pt-[24px]"} pr-0 font-raleway text-[16px] font-medium leading-[150%] tracking-[0] text-[#121212] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden`}>{post.description}</p>
              <div className={`${index === 0 ? "pt-[12px]" : "pt-[24px]"} flex items-center justify-between text-(--color-brand)`}>
              <p className="inline-flex items-center gap-1.5 font-raleway text-[16px] font-medium leading-[150%] tracking-[0] text-[#121212CC]">
                <span className="w-[18px] h-[20px] flex items-center justify-center text-[#121212CC]">
                  <FaRegCalendar />
                </span>
                <span>{post.date}</span>
              </p>
              <p className="inline-flex items-center gap-1.5 font-lato font-black text-[16px] leading-[140%] tracking-[0] text-[#285A43]">
                {readMoreLabel}
                <span className="w-[24px] h-[24px] flex items-center justify-center">
                  <FaArrowRight />
                </span>
              </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
