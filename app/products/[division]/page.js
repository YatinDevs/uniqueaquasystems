// app/products/[division]/page.js
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByDivision } from "@/lib/data";
import { buildDivisionMetadata } from "@/utils/seoConfig";
import DivisionClient from "./DivisionClient";
import {
  CheckCircle,
  Package,
  Droplets,
  Settings,
  Wrench,
  FlaskConical,
} from "lucide-react";

export function generateStaticParams() {
  return [
    { division: "chemical" },
    { division: "mechanical" },
    { division: "spares" },
  ];
}

export async function generateMetadata({ params }) {
  const { division } = await params;
  return buildDivisionMetadata(division);
}

const divisionConfig = {
  chemical: {
    title: "Chemical Water Treatment Division",
    subtitle: "UNI-TREAT® Series",
    description:
      "Complete UNI-TREAT® series of specialty chemicals for cooling water, boiler water, descaling, RO treatment, fire side systems and sugar process applications.",
    Icon: FlaskConical,
    color: "#0077B6",
    features: [
      "UNI-TREAT® branded formulations",
      "Scale & corrosion prevention",
      "Microbiological control",
      "Industrial strength biocides",
      "Boiler & cooling tower treatment",
      "ISO 9001 Certified Quality",
    ],
    stats: [
      { value: "7", label: "Categories" },
      { value: "10+", label: "Industries" },
      { value: "24/7", label: "Support" },
      { value: "ISO", label: "Certified" },
    ],
    gridDescription:
      "Comprehensive UNI-TREAT® chemical solutions for every industrial water treatment need.",
  },
  mechanical: {
    title: "Mechanical Water Treatment Division",
    subtitle: "UNITREAT® Systems",
    description:
      "UNITREAT® branded mechanical water treatment systems — sand filters, softeners, DM plants, RO plants, domestic RO and UV disinfection systems.",
    Icon: Settings,
    color: "#0096C7",
    features: [
      "UNITREAT® branded systems",
      "Capacity: 0.5 to 10,000 LpH",
      "MS, FRP & HDPE construction",
      "Single & multi-valve operation",
      "RO, DM, Softener, UV systems",
      "AMC & after-sales support",
    ],
    stats: [
      { value: "6", label: "Categories" },
      { value: "10,000", label: "LpH max" },
      { value: "AMC", label: "Service" },
      { value: "ISO", label: "Certified" },
    ],
    gridDescription:
      "High-quality UNITREAT® systems engineered for reliable, long-term operation across industries.",
  },
  spares: {
    title: "Spares & Equipments Division",
    subtitle: "Genuine Parts & Testing",
    description:
      "Complete water treatment plant accessories — water testing kits for 30+ parameters, filter cartridges, FRP pressure vessels, filtration media and multiport valves.",
    Icon: Wrench,
    color: "#00B4D8",
    features: [
      "30+ water quality parameters",
      "BACTASLYDE microbe detection",
      "0.2–100 micron filtration",
      "FRP pressure vessels",
      "Multiport valves (20–65 Nb)",
      "Genuine OEM spare parts",
    ],
    stats: [
      { value: "3", label: "Categories" },
      { value: "30+", label: "Test Parameters" },
      { value: "0.2µ", label: "Min. Micron" },
      { value: "ISO", label: "Certified" },
    ],
    gridDescription:
      "Genuine spare parts, testing equipment and filtration accessories for all water treatment plants.",
  },
};

export default async function DivisionPage({ params }) {
  const { division } = await params;
  const products = getProductsByDivision(division);
  const config = divisionConfig[division];

  if (!config) notFound();

  const { Icon } = config;

  return (
    <main className="min-h-screen bg-white pt-1 lg:pt-6">
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-[#00B4D8] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-64 h-64 md:w-96 md:h-96 bg-[#0077B6] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{config.title}</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
              <Package className="w-4 h-4" />
              <span>{config.subtitle}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {config.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              {config.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
              {config.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#00B4D8]">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 mb-[-1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            className="fill-white w-full h-auto"
          >
            <path d="M0,40L80,45C160,51,320,61,480,56C640,51,800,27,960,24C1120,21,1280,37,1360,45L1440,53L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* ── Features Section ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-block px-3 py-1.5 bg-[#e0f7ff] rounded-full text-[#0077B6] font-semibold text-xs md:text-sm mb-4">
              Key Features
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03045E] mb-3">
              Why Choose Our{" "}
              <span className="text-[#0077B6]">{config.title}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Engineered for performance, reliability, and industrial excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {config.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all"
              >
                <CheckCircle className="w-5 h-5 text-[#00B4D8] flex-shrink-0" />
                <span className="text-sm md:text-base text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────── */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-[#0077B6]/10 text-[#0077B6] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Package className="w-4 h-4" />
              <span>Product Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03045E] mb-3">
              Explore Our Complete{" "}
              <span className="text-[#0077B6]">Range</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {config.gridDescription}
            </p>
          </div>

          <DivisionClient products={products} division={division} />
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[#0077B6] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#00B4D8] rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03045E] mb-4">
            Need a Custom{" "}
            <span className="text-[#0077B6]">Solution?</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Our technical experts can help you find the perfect water treatment
            solution for your specific requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#0077B6] text-white rounded-xl font-bold text-sm md:text-base hover:bg-[#005a8c] hover:shadow-xl transition-all hover:scale-105">
                Contact Our Team
              </button>
            </Link>
            <Link href="/products">
              <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-white text-[#0077B6] rounded-xl font-bold text-sm md:text-base hover:shadow-xl transition-all hover:scale-105 border-2 border-[#0077B6]">
                All Divisions
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export const revalidate = 3600;
