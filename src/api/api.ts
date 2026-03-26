export type ImageAsset = {
  src: string;
  title: string;
};

export type ActionConfig = {
  label: string;
  target: string;
  ariaLabel: string;
};

export type NavItem = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type AboutCard = {
  title: string;
  description: string;
  image: ImageAsset;
  highlighted?: boolean;
};

export type Product = {
  name: string;
  oldPrice: number;
  price: number;
  image: ImageAsset;
  liked?: boolean;
};

export type Benefit = {
  title: string;
  description: string;
  image: ImageAsset;
  highlighted?: boolean;
};

export type Testimonial = {
  name: string;
  avatar: ImageAsset;
  quote: string;
  plantImage: ImageAsset;
};

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  image: ImageAsset;
};

export type SocialLink = {
  platform: "instagram" | "facebook" | "twitter";
  href: string;
  ariaLabel: string;
};

export type SiteData = {
  theme: {
    colors: {
      brand: string;
      textPrimary: string;
      textMuted: string;
      surface: string;
      surfaceMuted: string;
      border: string;
      inverse: string;
    };
  };
  brand: {
    logo: ImageAsset;
    logoLink: string;
    logoAriaLabel: string;
  };
  navItems: NavItem[];
  navbar: {
    cta: ActionConfig;
    mobileMenuAriaLabel: string;
  };
  hero: {
    title: string;
    description: string;
    backgroundImage: ImageAsset;
    primaryAction: ActionConfig;
    secondaryAction: ActionConfig;
    secondaryIconAriaLabel: string;
  };
  about: {
    title: string;
    description: string;
    cards: AboutCard[];
  };
  productsSection: {
    title: string;
    buyButtonLabel: string;
    likeAriaLabel: string;
    items: Product[];
  };
  benefits: {
    title: string;
    sideImage: ImageAsset;
    floatingImage?: ImageAsset;
    cards: Benefit[];
  };
  gallery: {
    title: string;
    leftImage: ImageAsset;
    rightImages: ImageAsset[];
  };
  testimonialsSection: {
    title: string;
    items: Testimonial[];
  };
  subscribe: {
    text: string;
    emailPlaceholder: string;
    submitLabel: string;
    successMessage: string;
    invalidMessage: string;
    backgroundImage: ImageAsset;
  };
  blogSection: {
    title: string;
    readMoreLabel: string;
    items: BlogPost[];
  };
  footer: {
    title: string;
    backgroundImage: ImageAsset;
    leftPlant: ImageAsset;
    rightPlant: ImageAsset;
    socialLinks: SocialLink[];
    navItems: NavItem[];
    copyright: string;
  };
};

const imageAsset = (fileName: string, title: string): ImageAsset => ({
  src: `/assets/images/${encodeURI(fileName)}`,
  title,
});

