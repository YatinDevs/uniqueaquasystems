// utils/seoConfig.js — Unique Aqua Systems & Chemical Industries | SEO Config

export const siteSEO = {
  siteName: "Unique Aqua Systems & Chemical Industries",
  shortName: "Unique Aqua",
  defaultTitle:
    "Unique Aqua Systems & Chemical Industries | Water Treatment Solutions Nashik | Since 2002",
  defaultDescription:
    "Unique Aqua — Total Water Management Solutions since 2002. Leading manufacturer and supplier of UNI-TREAT® chemical water treatment, mechanical water treatment systems (RO, DM, softening, filters), and water treatment plant spares. ISO certified. Nashik Ambad MIDC.",
  tagline: "Total Water Management Solutions Since 2002",
  baseUrl: "https://www.uniqueaquasystems.com",
  defaultImage: "/og-uniqueaqua.jpg",
  locale: "en_IN",
  email: "amitrudre@gmail.com",
  phone: "+91-253-6699936",
  address:
    "4, Sai Shree Industrial Estate, Plot No. 8, S.No. 82/1, MIDC Area, Ambad, Nashik - 422 010",
  foundingYear: "2002",
  founder: "Unique Aqua Team",
  gaMeasurementId: "G-XXXXXXXXXX", // TODO: Replace with actual GA ID
};

// ─── Page-level SEO ───────────────────────────────────────────────────────────
export const pageSEO = {
  home: {
    title:
      "Unique Aqua Systems & Chemical Industries | Water Treatment Nashik | UNI-TREAT®",
    description:
      "Unique Aqua Systems & Chemical Industries — Total Water Management Solutions since 2002. UNI-TREAT® chemical solutions, mechanical water treatment systems, RO plants, DM plants, softeners, UV disinfection, and water testing equipment. ISO certified. Nashik Ambad MIDC.",
    keywords:
      "water treatment Nashik, UNI-TREAT chemicals, RO plant Nashik, DM plant, water softener, cooling tower chemicals, boiler water treatment, UV disinfection, water testing kits, Unique Aqua Systems",
    canonical: "/",
    ogImage: "/og-home.jpg",
  },

  // ── Company Pages ──────────────────────────────────────────────────────────
  "about-us": {
    title:
      "About Unique Aqua Systems & Chemical Industries | Water Treatment Company Since 2002",
    description:
      "Unique Aqua Systems & Chemical Industries — ISO certified water treatment company serving Asian region since 2002. Chemical division, mechanical water treatment division, and spares & equipments division. Nashik Ambad MIDC.",
    keywords:
      "about Unique Aqua, water treatment company Nashik, ISO certified water treatment, Unique Aqua Systems history, water treatment manufacturer Maharashtra",
    canonical: "/company/about-us",
    ogImage: "/og-about.jpg",
  },
  "quality-policy": {
    title: "Quality Policy | Unique Aqua Systems & Chemical Industries",
    description:
      "Unique Aqua's quality policy: committed to providing products and services related to speciality chemicals & equipments that comply with agreed requirements. ISO quality standards.",
    keywords:
      "quality policy water treatment, ISO certified chemicals, Unique Aqua quality, water treatment quality standards",
    canonical: "/company/quality-policy",
    ogImage: "/og-about.jpg",
  },
  "our-mission": {
    title: "Our Mission | Unique Aqua Systems & Chemical Industries",
    description:
      "Unique Aqua's mission: to be a major provider of sustainable water-related solutions and technical services in the Asian Region through long term partnerships benefiting customers, employees, communities, and the environment.",
    keywords:
      "Unique Aqua mission, sustainable water treatment, water management solutions Asia, Total Water Management Program",
    canonical: "/company/our-mission",
    ogImage: "/og-about.jpg",
  },

  // ── Products ───────────────────────────────────────────────────────────────
  products: {
    title:
      "Products | Unique Aqua Systems | UNI-TREAT® Chemicals & Water Treatment Systems",
    description:
      "Complete range of water treatment products: Chemical Division (UNI-TREAT® cooling, boiler, descaling, speciality chemicals), Mechanical Division (RO, DM, softeners, filters, UV), and Spares & Equipments Division.",
    keywords:
      "UNI-TREAT chemicals, water treatment products, RO plant, DM plant, water softener, sand filter, cooling tower chemicals, boiler water treatment, water testing kits, Unique Aqua",
    canonical: "/products",
    ogImage: "/og-products.jpg",
  },

  // ── Application Areas ─────────────────────────────────────────────────────
  "application-areas": {
    title:
      "Application Areas | Unique Aqua | Industry Water Treatment Solutions",
    description:
      "Unique Aqua serves cooling towers, boilers, pharma, sugar industry, food & beverage, textile, power plants, hotels, hospitals, construction, and automotive sectors with tailored water treatment solutions.",
    keywords:
      "water treatment industries, cooling tower treatment, boiler water treatment, pharmaceutical water treatment, sugar industry water treatment, food beverage water, textile water treatment",
    canonical: "/application-areas",
    ogImage: "/og-applications.jpg",
  },

  // ── Clients ───────────────────────────────────────────────────────────────
  clients: {
    title:
      "Our Clients | Unique Aqua Systems | Trusted by Leading Industries",
    description:
      "Unique Aqua Systems & Chemical Industries is trusted by Advanced Enzymes, Crompton Greaves, Parle, IndianOil, General Mills, Kirloskar, Exide, SULA Vineyards, and 30+ other leading companies.",
    keywords:
      "Unique Aqua clients, water treatment clients India, chemical company customers, industrial water treatment customers Nashik",
    canonical: "/clients",
    ogImage: "/og-clients.jpg",
  },

  // ── News & Events ─────────────────────────────────────────────────────────
  "news-events": {
    title:
      "News & Events | Unique Aqua Systems & Chemical Industries",
    description:
      "Latest news, events, product updates and industry insights from Unique Aqua Systems & Chemical Industries.",
    keywords:
      "Unique Aqua news, water treatment news, chemical industry events, water treatment updates",
    canonical: "/news-events",
    ogImage: "/og-news.jpg",
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    title:
      "Contact Unique Aqua Systems | Water Treatment Enquiry | Nashik Maharashtra",
    description:
      "Contact Unique Aqua Systems & Chemical Industries. Enquire about UNI-TREAT® chemicals, RO plants, DM plants, water softeners, filtration systems. Works: 4, Sai Shree Industrial Estate, Ambad, Nashik. Tel: +91-253-6699936.",
    keywords:
      "contact Unique Aqua, water treatment enquiry Nashik, UNI-TREAT chemical quote, RO plant enquiry, water softener Nashik, Unique Aqua phone",
    canonical: "/contact",
    ogImage: "/og-contact.jpg",
  },
};

