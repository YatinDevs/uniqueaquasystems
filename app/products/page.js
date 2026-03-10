import { buildMetadata } from "@/utils/seoConfig";
import Link from "next/link";
import { FlaskConical, Settings, Wrench, ArrowRight } from "lucide-react";

export const metadata = buildMetadata("products");

const divisions = [
  {
    slug: "chemical",
    title: "Chemical Water Treatment Division",
    description: "UNI-TREAT® series of specialty chemicals for cooling water, boiler water, descaling, RO treatment, fire side systems and sugar process applications.",
    icon: FlaskConical,
    color: "#0077B6",
    count: "7 Product Categories",
  },
  {
    slug: "mechanical",
    title: "Mechanical Water Treatment Division",
    description: "UNITREAT® complete mechanical water treatment systems — sand filters, softeners, DM plants, RO plants, UV disinfection systems.",
    icon: Settings,
    color: "#0096C7",
    count: "6 Product Categories",
  },
  {
    slug: "spares",
    title: "Spares & Equipments Division",
    description: "Complete water treatment plant accessories — water testing kits, filtration cartridges, FRP vessels, filtration media and multiport valves.",
    icon: Wrench,
    color: "#00B4D8",
    count: "3 Product Categories",
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete water treatment solutions across 3 specialized divisions — chemical treatments, mechanical systems, and spares & equipment.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((div) => {
            const Icon = div.icon;
            return (
              <Link key={div.slug} href={`/products/${div.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 group border border-gray-100 h-full">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: div.color + "20" }}>
                    <Icon size={32} style={{ color: div.color }} />
                  </div>
                  <div className="text-xs font-semibold text-gray-400 mb-2">{div.count}</div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{div.title}</h2>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{div.description}</p>
                  <span className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: div.color }}>
                    Explore Division <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