const siteData: SiteData = {
  theme: {
    colors: {
      brand: "var(--theme-brand)",
      textPrimary: "var(--theme-text-primary)",
      textMuted: "var(--theme-text-muted)",
      surface: "var(--theme-surface)",
      surfaceMuted: "var(--theme-surface-muted)",
      border: "var(--theme-border)",
      inverse: "var(--theme-inverse)",
    },
  },
  brand: {
    logo: imageAsset("Mask group.png", "Lush brand logo"),
    logoLink: "#home",
    logoAriaLabel: "Go to home section",
  },
  navItems: [
    { label: "Home", href: "#home", ariaLabel: "Navigate to home section" },
    { label: "About Us", href: "#about", ariaLabel: "Navigate to about section" },
    { label: "Planters", href: "#planter", ariaLabel: "Navigate to planters section" },
    { label: "Contact", href: "#contact", ariaLabel: "Navigate to contact section" },
  ],
  navbar: {
    cta: {
      label: "Call Us",
      target: "#contact",
      ariaLabel: "Open contact section",
    },
    mobileMenuAriaLabel: "Toggle mobile navigation menu",
  },
  hero: {
    title: "Nature's Beauty Delivered to You",
    description:
      "Nature's beauty is just a click away with our online flower and plant shop. We offer a wide variety of flowers that will bring a touch of nature to your home!",
    backgroundImage: imageAsset("image 1.png", "Hero background flowers"),
    primaryAction: {
      label: "Book Now",
      target: "#planter",
      ariaLabel: "Scroll to planter section",
    },
    secondaryAction: {
      label: "Watch Video",
      target: "#gallery",
      ariaLabel: "Scroll to gallery section",
    },
    secondaryIconAriaLabel: "Play icon",
  },
  about: {
    title: "We Help Choose The Most Suitable Plants For You",
    description:
      "Our selection includes a wide variety of flowers, from classic roses to exotic orchids, as well as a variety of lush indoor and outdoor plants and also offer unique floral arrangements that are perfect for any occasion, whether you're looking to brighten up your home or send a thoughtful gift.",
    cards: [
      {
        title: "Indoor Plants",
        description:
          "Bring the beauty of nature to your outdoor spaces with our wide selection of outdoor plants.",
        image: imageAsset("Indoor_Plant.png", "Indoor plants icon"),
      },
      {
        title: "Outdoor Plants",
        description:
          "Bring a touch of greenery to your living spaces with our collection of indoor plants, perfect for purifying the air and adding a natural touch to your home.",
        image: imageAsset("Outdoor_Plant.png", "Outdoor plants icon"),
        highlighted: true,
      },
      {
        title: "Plants Pots",
        description:
          "Add a touch of style to your indoor or outdoor spaces with our collection of pots plants, available in a variety of sizes and designs to fit any decor",
        image: imageAsset("Bamboo.png", "Plants pots icon"),
      },
    ],
  },
  productsSection: {
    title: "What We Offer To You",
    buyButtonLabel: "Buy Now",
    likeAriaLabel: "Add product to favorites",
    items: [
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("Rectangle 11.png", "Cactus plant one"),
        liked: true,
      },
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("Rectangle 11 (1).png", "Cactus plant two"),
      },
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("Rectangle 6.png", "Cactus plant three"),
      },
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("Rectangle 7.png", "Cactus plant four"),
      },
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("Rectangle 11 (2).png", "Cactus plant five"),
      },
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("Rectangle 9.png", "Cactus plant six"),
      },
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("Rectangle 10(1)(1).png", "Cactus plant seven"),
      },
      {
        name: "Cactus Plant",
        oldPrice: 10,
        price: 8,
        image: imageAsset("pexels-hanna-auramenka-8497490 1.jpg", "Cactus plant eight"),
      },
    ],
  },
  benefits: {
    title: "Why Customers Choose Us",
    sideImage: imageAsset("Group 1.png", "Decorative plant collage"),
    floatingImage: imageAsset("Rectangle 20.png", "Featured potted plant"),
    cards: [
      {
        title: "Quality Product",
        description:
          "Our flowers are of the highest quality, carefully selected and sourced from reputable.",
        image: imageAsset("Time-Cosuming.png", "Quality product icon"),
      },
      {
        title: "Always Fresh",
        description: "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
        image: imageAsset("Grow_Sprout.png", "Always fresh icon"),
        highlighted: true,
      },
      {
        title: "Work Smart",
        description: "We work smart, using innovative techniques and technology to streamline our processes.",
        image: imageAsset("Temperature.png", "Work smart icon"),
        highlighted: true,
      },
      {
        title: "Excellent Service",
        description: "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs.",
        image: imageAsset("Pruning.png", "Excellent service icon"),
      },
    ],
  },
  gallery: {
    title: "Our Gallery View",
    leftImage: imageAsset("image 5.png", "Main gallery plant display"),
    rightImages: [
      imageAsset("pexels-cottonbro-studio-4507715 2.png", "Gallery detail one"),
      imageAsset("pexels-cottonbro-studio-4507715 3.png", "Gallery detail two"),
      imageAsset("pexels-cottonbro-studio-4507715 4.png", "Gallery detail three"),
      imageAsset("pexels-cottonbro-studio-4507715 5.png", "Gallery detail four"),
    ],
  },
  testimonialsSection: {
    title: "What Do They Say About Us",
    items: [
      {
        name: "Doris Watson",
        avatar: imageAsset("Rectangle.png", "Doris Watson avatar"),
        quote:
          "Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.",
        plantImage: imageAsset("Zz_Plant 1.png", "ZZ plant decorative image"),
      },
      {
        name: "Kate Szu",
        avatar: imageAsset("Rectangle (1).png", "Kate Szu avatar"),
        quote: "Great service, beautiful flowers, timely delivery. Highly recommend.",
        plantImage: imageAsset("Snake_Plant 1.png", "Snake plant decorative image"),
      },
      {
        name: "Dyness",
        avatar: imageAsset("Rectangle (2).png", "Dyness avatar"),
        quote: "I am very happy with my purchase from this website, the plants were healthy and arrived on time.",
        plantImage: imageAsset("Bamboo 258.png", "Bamboo decorative image"),
      },
    ],
  },
  subscribe: {
    text: "Enter your email address for our mailing promo or other interesting things",
    emailPlaceholder: "Enter your email",
    submitLabel: "Submit",
    successMessage: "Thanks for subscribing.",
    invalidMessage: "Please enter a valid email address.",
    backgroundImage: imageAsset("arto-suraj-X7jtnqyn54M-unsplash 1.png", "Subscribe section background"),
  },
  blogSection: {
    title: "Interesting Blog To Read",
    readMoreLabel: "Read More",
    items: [
      {
        title: "More productive with an atmosphere of greenery",
        description:
          "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
        date: "January 20, 2023",
        image: imageAsset("image 6.png", "Greenery productivity blog image"),
      },
      {
        title: "The benefits of plants in your room",
        description: "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
        date: "January 10, 2023",
        image: imageAsset("image 7.png", "Plants in room blog image"),
      },
      {
        title: "Hobbyist plants in the house",
        description: "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
        date: "January 15, 2023",
        image: imageAsset("image 8.png", "Hobbyist house plants blog image"),
      },
    ],
  },
  footer: {
    backgroundImage: imageAsset("Rectangle 20.png", "Footer background plants"),
    leftPlant: imageAsset("Monstera 1.png", "Left footer plant"),
    rightPlant: imageAsset("Fern 1.png", "Right footer plant"),
    title: "Feel free to contact us",
    socialLinks: [
      { platform: "instagram", href: "#", ariaLabel: "Open Instagram" },
      { platform: "facebook", href: "#", ariaLabel: "Open Facebook" },
      { platform: "twitter", href: "#", ariaLabel: "Open Twitter" },
    ],
    navItems: [
      { label: "Home", href: "#home", ariaLabel: "Navigate to home section" },
      { label: "About Us", href: "#about", ariaLabel: "Navigate to about section" },
      { label: "Plants", href: "#plants", ariaLabel: "Navigate to plants section" },
      { label: "Delivery", href: "#delivery", ariaLabel: "Navigate to delivery section" },
      { label: "Blog", href: "#blog", ariaLabel: "Navigate to blog section" },
      { label: "Contact Us", href: "#contact", ariaLabel: "Navigate to contact section" },
    ],
    copyright: "Copyright © 2024 Lush. All rights reserved. Jhangir Mughal.",
  },
};

export const fetchSiteData = async (): Promise<SiteData> => Promise.resolve(siteData);
