// app/products/page.js
import { buildMetadata } from "@/utils/seoConfig";
import Link from "next/link";
import { FlaskConical, Settings, Wrench, ArrowRight, Droplets, CheckCircle } from "lucide-react";

export const metadata = buildMetadata("products");

const divisions = [
  {
    slug: "chemical",
    title: "Chemical Water Treatment Division",
    brand: "UNI-TREAT®",
    description:
      "UNI-TREAT® series of specialty chemicals for cooling water, boiler water, descaling, RO treatment, fire side systems and sugar process applications.",
    icon: FlaskConical,
    color: "#0077B6",
    count: "7 Product Categories",
    highlights: [
      "Scale & Corrosion Inhibitors",
      "Biocides & Dispersants",
      "Boiler Water Treatment",
      "RO & Descaling Chemicals",
    ],
  },
  {
    slug: "mechanical",
    title: "Mechanical Water Treatment Division",
    brand: "UNITREAT®",
    description:
      "UNITREAT® complete mechanical water treatment systems — sand filters, softeners, DM plants, RO plants, domestic RO and UV disinfection systems.",
    icon: Settings,
    color: "#0096C7",
    count: "6 Product Categories",
    highlights: [
      "Sand & Carbon Filters",
      "Water Softening Plants",
      "RO & DM Systems",
      "UV Disinfection Systems",
    ],
  },
  {
    slug: "spares",
    title: "Spares & Equipments Division",
    brand: "Accessories",
    description:
      "Complete water treatment plant accessories — water testing kits for 30+ parameters, filtration cartridges, FRP vessels, filtration media and multiport valves.",
    icon: Wrench,
    color: "#00B4D8",
    count: "3 Product Categories",
    highlights: [
      "Water Testing Kits (30+)",
      "BACTASLYDE Microbe Detection",
      "Filter Cartridges (0.2–100µ)",
      "FRP Vessels & Valves",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-1 lg:pt-6">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#03045E] via-[#023E8A] to-[#0077B6] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00B4D8] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#0077B6] rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm mb-6">
            <Droplets className="w-4 h-4" />
            <span>Total Water Management Solutions Since 2002</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            Complete water treatment solutions across 3 specialized divisions —
            UNI-TREAT® chemical treatments, UNITREAT® mechanical systems, and
            genuine spares & equipment.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { value: "3", label: "Divisions" },
              { value: "16", label: "Product Categories" },
              { value: "100+", label: "Products" },
              { value: "2002", label: "Since" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00B4D8]">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 mb-[-1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            className="fill-gray-50 w-full h-auto"
          >
            <path d="M0,40L80,45C160,51,320,61,480,56C640,51,800,27,960,24C1120,21,1280,37,1360,45L1440,53L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </section>

      {/* ── Divisions Grid ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03045E] mb-3">
              Our 3 Specialized <span className="text-[#0077B6]">Divisions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each division is designed to address specific water treatment challenges with
              industry-leading products and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {divisions.map((div) => {
              const Icon = div.icon;
              return (
                <Link key={div.slug} href={`/products/${div.slug}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 group border border-gray-100 h-full flex flex-col hover:border-[#0077B6]/30">
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: div.color + "15" }}
                    >
                      <Icon size={32} style={{ color: div.color }} />
                    </div>

                    {/* Badge */}
                    <div
                      className="text-xs font-bold mb-2 px-2 py-1 rounded-full inline-block w-fit"
                      style={{
                        backgroundColor: div.color + "15",
                        color: div.color,
                      }}
                    >
                      {div.brand}
                    </div>

                    <div className="text-xs font-semibold text-gray-400 mb-2">
                      {div.count}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{div.title}</h2>
                    <p className="text-gray-600 mb-5 text-sm leading-relaxed flex-grow">
                      {div.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {div.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0" />
                          <span className="text-gray-600">{h}</span>
                        </div>
                      ))}
                    </div>

                    <span
                      className="inline-flex items-center gap-2 font-bold text-sm group-hover:gap-3 transition-all"
                      style={{ color: div.color }}
                    >
                      Explore Division <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why Unique Aqua ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#03045E] mb-3">
              Why Choose{" "}
              <span className="text-[#0077B6]">Unique Aqua?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏭",
                title: "Total Water Management",
                desc: "Chemical + Mechanical + Spares — everything under one roof since 2002.",
              },
              {
                icon: "✅",
                title: "ISO Certified Quality",
                desc: "Committed to quality products and services that comply with agreed requirements.",
              },
              {
                icon: "🔬",
                title: "R&D Driven",
                desc: "Extensive R&D with own production facilities for tailor-made solutions.",
              },
              {
                icon: "🤝",
                title: "Technical Support",
                desc: "High-skilled representatives providing professional consultancy and service.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-[#03045E] to-[#0077B6] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Need Expert Water Treatment Advice?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Our technical team is ready to help you choose the right products for
            your specific water treatment challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#0077B6] rounded-xl font-bold hover:bg-gray-100 hover:shadow-xl transition-all hover:scale-105">
                Contact Us
              </button>
            </Link>
            <Link href="/application-areas">
              <button className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white rounded-xl font-bold border border-white/30 hover:bg-white/20 hover:shadow-xl transition-all hover:scale-105">
                View Application Areas
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
