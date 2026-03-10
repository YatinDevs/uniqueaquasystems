import { buildMetadata } from "@/utils/seoConfig";
import Link from "next/link";
import { applicationAreas } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export const metadata = buildMetadata("application-areas");

export default function ApplicationAreasPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Application Areas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unique Aqua delivers tailored water treatment solutions for every industry — from cooling towers to pharmaceutical pure water systems.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationAreas.map((area) => (
            <Link key={area.slug} href={`/application-areas/${area.slug}`}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6 h-full border border-gray-100 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: area.color + "20" }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: area.color }} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{area.name}</h2>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{area.description}</p>
                <div className="space-y-1 mb-4">
                  {area.solutions.slice(0, 3).map((s, i) => (
                    <div key={i} className="text-xs text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0077B6]" />
                      {s}
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-[#0077B6] font-semibold text-sm">
                  View Solutions <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
