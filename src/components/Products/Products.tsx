import { FaHeart, FaRegHeart } from "react-icons/fa";
import type { Product } from "../../api/api";
import SectionError from "../common/SectionError";

type ProductsProps = {
  title: string;
  buyButtonLabel: string;
  likeAriaLabel: string;
  products: Product[];
};

export default function Products({ title, buyButtonLabel, likeAriaLabel, products }: ProductsProps) {
  const isValid = !!(title && buyButtonLabel && likeAriaLabel && products?.length);

  if (!isValid) {
    return <SectionError sectionName="Products" />;
  }

  return (
    <section id="planter" className="section-container relative left-5 mt-14 lg:mt-20">
      <h2 className="text-center text-2xl font-black leading-snug text-(--color-brand) sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-[35px] grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {products.map((product, index) => (
          <div key={`${product.image.src}-${index}`} className="relative h-[314px] w-[280px] overflow-hidden rounded-card bg-(--color-inverse) opacity-100 shadow-card-subtle">
            <div className="relative">
              <img
                src={product.image.src}
                alt={product.image.title}
                className="h-[250px] w-[280px] rounded-tl-[10px] rounded-tr-[10px] border border-(--color-border) object-cover opacity-100"
              />
              <button
                className="absolute right-[20px] top-[18px] grid h-8 w-8 place-items-center rounded-full bg-(--color-inverse) text-(--color-brand) transition hover:bg-(--color-brand) hover:text-(--color-inverse)"
                aria-label={likeAriaLabel}
              >
                {product.liked ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
            <div className="flex items-center gap-12 px-4 py-4">
              <div>
                <h3 className="font-['Lato'] text-[16px] font-black leading-[140%] tracking-[0%] capitalize text-(--color-brand)">{product.name}</h3>
                <p className="pt-1 text-xs font-bold text-(--color-brand)">
                  <span className="text-(--color-text-primary)/70 line-through">(${product.oldPrice})</span> ${product.price}
                </p>
              </div>
              <button className="h-8 w-24.5 rounded-button border border-(--color-brand) bg-transparent text-xs font-black text-(--color-brand) transition hover:bg-(--color-brand) hover:text-(--color-inverse)">
                {buyButtonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
