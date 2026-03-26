import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import type { ImageAsset, NavItem, SocialLink } from "../../api/api";
import SectionError from "../common/SectionError";

type FooterProps = {
  title: string;
  backgroundImage: ImageAsset;
  leftPlant: ImageAsset;
  rightPlant: ImageAsset;
  socialLinks: SocialLink[];
  navItems: NavItem[];
  copyright: string;
};

export default function Footer({
  title,
  backgroundImage,
  leftPlant,
  rightPlant,
  socialLinks,
  navItems,
  copyright,
}: FooterProps) {
  const isValid = !!(title && backgroundImage?.src && leftPlant?.src && rightPlant?.src && socialLinks?.length && navItems?.length);

  if (!isValid) {
    return <SectionError sectionName="Footer" />;
  }

  const iconMap = {
    instagram: FaInstagram,
    facebook: FaFacebookF,
    twitter: FaTwitter,
  } as const;
  

  return (
    <footer className="relative mx-auto mt-10 w-full max-w-[1440px] bg-cover bg-center bg-no-repeat lg:mt-[120px] lg:h-[374px]" style={{ backgroundImage: `url(${backgroundImage.src})` }}>
      <div className="pointer-events-none absolute bottom-0 left-0 hidden md:block">
        <img src={leftPlant.src} alt={leftPlant.title} />
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 hidden md:block">
        <img src={rightPlant.src} alt={rightPlant.title} />
      </div>

      <h2 className="pt-12 text-center font-lato text-2xl font-black leading-[140%] tracking-[0] text-(--color-inverse) md:pt-[75px] md:translate-x-[15px] md:text-[32px]">
        {title}
      </h2>

      <div className="mt-8 flex items-center justify-center gap-6 text-2xl text-(--color-inverse) md:mt-8 lg:pl-4 md:gap-17.5 md:text-3xl">
          {socialLinks.map((social) => {
            const Icon = iconMap[social.platform];

            return (
            <a key={social.platform} aria-label={social.ariaLabel} className="inline-flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-(--color-inverse) text-[24px] text-(--color-inverse) md:h-[60px] md:w-[60px] md:text-[28px]" href={social.href}>
              <Icon />
            </a>
          );
        })}
        </div>

        <ul className="section-container mt-10 flex flex-wrap justify-center gap-4 pb-12 text-sm font-bold leading-normal text-(--color-inverse) md:mt-10 md:gap-15.5 lg:pl-7.5 md:text-base">
          {navItems.map((item) => (
            <li key={item.label}>
              <a aria-label={item.ariaLabel} href={item.href} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

            <div className="fixed bottom-0 left-0 w-screen bg-black px-3 py-2 text-center font-lato text-xs font-bold text-(--color-inverse) md:text-base z-50">
        {copyright}
      </div>
    </footer>
  );
}