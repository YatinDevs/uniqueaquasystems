import { buildMetadata } from "@/utils/seoConfig";
import { aboutData, companyInfo } from "@/lib/data";
import Link from "next/link";

export const metadata = buildMetadata("about-us");

export default function AboutUsPage() {
  const { whoWeAre, qualityPolicy, mission, vision, divisions } = aboutData;
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="bg-gradient-to-br from-[#03045E] to-[#0077B6] rounded-3xl p-10 text-white mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-white/90 text-lg max-w-3xl">{whoWeAre.subtitle}</p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {whoWeAre.highlights.map((h, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="text-3xl font-bold text-[#0077B6] mb-1">{h.value}</div>
              <div className="text-sm text-gray-500">{h.description}</div>
            </div>
          ))}
        </div>

        {/* About paragraphs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="space-y-4">
            {whoWeAre.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>

        {/* Mission & Quality Policy */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-8 text-white">
            <h2 className="text-xl font-bold mb-4">{mission.title}</h2>
            <p className="text-white/90 leading-relaxed">{mission.description}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{qualityPolicy.title}</h2>
            <p className="text-gray-700 leading-relaxed text-sm">{qualityPolicy.description}</p>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-gray-900 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-4">{vision.title}</h2>
          <p className="text-gray-300 leading-relaxed">{vision.description}</p>
        </div>
      </div>
    </div>
  );
}
