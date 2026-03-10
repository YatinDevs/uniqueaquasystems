import { buildMetadata } from "@/utils/seoConfig";
import { aboutData } from "@/lib/data";

export const metadata = buildMetadata("quality-policy");

export default function QualityPolicyPage() {
  const { qualityPolicy } = aboutData;
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{qualityPolicy.title}</h1>
          <div className="w-16 h-1 bg-[#0077B6] rounded mb-8" />
          <p className="text-gray-700 leading-relaxed text-lg">{qualityPolicy.description}</p>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-[#0077B6] font-semibold">Unique Aqua Systems & Chemical Industries — ISO Certified Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}
