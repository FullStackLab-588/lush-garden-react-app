import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import type { ActionConfig, ImageAsset, NavItem } from "../../api/api";
import SectionError from "../common/SectionError";

type NavbarProps = {
  logo: ImageAsset;
  brandLink: string;
  brandAriaLabel: string;
  navItems: NavItem[];
  cta: ActionConfig;
  mobileMenuAriaLabel: string;
};

export default function Navbar({ logo, brandLink, brandAriaLabel, navItems, cta, mobileMenuAriaLabel }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const isValid = !!(logo?.src && brandLink && brandAriaLabel && navItems?.length && cta?.target);

  if (!isValid) {
    return <SectionError sectionName="Navbar" />;
  }

  const goToTarget = (target: string) => {
    window.location.hash = target;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-between px-2 py-3 md:px-2 md:py-4 lg:px-2 lg:py-5">
        <div>
          <a href={brandLink} aria-label={brandAriaLabel}>
            <img src={logo.src} alt={logo.title} className="mt-[18px] ml-[113px] w-20 md:w-26" />
          </a>
        </div>

        <div className="hidden flex-1 items-center justify-end md:flex md:gap-20">
          <ul className="flex gap-6 font-lato text-[45px] font-bold text-(--color-inverse)/85 lg:gap-11.25 lg:text-base">
            {navItems.map((item) => (
              <li key={item.label}>
                    <a aria-label={item.ariaLabel} className={`inline-block mr-px border-b-2 border-transparent pb-1 transition hover:border-(--color-inverse) hover:text-(--color-inverse) ${item.label === "Home" ? "translate-x-[-7px] translate-y-[5px]" : item.label === "About Us" ? "translate-x-px translate-y-[5px]" : item.label === "Planters" ? "translate-x-[10px] translate-y-[5px]" : item.label === "Contact" ? "translate-x-[17px] translate-y-[5px]" : ""}`} href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative ml-16 -left-15">
            <button
              type="button"
              aria-label={cta.ariaLabel}
              onClick={() => goToTarget(cta.target)}
              className="inline-flex h-10 w-[148px] translate-x-px translate-y-px items-center justify-center rounded-button border border-(--color-inverse) bg-transparent text-base font-semibold text-(--color-inverse) transition hover:border-(--color-brand) hover:bg-(--color-brand) lg:h-10 lg:w-[148px] lg:text-base"
            >
              {cta.label}
            </button>
          </div>
        </div>

        <button
          aria-label={mobileMenuAriaLabel}
          className="text-(--color-inverse) md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-black/70 transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "pointer-events-none translate-x-full"}`}
      >
          <ul className="flex flex-col items-center gap-10 font-lato text-xl font-bold text-(--color-inverse)">
            {navItems.map((item) => (
              <li key={item.label}>
                <a aria-label={item.ariaLabel} href={item.href} className="hover:underline" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <button
              type="button"
              aria-label={cta.ariaLabel}
              className="inline-flex h-13.25 w-46.75 items-center justify-center rounded-button border border-(--color-inverse) text-xl font-bold text-(--color-inverse)"
              onClick={() => {
                setOpen(false);
                goToTarget(cta.target);
              }}
            >
              {cta.label}
            </button>
          </div>
      </div>
    </header>
  );
}