// ─── Product Division SEO ─────────────────────────────────────────────────────
export const divisionSEO = {
  chemical: {
    title:
      "Chemical Water Treatment Division | UNI-TREAT® Products | Unique Aqua",
    description:
      "UNI-TREAT® Series of chemical water treatment solutions: Cooling Tower Chemicals, Boiler Water Treatment, Descaling Products, Speciality Chemicals, Fire Side System Chemicals, and Sugar Process Chemicals.",
    keywords:
      "UNI-TREAT chemicals, cooling tower treatment chemicals, boiler water treatment, descaling chemicals, sugar process chemicals, fire side chemicals Nashik",
    canonical: "/products/chemical",
    h1: "Chemical Water Treatment Division",
    ogImage: "/og-chemical.jpg",
  },
  mechanical: {
    title:
      "Mechanical Water Treatment Division | RO, DM, Softener, Filters | Unique Aqua",
    description:
      "UNITREAT® mechanical water treatment systems: Multi Grade Sand Filters, Activated Carbon Filters, Water Softening Plants, DM Plants, Reverse Osmosis Systems, Domestic RO, UV Disinfection.",
    keywords:
      "RO plant Nashik, DM plant, water softener, sand filter, UV disinfection, reverse osmosis system, demineralization plant, water treatment plant Nashik",
    canonical: "/products/mechanical",
    h1: "Mechanical Water Treatment Division",
    ogImage: "/og-mechanical.jpg",
  },
  spares: {
    title:
      "Spares & Equipments Division | Water Testing, Filter Cartridges, Plant Spares | Unique Aqua",
    description:
      "Complete water treatment spares: Water Testing Kits (30+ parameters), BACTASLYDE microbe detection, Filtration Cartridges (0.2-100 micron), FRP Pressure Vessels, Filtration Media, Multiport Valves.",
    keywords:
      "water testing kits, filter cartridges, FRP pressure vessels, multiport valves, filtration media, water treatment spares Nashik",
    canonical: "/products/spares",
    h1: "Spares & Equipments Division",
    ogImage: "/og-spares.jpg",
  },
};

