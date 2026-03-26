import type { CSSProperties } from "react";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import SectionError from "./components/common/SectionError";
import { useSiteData } from "./hooks/useSiteData";

export default function App() {
  const data = useSiteData();

  if (!data) {
    return <SectionError sectionName="Site" />;
  }

  const themeStyles = {
    "--color-brand": data.theme.colors.brand,
    "--color-text-primary": data.theme.colors.textPrimary,
    "--color-text-muted": data.theme.colors.textMuted,
    "--color-surface": data.theme.colors.surface,
    "--color-surface-muted": data.theme.colors.surfaceMuted,
    "--color-border": data.theme.colors.border,
    "--color-inverse": data.theme.colors.inverse,
  } as CSSProperties;

  return (
    <main className="overflow-x-hidden bg-(--color-surface) text-(--color-text-primary)" style={themeStyles}>
      <div className="relative">
        <Navbar
          logo={data.brand.logo}
          brandLink={data.brand.logoLink}
          brandAriaLabel={data.brand.logoAriaLabel}
          navItems={data.navItems}
          cta={data.navbar.cta}
          mobileMenuAriaLabel={data.navbar.mobileMenuAriaLabel}
        />
        <Hero
          title={data.hero.title}
          description={data.hero.description}
          backgroundImage={data.hero.backgroundImage}
          primaryAction={data.hero.primaryAction}
          secondaryAction={data.hero.secondaryAction}
          secondaryIconAriaLabel={data.hero.secondaryIconAriaLabel}
        />
      </div>

      <About title={data.about.title} description={data.about.description} cards={data.about.cards} />

      <Products
        title={data.productsSection.title}
        buyButtonLabel={data.productsSection.buyButtonLabel}
        likeAriaLabel={data.productsSection.likeAriaLabel}
        products={data.productsSection.items}
      />

      <Benefits
        title={data.benefits.title}
        sideImage={data.benefits.sideImage}
        floatingImage={data.benefits.floatingImage}
        cards={data.benefits.cards}
      />

      <Gallery title={data.gallery.title} leftImage={data.gallery.leftImage} rightImages={data.gallery.rightImages} />

      <Testimonials title={data.testimonialsSection.title} items={data.testimonialsSection.items} />

      <Subscribe
        text={data.subscribe.text}
        emailPlaceholder={data.subscribe.emailPlaceholder}
        submitLabel={data.subscribe.submitLabel}
        successMessage={data.subscribe.successMessage}
        invalidMessage={data.subscribe.invalidMessage}
        backgroundImage={data.subscribe.backgroundImage}
      />

      <Blog title={data.blogSection.title} readMoreLabel={data.blogSection.readMoreLabel} posts={data.blogSection.items} />

      <Footer
        title={data.footer.title}
        backgroundImage={data.footer.backgroundImage}
        leftPlant={data.footer.leftPlant}
        rightPlant={data.footer.rightPlant}
        socialLinks={data.footer.socialLinks}
        navItems={data.footer.navItems}
        copyright={data.footer.copyright}
      />
    </main>
  );
}
