import { buildMetadata } from "@/utils/seoConfig";
import { aboutData } from "@/lib/data";

export const metadata = buildMetadata("our-mission");

export default function OurMissionPage() {
  const { mission, vision } = aboutData;
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-2xl p-10 text-white">
          <h1 className="text-4xl font-bold mb-4">{mission.title}</h1>
          <p className="text-white/90 leading-relaxed text-lg">{mission.description}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{vision.title}</h2>
          <div className="w-16 h-1 bg-[#0077B6] rounded mb-6" />
          <p className="text-gray-700 leading-relaxed text-lg">{vision.description}</p>
        </div>
      </div>
    </div>
  );
}