// ─── Product Category SEO ─────────────────────────────────────────────────────
export const productCategorySEO = {
  "cooling-towers-open-loop": {
    title:
      "Open Loop Cooling Tower Water Treatment Chemicals | UNI-TREAT® | Unique Aqua",
    description:
      "UNI-TREAT® cooling tower water treatment chemicals: Non-oxidizing & Oxidizing Biocides, Dispersants, Scale Inhibitors (Carbonate, Sulphate, Silica), Corrosion Inhibitors, Multipurpose Chemicals, Online Cleaners.",
    keywords:
      "cooling tower chemicals, cooling water treatment, scale inhibitor cooling tower, corrosion inhibitor, biocide cooling tower, UNI-TREAT cooling, open loop cooling treatment Nashik",
    canonical: "/products/chemical/cooling-towers-open-loop",
    h1: "Open Loop Cooling Water Treatment Chemicals",
    breadcrumb: "Cooling Towers",
    ogImage: "/og-cooling.jpg",
  },
  "closed-loop-cooling-chillers": {
    title: "Closed Loop Cooling System Chemicals | Chiller Treatment | UNI-TREAT®",
    description:
      "UNI-TREAT® Close Loop Corrosion Inhibitors for chiller systems and closed cooling loops. Prevent corrosion in closed water circulation systems.",
    keywords:
      "closed loop cooling chemicals, chiller water treatment, close loop corrosion inhibitor, UNI-TREAT chiller chemical",
    canonical: "/products/chemical/closed-loop-cooling-chillers",
    h1: "Closed Loop Cooling System & Chiller Treatment",
    breadcrumb: "Closed Loop Cooling",
    ogImage: "/og-chiller.jpg",
  },
  "boiler-water-treatment": {
    title:
      "Boiler Water Treatment Chemicals | UNI-TREAT® | Scale & Corrosion Prevention",
    description:
      "UNI-TREAT® Boiler Water Treatment: Softening Agent/Antiscalant, Polymeric Sludge Conditioner, Instant Oxygen Scavenger, Corrosion Control Agents, Neutralizing Agents, Multipurpose Boiler Chemical.",
    keywords:
      "boiler water treatment chemicals, boiler antiscalant, oxygen scavenger, boiler corrosion inhibitor, sludge conditioner, boiler chemical Nashik, UNI-TREAT boiler",
    canonical: "/products/chemical/boiler-water-treatment",
    h1: "Boiler Water Treatment Chemicals",
    breadcrumb: "Boiler Water Treatment",
    ogImage: "/og-boiler.jpg",
  },
  "descaling-products": {
    title: "Descaling Chemicals | UNI-TREAT® | Industrial Descaling Products",
    description:
      "UNI-TREAT® Descaling Chemicals: Liquid Compound (MS & Hard Scales), Powder Compound (Copper & SS), Alkaline Descaling Chemical, Silica Descalent. Remove hard scale from industrial equipment.",
    keywords:
      "descaling chemicals, industrial descaling, boiler descaling, heat exchanger cleaning, silica descalent, UNI-TREAT descaling, scale removal Nashik",
    canonical: "/products/chemical/descaling-products",
    h1: "Industrial Descaling Products",
    breadcrumb: "Descaling Products",
    ogImage: "/og-descaling.jpg",
  },
  "speciality-chemicals": {
    title:
      "UNI-TREAT® Speciality Chemicals | RO Antiscalents, Defoamer, Corrosion Inhibitor",
    description:
      "UNI-TREAT® Speciality Chemicals: RO Antiscalents, RO Membrane Cleaners, RO Membrane Bio-fouling Cleaners, Potable Water Corrosion Inhibitor, Defoamer, Oil Dispersant.",
    keywords:
      "RO antiscalent, RO membrane cleaner, potable water corrosion inhibitor, defoamer, oil dispersant, UNI-TREAT speciality chemicals",
    canonical: "/products/chemical/speciality-chemicals",
    h1: "UNI-TREAT® Speciality Chemicals",
    breadcrumb: "Speciality Chemicals",
    ogImage: "/og-speciality.jpg",
  },
  "fire-side-chemicals": {
    title: "UNI-TREAT® Fire Side System Chemicals | Boiler Fireside Treatment",
    description:
      "UNI-TREAT® Fire Side System Chemicals: Multipurpose Solid Fuel Additive for Wood & Coal, Furnace Post Treatment Clear Compound. Improve boiler efficiency and reduce slagging.",
    keywords:
      "fire side chemicals, boiler fireside treatment, solid fuel additive, furnace treatment, coal boiler chemical, UNI-TREAT fire side",
    canonical: "/products/chemical/fire-side-chemicals",
    h1: "UNI-TREAT® Fire Side System Chemicals",
    breadcrumb: "Fire Side Chemicals",
    ogImage: "/og-fireside.jpg",
  },
  "sugar-process-chemicals": {
    title:
      "UNI-TREAT® Sugar Process Chemicals | Evaporator Antiscalant, Viscosity Reducer",
    description:
      "UNI-TREAT® Sugar Process Chemicals: pH Booster for Spray Pond, Scale Inhibitor Evaporator Antiscalant, Viscosity Reducer Pan Boiling Aid, Sugar Extractor, Bagasse Fire Mate.",
    keywords:
      "sugar process chemicals, evaporator antiscalant, viscosity reducer sugar, sugar extractor, bagasse fire mate, UNI-TREAT sugar, sugar mill chemicals Nashik",
    canonical: "/products/chemical/sugar-process-chemicals",
    h1: "UNI-TREAT® Sugar Process Chemicals",
    breadcrumb: "Sugar Process Chemicals",
    ogImage: "/og-sugar.jpg",
  },
  "sand-carbon-iron-filters": {
    title:
      "Multi Grade Sand Filters, Activated Carbon Filters | UNITREAT® | Unique Aqua",
    description:
      "UNITREAT® MGF/ACF filtration systems from 1 to 30 m³/hr. Available in MS, FRP & HDPE construction. Single & multiple valve operation. MS High Flow, FRP Combination, Automatic sand/carbon filter & softener.",
    keywords:
      "sand filter, activated carbon filter, iron removal filter, MGF ACF filter, water filtration system Nashik, multi grade sand filter",
    canonical: "/products/mechanical/sand-carbon-iron-filters",
    h1: "Multi Grade Sand Filters, ACF & Iron Removal Filters",
    breadcrumb: "Sand & Carbon Filters",
    ogImage: "/og-filters.jpg",
  },
  "water-softening-plant": {
    title:
      "Water Softening Plant | UNITREAT® Softener | Zero Hardness Systems | Unique Aqua",
    description:
      "UNITREAT® Water Softening Plants from 0.5 to 20 m³/hr with 25-1000 Ltr resin capacity. MS Softener, FRP Softener, Auto Softener. Achieves Industrial Zero Hardness.",
    keywords:
      "water softener Nashik, water softening plant, UNITREAT softener, zero hardness water, ion exchange softener, hard water treatment, water softening system Maharashtra",
    canonical: "/products/mechanical/water-softening-plant",
    h1: "Water Softening Plant",
    breadcrumb: "Water Softening Plant",
    ogImage: "/og-softener.jpg",
  },
  "demineralization-dm-plant": {
    title:
      "DM Plant | Demineralization System | UNITREAT® | High Purity Water | Unique Aqua",
    description:
      "UNITREAT® Demineralization (DM) Plants: Two-bed DM Plant, Auto DM Plant, Mixed Bed Deionisers. Conductivity < 20 µS/cm. TDS < 10 ppm. Capacity 0.5 to 20 m³/hr.",
    keywords:
      "DM plant, demineralization plant, mixed bed deionizer, high purity water, UNITREAT DM plant, water demineralization Nashik, industrial water purification",
    canonical: "/products/mechanical/demineralization-dm-plant",
    h1: "Demineralization Systems (D. M. Plant)",
    breadcrumb: "DM Plant",
    ogImage: "/og-dm-plant.jpg",
  },
  "reverse-osmosis-ro-plant": {
    title:
      "RO Plant | Reverse Osmosis System | UNITREAT® R.O. | 7 LpH to 10000 LpH | Unique Aqua",
    description:
      "UNITREAT® Reverse Osmosis Systems from 7 LpH to 10,000 LpH. Industrial RO plants for removing dissolved solids, bacteria, and contaminants using membrane technology.",
    keywords:
      "RO plant Nashik, reverse osmosis system, industrial RO plant, UNITREAT RO, water purification plant, RO system Maharashtra, commercial RO plant",
    canonical: "/products/mechanical/reverse-osmosis-ro-plant",
    h1: "Reverse Osmosis System (R. O. Plant)",
    breadcrumb: "RO Plant",
    ogImage: "/og-ro-plant.jpg",
  },
  "domestic-ro-system": {
    title: "Domestic RO System | Household Water Purifier | Unique Aqua Nashik",
    description:
      "Compact domestic reverse osmosis systems for safe, clean drinking water. Perfect for homes, offices, and small commercial establishments. Nashik.",
    keywords:
      "domestic RO system, household water purifier, home RO system, drinking water purifier Nashik",
    canonical: "/products/mechanical/domestic-ro-system",
    h1: "Domestic R. O. System",
    breadcrumb: "Domestic RO",
    ogImage: "/og-domestic-ro.jpg",
  },
  "uv-disinfection-system": {
    title:
      "UV Disinfection System | Ultra Violet Dis-Infection | UNITREAT® UV | Unique Aqua",
    description:
      "UNITREAT® UV Disinfection Systems (UV-C 200-280 nm) effective against bacteria, viruses, yeasts, protozoa, fungi, cysts, spores. Models 1-63 to 17-76. No chemicals required.",
    keywords:
      "UV disinfection system, ultraviolet disinfection, UV water treatment, UNITREAT UV, UV sterilizer water, UV disinfection Nashik, bacteria removal water",
    canonical: "/products/mechanical/uv-disinfection-system",
    h1: "Ultra Violet Dis-Infection System",
    breadcrumb: "UV Disinfection",
    ogImage: "/og-uv.jpg",
  },
  "water-testing-kits": {
    title:
      "Water Testing Kits & Equipment | BACTASLYDE | 30+ Parameters | Unique Aqua",
    description:
      "Water testing kits for 30+ parameters (hardness, chlorine, silica, iron, pH, TDS). BACTASLYDE microbe detection device. Digital water testing equipment (pH meter, TDS meter, conductivity meter).",
    keywords:
      "water testing kits, water quality testing, BACTASLYDE microbe detection, water test kit Nashik, boiler water testing, cooling tower water test, water testing equipment India",
    canonical: "/products/spares/water-testing-kits",
    h1: "Water Testing Kits & Equipments",
    breadcrumb: "Water Testing Kits",
    ogImage: "/og-testing.jpg",
  },
  "filtration-cartridges-housings": {
    title:
      "Filter Cartridges & Housings | PP, PES, PTFE, SS | 0.2 to 100 Micron | Unique Aqua",
    description:
      "Filter cartridges: String Wound, Spun PP, Pleated PP (0.2-100 micron), SS Filter Cartridges, Activated Carbon, Plastic Filter Housings, Filter Bags, Bag Filter Assemblies, Washable Net Cartridges.",
    keywords:
      "filter cartridges, PP filter cartridge, pleated filter, string wound cartridge, SS filter cartridge, filter housing, bag filter, water filter cartridge Nashik",
    canonical: "/products/spares/filtration-cartridges-housings",
    h1: "Filtration Cartridges and Housings",
    breadcrumb: "Filter Cartridges",
    ogImage: "/og-cartridges.jpg",
  },
  "water-treatment-plants-spares": {
    title:
      "Water Treatment Plant Spares | FRP Vessels, Multiport Valves, Filter Media | Unique Aqua",
    description:
      "Water treatment plant spares: FRP Pressure Vessels (8x35 to 63x86), Filtration Media (gravel, sand, activated carbon, ion exchange resin), Multiport Valves (20-65 Nb), Distribution Systems, Hydro Pneumatic Tanks.",
    keywords:
      "FRP pressure vessels, multiport valves, filtration media, water treatment spares, ion exchange resin, activated carbon media, distribution strainer, hydro pneumatic tank Nashik",
    canonical: "/products/spares/water-treatment-plants-spares",
    h1: "Water Treatment Plants Spares",
    breadcrumb: "Plant Spares",
    ogImage: "/og-spares.jpg",
  },
};

// ─── buildMetadata ─────────────────────────────────────────────────────────────
export function buildMetadata(pageKey) {
  const seo = pageSEO[pageKey] || pageSEO.home;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// ─── buildProductMetadata ─────────────────────────────────────────────────────
export function buildProductMetadata(categorySlug) {
  const seo = productCategorySEO[categorySlug] || pageSEO.products;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// ─── buildDivisionMetadata ────────────────────────────────────────────────────
export function buildDivisionMetadata(divisionSlug) {
  const seo = divisionSEO[divisionSlug] || pageSEO.products;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${siteSEO.baseUrl}${seo.canonical}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteSEO.baseUrl}${seo.canonical}`,
      siteName: siteSEO.siteName,
      locale: siteSEO.locale,
      type: "website",
      images: [
        {
          url: `${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${siteSEO.baseUrl}${seo.ogImage || siteSEO.defaultImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
  };
}

// ─── Schema Generators ────────────────────────────────────────────────────────
export function getBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteSEO.baseUrl}${item.href}`,
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteSEO.siteName,
    url: siteSEO.baseUrl,
    logo: `${siteSEO.baseUrl}/logo.png`,
    description: siteSEO.defaultDescription,
    email: siteSEO.email,
    telephone: siteSEO.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "4, Sai Shree Industrial Estate, Plot No. 8, S.No. 82/1, MIDC Area, Ambad",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      postalCode: "422010",
      addressCountry: "IN",
    },
    foundingDate: "2002",
    sameAs: [
      "https://www.indiamart.com/unique-chemicals/",
    ],
  };
}

export function getFAQSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
